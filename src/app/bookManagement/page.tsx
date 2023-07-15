import "./bookManagement.css";
import BookStatusTable from "@/components/BookStatusTable/BookStatusTable";

const BookManagement = () => {
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
  return (
    <div className="book-management-container">
      <div className="library-name">TKG としょかん</div>
      <div className="book-status-table">
        <BookStatusTable books={books} />
      </div>
    </div>
  );
};

export default BookManagement;
