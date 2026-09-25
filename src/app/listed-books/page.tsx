'use client';

import { useContext } from "react";
import { BooksContext, } from '@/context/BooksContext';

const ListedBooks  = () => {


 const { readBooks,wishlist } = useContext(BooksContext);

      // console.log(readBooks, wishlist, "readBooks", "wishlist");

     alert("you are add books") 
    return <div>Listed books</div>
};

export default ListedBooks ;