import React from 'react';
import Image from "next/image";
import { IBook } from '@/types/books.type';
import Link from "next/link";

interface IBookCardProps {
    book: IBook;
}



const BookCard = ({ book }: IBookCardProps) => {
    return (
        <div className="flex flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition hover:shadow-md" >
            {/* Book Image Container */}
            <div className="flex h-56 w-full items-center justify-center rounded-2xl bg-gray-100/70 p-6">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={800}
                    height={600}
                    className="h-full max-h-44 object-contain"
                />
            </div>

            {/* Tags (Placed Above Title) */}
            <div className="mt-6 flex flex-wrap gap-2">
                {book.tags?.map((tag, idx) => (
                    <span
                        key={idx}
                        className="rounded-full bg-emerald-50/80 px-4 py-1.5 text-sm font-medium text-emerald-500"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Book Name */}
            <h2 className="mt-4 text-xl font-bold tracking-tight text-gray-900">
                {book.bookName}
            </h2>

            {/* Author */}
            <p className="mt-2 text-sm font-medium text-gray-600">
                By : {book.author}
            </p>

            {/* Dashed Divider */}
            <div className="mt-5 border-t border-dashed border-gray-200 pt-4" />

            {/* Card Footer: Category & Rating */}
            <div className="mt-auto flex py-5 items-center justify-between text-sm font-medium text-gray-600">
                <span>{book.category}</span>

                <div className="flex items-center gap-1.5">
                    <span>{Number(book.rating).toFixed(2)}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4 text-gray-700"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385c.116.488-.42.877-.843.628l-4.702-2.775a.56.56 0 0 0-.558 0l-4.702 2.775c-.423.249-.959-.14-.843-.628l1.285-5.385a.563.563 0 0 0-.182-.557l-4.204-3.602c-.38-.325-.178-.948.32-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                    </svg>
                </div>
            </div>

            <Link href={`/books/${book.bookId}`}>
                <button className="btn w-full rounded-xl border-0 bg-slate-900 text-white transition-all hover:bg-emerald-600">
                    View Details →
                </button>
            </Link>
        </div>
    );
};

export default BookCard;