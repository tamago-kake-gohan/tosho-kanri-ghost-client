import LendStatus from "../LendStatus/LendStatus";
import Styles from "@/components/BookStatusTable/BookStatusTable.module.scss";

type Book = {
  id: number;
  title: string;
  state: "available" | "lending" | "unavailable";
  owner_name: string;
};

interface BookStatusTableProps {
  books: Book[];
  onDetail: (index: number) => void;
}

const BookStatusTable: React.FC<BookStatusTableProps> = ({
  books,
  onDetail,
}) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.tableHeader}>
        <span className={Styles.headerItem}>書籍名</span>
        <span className={Styles.headerItem}>ステータス</span>
        <span className={Styles.headerItem}>持ち主</span>
      </div>
      <div className={Styles.tableBody}>
        {books.length > 0 &&
          books.map((book: Book) => (
            <div
              className={Styles.tableRow}
              key={book.title}
              onClick={() => onDetail(book.id)}
            >
              <span
                className={`${Styles.tableItem} ${Styles.tableItemBookname}`}
              >
                {book.title}
              </span>
              <span className={`${Styles.tableItem} ${Styles.tableItemStatus}`}>
                <LendStatus label={book.state} />
              </span>
              <span className={`${Styles.tableItem} ${Styles.tableItemOwner}`}>
                {book.owner_name}さん
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookStatusTable;
