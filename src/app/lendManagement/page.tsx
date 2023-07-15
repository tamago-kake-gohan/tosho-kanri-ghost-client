"use client";
import { useState } from "react";
import "./lendManagement.css";
import BookStatusTable from "@/components/BookStatusTable/BookStatusTable";
import BookDetailModal from "@/components/BookDetailModal/BookDetailModal";

const lendManagement = () => {
  const books = [
    {
      bookName: "書籍名A",
      status: "貸出中" as const,
      owner: "T",
    },
    {
      bookName: "書籍名AB",
      status: "貸出可" as const,
      owner: "TK",
    },
    {
      bookName: "書籍名ABC",
      status: "貸出不可" as const,
      owner: "TKG",
    },
    {
      bookName: "書籍名ABCABC",
      status: "貸出中" as const,
      owner: "TKGTKG",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalBook, setModalBook] = useState(0);

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
        <BookStatusTable books={books} onDetail={handleDetail} />
      </div>
      {modalOpen && (
        <BookDetailModal closeModal={closeModal} bookId={modalBook} />
      )}
    </div>
  );
};

export default lendManagement;