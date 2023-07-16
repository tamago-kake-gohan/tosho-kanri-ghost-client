"use client";
import { useState, useEffect } from "react";
import "./lendManagement.css";
import BookStatusTable from "@/components/BookStatusTable/BookStatusTable";
import BookDetailModal from "@/components/BookDetailModal/BookDetailModal";
import axios from "@/components/utilAxios";

type Book = {
  owner_name: string;
  borrower_name: string;
  title: string;
  state: "available" | "lending" | "unavailable";
  rating: number;
};

const lendManagement = () => {
  const [booksData, setBooksData] = useState<Book[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalBook, setModalBook] = useState(0);

  useEffect(() => {
    const getBooks = async () => {
      var url = new URL(window.location.href);
      var params = url.searchParams;
      console.log(params.get("groupId"));
      await axios
        .get("/api/v1/get_team_books", {
          params: {
            team_id: params.get("groupId"),
          },
        })
        .then((res: any) => {
          console.log(res.data);
          setBooksData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getBooks();
  }, []);

  const handleDetail = (bookId: number) => {
    setModalOpen(true);
    setModalBook(bookId);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="book-management-container">
      <div className="library-name">TKG としょかん</div>
      <div className="book-status-table">
        <BookStatusTable books={booksData} onDetail={handleDetail} />
      </div>
      {modalOpen && (
        <BookDetailModal closeModal={closeModal} bookId={modalBook} />
      )}
    </div>
  );
};

export default lendManagement;
