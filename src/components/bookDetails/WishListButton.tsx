"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';

const WishListButton = ({book}:{book: IBook}) => {
    
    const { wishlist, setWishlist } = useContext(BooksContext);
   

    const handlewishlist = () => {
          console.log("read book btn triggered", book);
    
      setWishlist([...wishlist, book]);

    }



    return  <button onClick={() => handlewishlist()}
            className="px-7 py-3 border border-gray-300 rounded-xl 
            font-semibold text-gray-800 hover:bg-gray-100 transition-colors">
              Add to   Wishlist
            </button>
};

export default WishListButton;