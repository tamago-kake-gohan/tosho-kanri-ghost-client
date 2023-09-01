import { useEffect, useState } from "react";
import LendStatus from "../LendStatus/LendStatus";
import RatingStar from "../RatingStar/RatingStar";
import Styles from "@/components/BookDetailTable/BookDetailTable.module.scss";
import axios from "../utilAxios";

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

  const setRating = async (bookId: number, rating: number) => {
    await axios
      .post("/api/v1/set_rate", {
        book_id: bookId,
        rate: rating,
        comment: "",
      })
      .then((res: any) => {
        console.log("set rate", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleStarClick = (index: number, rating: number) => {
    const newBooks = [...updatedBooks];
    newBooks[index].rating = rating;
    setRating(newBooks[index].id, rating);
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
    <div className={Styles.wrapper}>
      <div className={Styles.tableHeader}>
        <span className={Styles.headerItem}>書籍名</span>
        <span className={Styles.headerItem}>ステータス</span>
        <span className={Styles.headerItem}>書籍評価</span>
      </div>
      <div className={Styles.tableBody}>
        {books.length > 0 &&
          books.map((book, index) => (
            <div className={Styles.tableRow} key={index}>
              <span
                className={`${Styles.tableItem} ${Styles.tableItemBookname}`}
              >
                {book.title}
              </span>
              <span
                className={`${Styles.tableItem} ${Styles.tableItemStatus}`}
                onClick={() => handleLendStatusChange(index)}
              >
                <LendStatus label={book.state} />
              </span>
              <span className={`${Styles.tableItem} ${Styles.tableItemOwner}`}>
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
