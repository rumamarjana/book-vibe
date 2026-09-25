"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';

const ReadButton = ({book}:{book: IBook}) => {
    

   const {readBooks,setReadBooks} = useContext(BooksContext);
   

    const handleReadBooks = () => {
          console.log("read book btn triggered", book);
    
      setReadBooks([...readBooks, book]);

    }



    return  <button onClick={() => handleReadBooks()}
            className="px-7 py-3 border border-gray-300 rounded-xl 
            font-semibold text-gray-800 hover:bg-gray-100 transition-colors">
              Read
            </button>
};

export default ReadButton;