import { useEffect, useState } from "react";
import LendStatus from "../LendStatus/LendStatus";
import RatingStar from "../RatingStar/RatingStar";
import "./BookDetailTable.css";

interface Book {
  id: number;
  title: string;
  state: "available" | "lending" | "unavailable";
  rating: number;
}

interface BookDetailTableProps {
  books: Book[];
}

const BookDetailTable: React.FC<BookDetailTableProps> = ({ books }) => {
  const [updatedBooks, setUpdatedBooks] = useState<Book[]>(books);

  useEffect(() => {
    setUpdatedBooks(books);
  }, [books]);

  const handleStarClick = (index: number, rating: number) => {
    const newBooks = [...updatedBooks];
    newBooks[index].rating = rating;
    setUpdatedBooks(newBooks);
  };

  const handleLendStatusChange = (index: number) => {
    const newBooks = [...updatedBooks];
    const currentStatus = newBooks[index].state;

    switch (currentStatus) {
      case "available":
        newBooks[index].state = "unavailable";
        break;
      case "unavailable":
        newBooks[index].state = "lending";
        break;
      case "lending":
        newBooks[index].state = "available";
        break;
      default:
        newBooks[index].state = "available";
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
        {books.length > 0 &&
          books.map((book, index) => (
            <div className="table-row" key={index}>
              <span className="table-item table-item-bookname">
                {book.title}
              </span>
              <span
                className="table-item table-item-status"
                onClick={() => handleLendStatusChange(index)}
              >
                <LendStatus label={book.state} />
              </span>
              <span className="table-item table-item-owner">
                <RatingStar
                  maxStars={5}
                  currentRating={book.rating}
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
