import "./bookManagement.css";
import BookStatusTable from "@/components/BookStatusTable/BookStatusTable";

const BookManagement = () => {
  const books = [
    {
      bookName: "書籍名A",
      status: "貸出中",
      owner: "T",
    },
    {
      bookName: "書籍名AB",
      status: "貸出可",
      owner: "TK",
    },
    {
      bookName: "書籍名ABC",
      status: "貸出不可",
      owner: "TKG",
    },
    {
      bookName: "書籍名ABCABC",
      status: "貸出中",
      owner: "TKGTKG",
    },
  ];
  return (
    <div className="book-management-container">
      <div className="library-name">TKG としょかん</div>
      <BookStatusTable books={books} className="book-status-table" />
    </div>
  );
};

export default BookManagement;
