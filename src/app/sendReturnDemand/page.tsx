"use client";
import { useEffect, useState } from "react";
import BookLendingTable from "@/components/BookLendingTable/BookLendingTable";
import axios from "@/components/utilAxios";
import Style from "@/app/sendReturnDemand/sendReturnDemand.module.scss";

type Book = {
  id: number;
  title: string;
  state: "available" | "lending" | "unavailable";
  borrower_name: string;
};

const SendReturnDemand = () => {
  const [booksData, setBooksData] = useState<Book[]>([]);
  useEffect(() => {
    const getBooks = async () => {
      await axios
        .get("/api/v1/get_requests", {})
        .then((res: any) => {
          setBooksData(res.data.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    void getBooks();
  }, []);
  return (
    <div>
      <div className={Style.bookManagementContainer}>
        <div className={Style.libraryName}>貸出中の本</div>
        <div className={Style.bookStatusTable}>
          <BookLendingTable books={booksData} />
        </div>
      </div>
    </div>
  );
};

export default SendReturnDemand;
