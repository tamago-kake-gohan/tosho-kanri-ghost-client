"use client";
import { useState, useEffect } from "react";
import "./lendManagement.css";
import BookStatusTable from "@/components/BookStatusTable/BookStatusTable";
import BookDetailModal from "@/components/BookDetailModal/BookDetailModal";

type Book = {
  id: string;
  title: string;
  state: "available" | "lending" | "unavailable";
  owner_name: string;
};

const lendManagement = () => {
  const [booksData, setBooksData] = useState<Book[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalBook, setModalBook] = useState(0);

  useEffect(() => {
    const books = [
      {
        id: "1",
        title: "書籍名A",
        state: "lending" as const,
        owner_name: "T",
      },
      {
        id: "2",
        title: "書籍名AB",
        state: "available" as const,
        owner_name: "TK",
      },
      {
        id: "3",
        title: "書籍名ABC",
        state: "unavailable" as const,
        owner_name: "TKG",
      },
      {
        id: "4",
        title: "書籍名ABCABC",
        state: "lending" as const,
        owner_name: "TKGTKG",
      },
    ];
    setBooksData(books);
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
