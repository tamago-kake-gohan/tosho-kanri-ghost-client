import { useState } from "react";
import LendStatus from "../LendStatus/LendStatus";
import RatingStar from "../RatingStar/RatingStar";
import "./BookDetailTable.css";

interface Book {
  bookName: string;
  status: "貸出中" | "貸出可" | "貸出不可";
  bookReview: number;
}

interface BookDetailTableProps {
  books: Book[];
}

const BookDetailTable: React.FC<BookDetailTableProps> = ({ books }) => {
  const [updatedBooks, setUpdatedBooks] = useState<Book[]>(books);

  const handleStarClick = (index: number, rating: number) => {
    const newBooks = [...updatedBooks];
    newBooks[index].bookReview = rating;
    setUpdatedBooks(newBooks);
  };

  const handleLendStatusChange = (index: number) => {
    const newBooks = [...updatedBooks];
    const currentStatus = newBooks[index].status;

    switch (currentStatus) {
      case "貸出可":
        newBooks[index].status = "貸出不可";
        break;
      case "貸出不可":
        newBooks[index].status = "貸出中";
        break;
      case "貸出中":
        newBooks[index].status = "貸出可";
        break;
      default:
        newBooks[index].status = "貸出可";
    }

    setUpdatedBooks(newBooks);
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <span className="header-item">書籍名</span>
        <span className="header-item">ステータス</span>
        <span className="header-item">書籍評価</span>
      </div>
      <div className="table-body">
        {books.map((book, index) => (
          <div className="table-row" key={index}>
            <span className="table-item table-item-bookname">
              {book.bookName}
            </span>
            <span
              className="table-item table-item-status"
              onClick={() => handleLendStatusChange(index)}
            >
              <LendStatus label={book.status} />
            </span>
            <span className="table-item table-item-owner">
              <RatingStar
                maxStars={5}
                currentRating={book.bookReview}
                onStarClick={(rating) => handleStarClick(index, rating)}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetailTable;
