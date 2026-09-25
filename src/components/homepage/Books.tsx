
import React from "react";
import BookCard from "../shared/BookCard";

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();

  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-12 px-4">
      {/* Books Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.slice(0, 9).map((book: IBook, ind: number) => {
          return <BookCard key={ind} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;