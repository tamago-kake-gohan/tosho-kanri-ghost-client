"use client";
import { useEffect, useState } from "react";
import "./bookManagement.css";
import BookDetailTable from "@/components/BookDetailTable/BookDetailTable";
import axios from "@/components/utilAxios";

interface Book {
  id: number;
  title: string;
  state: "available" | "lending" | "unavailable";
  rating: number;
}

const BookManagement = () => {
  const [booksData, setBooksData] = useState<Book[]>([]);
  useEffect(() => {
    const getBooks = async () => {
      await axios
        .get("/api/v1/get_books")
        .then((res: any) => {
          setBooksData(res.data.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getBooks();
  }, []);

  return (
    <div className="book-management-container">
      <div className="library-name">登録中の書籍</div>
      <div className="book-status-table">
        <BookDetailTable books={booksData} />
      </div>
    </div>
  );
};

export default BookManagement;
