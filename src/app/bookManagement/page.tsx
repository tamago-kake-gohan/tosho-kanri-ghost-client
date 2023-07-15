"use client";
import "./bookManagement.css";
import BookDetailTable from "@/components/BookDetailTable/BookDetailTable";

const BookManagement = () => {
  const books = [
    {
      bookName: "書籍名A",
      status: "貸出中" as const,
      bookReview: 3,
    },
    {
      bookName: "書籍名AB",
      status: "貸出可" as const,
      bookReview: 5,
    },
    {
      bookName: "書籍名ABC",
      status: "貸出不可" as const,
      bookReview: 2,
    },
    {
      bookName: "書籍名ABCABC",
      status: "貸出中" as const,
      owner: "TKGTKG",
      bookReview: 1,
    },
  ];

  return (
    <div className="book-management-container">
      <div className="library-name">登録中の書籍</div>
      <div className="book-status-table">
        <BookDetailTable books={books} />
      </div>
    </div>
  );
};

export default BookManagement;
