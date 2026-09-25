import { IBook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';
import ReadButton from '@/components/bookDetails/ReadButton';
import WishListButton from '@/components/bookDetails/WishListButton';

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

interface IbookDetailsPageProp {
  params: Promise<{
    Id: string;
  }>;
}

const BookDetailsPage = async ({ params }: IbookDetailsPageProp) => {
  const { Id } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(Id),
  ) as IBook;

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Book Image Box */}
        <div className="lg:col-span-5 bg-[#f3f3f3] rounded-3xl p-12 flex items-center justify-center min-h-[550px]">
          <Image
            src={book.image}
            alt={book.bookName}
            width={350}
            height={480}
            className="w-auto h-auto max-h-[420px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* Book Details */}
        <div className="lg:col-span-7 flex flex-col">
          
          {/* Title */}
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-3">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="text-lg font-medium text-gray-700 mb-4">
            By : {book.author}
          </p>

          <hr className="border-t border-gray-200 my-2" />

          {/* Category */}
          <p className="text-lg text-gray-600 font-medium my-2">
            {book.category}
          </p>

          <hr className="border-t border-gray-200 my-2" />

          {/* Review */}
          <p className="text-gray-600 leading-relaxed my-3">
            <span className="font-bold text-gray-900">Review : </span>
            {book.review}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-3 my-4">
            <span className="font-bold text-gray-900 mr-2">Tag</span>
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#23be0a1a] text-[#23BE0A] font-medium px-4 py-1.5 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <hr className="border-t border-gray-200 my-2" />

          {/* Book Meta Details */}
          <div className="space-y-3 my-4 max-w-md">
            <div className="grid grid-cols-2 text-base">
              <span className="text-gray-500">Number of Pages:</span>
              <span className="font-bold text-gray-900">{book.totalPages}</span>
            </div>
            <div className="grid grid-cols-2 text-base">
              <span className="text-gray-500">Publisher:</span>
              <span className="font-bold text-gray-900">{book.publisher}</span>
            </div>
            <div className="grid grid-cols-2 text-base">
              <span className="text-gray-500">Year of Publishing:</span>
              <span className="font-bold text-gray-900">{book.yearOfPublishing}</span>
            </div>
            <div className="grid grid-cols-2 text-base">
              <span className="text-gray-500">Rating:</span>
              <span className="font-bold text-gray-900">{book.rating}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6">
             <ReadButton book={book} />
              <WishListButton book={book}  />
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;