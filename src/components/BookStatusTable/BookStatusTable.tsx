import LendStatus from "../LendStatus/LendStatus";
import "./BookStatusTable.css";

interface Book {
  bookName: string;
  status: "貸出中" | "貸出可" | "貸出不可";
  owner: string;
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
        {books.map((book, index) => (
          <div
            className="table-row"
            key={index}
            onClick={() => onDetail(index)}
          >
            <span className="table-item table-item-bookname">
              {book.bookName}
            </span>
            <span className="table-item table-item-status">
              <LendStatus label={book.status} />
            </span>
            <span className="table-item table-item-owner">
              {book.owner}さん
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookStatusTable;
