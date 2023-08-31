import CreateReturnDemand from "@/components/CreateReturnDemand/CreateReturnDemand";
import Style from "./BookLendingTable.module.scss";

type Book = {
  id: number;
  title: string;
  state: "available" | "lending" | "unavailable";
  borrower_name: string;
};

interface BookStatusTableProps {
  books: Book[];
}

const BookLendingTable: React.FC<BookStatusTableProps> = ({ books }) => {
  return (
    <div className={Style.tableContainer}>
      <div className={Style.tableHeader}>
        <span className={Style.headerItem}>書籍名</span>
        <span className={Style.headerItem}>借りてる人</span>
        <span className={Style.headerItem}>催促状</span>
      </div>
      <div className={Style.tableBody}>
        {books.length > 0 &&
          books.map((book: Book) => (
            <div key={book.id} className={Style.tableRow}>
              <span className={`${Style.tableItem} ${Style.tableItemBookname}`}>
                {book.title}
              </span>
              <span className={`${Style.tableItem} ${Style.tableItemStatus}`}>
                {book.borrower_name}さん
              </span>
              <span className={`${Style.tableItem} ${Style.tableItemBorrower}`}>
                <CreateReturnDemand id={book.id} />
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookLendingTable;
