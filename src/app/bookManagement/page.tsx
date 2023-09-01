"use client";
import { useEffect, useState } from "react";
import Styles from "@/app/bookManagement/bookManagement.module.scss";
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
    <div className={Styles.bookManagementContainer}>
      <div className={Styles.libraryName}> 登録した本</div>
      <div className={Styles.bookStatusTable}>
        <BookDetailTable books={booksData} />
      </div>
    </div>
  );
};

export default BookManagement;
