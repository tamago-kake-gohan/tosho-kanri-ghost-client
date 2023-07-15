import LendStatus from "../LendStatus/LendStatus";
import "./BookDetailModal.css";

interface ModalProps {
  closeModal: () => void;
  bookId: number;
}

const BookDetailModal: React.FC<ModalProps> = ({ closeModal, bookId }) => {
  const bookName = "書籍名ABC";
  const bookAuthor = "TKG";
  const bookPage = "120";
  const bookOwner = "TKG";
  const lendStatus = "貸出中";
  const bookBorrower = "TKG";
  const bookReview = bookId;

  const renderRatingStars = (bookReview: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={i < bookReview ? "#FFC107" : "#F0F0F0"}
        >
          <path d="M12 2a9 9 0 0 1 9 9v7.5a3.5 3.5 0 0 1-6.39 1.976a2.999 2.999 0 0 1-5.223 0a3.5 3.5 0 0 1-6.382-1.783L3 18.499V11a9 9 0 0 1 9-9Zm0 10c-1.105 0-2 1.12-2 2.5s.895 2.5 2 2.5s2-1.12 2-2.5s-.895-2.5-2-2.5ZM9.5 8a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm5 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z" />
        </svg>,
      );
    }
    return stars;
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <div className="modal-content">
          <div className="left-block">
            <h2 className="book-name">{bookName}</h2>
            <hr className="underline" />
            <div className="book-size" />
            <p className="book-info">
              <span className="book-info-label">著者</span>
              <span className="book-info-value">{bookAuthor}</span>
            </p>
            <p className="book-info">
              <span className="book-info-label">ページ数</span>
              <span className="book-info-value">{bookPage}</span>
            </p>
          </div>
          <div className="right-block">
            <hr className="separator" />
            <div className="row">
              <p className="row-label">持ち主</p>
              <p className="row-value">{bookOwner}さん</p>
            </div>
            <hr className="separator" />
            <div className="row">
              <p className="row-label">ステータス</p>
              <p className="row-value">
                <LendStatus label={lendStatus} />
              </p>
            </div>
            <hr className="separator" />
            <div className="row">
              <p className="row-label">借りてる人</p>
              <p className="row-value">{bookBorrower}さん</p>
            </div>
            <hr className="separator" />
            <div className="row">
              <p className="row-label">持ち主の評価</p>
              <div className="rating-stars">
                {renderRatingStars(bookReview)}
              </div>
            </div>
          </div>
          <button className="borrow-button">借りたい！</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailModal;
