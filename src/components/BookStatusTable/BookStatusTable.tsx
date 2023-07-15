import { parse } from "path";
import LendStatus from "../LendStatus/LendStatus";
import "./BookStatusTable.css";

interface Book {
  id: string;
  title: string;
  state: "available" | "lending" | "unavailable";
  owner_name: string;
}

interface BookStatusTableProps {
  books: Book[];
  onDetail: (index: number) => void;
}

const BookStatusTable: React.FC<BookStatusTableProps> = ({
  books,
  onDetail,
}) => {
  return (
    <div className="table-container">
      <div className="table-header">
        <span className="header-item">書籍名</span>
        <span className="header-item">ステータス</span>
        <span className="header-item">持ち主</span>
      </div>
      <div className="table-body">
        {books.map((book) => (
          <div
            className="table-row"
            key={book.id}
            onClick={() => onDetail(parseFloat(book.id))}
          >
            <span className="table-item table-item-bookname">{book.title}</span>
            <span className="table-item table-item-status">
              <LendStatus label={book.state} />
            </span>
            <span className="table-item table-item-owner">
              {book.owner_name}さん
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookStatusTable;
