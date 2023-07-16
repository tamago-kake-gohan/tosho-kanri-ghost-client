import axios from "@/components/utilAxios";
import { AxiosResponse, AxiosError } from "axios";
import LendStatus from "../LendStatus/LendStatus";
import "./BookDetailModal.css";
import { useEffect, useState } from "react";

interface ModalProps {
  closeModal: () => void;
  bookId: number;
}

type BookDetail = {
  message: string;
  status: "success" | "error";
  data: {
    owner_name: string;
    brrower_name: string;
    title: string;
    state: "available" | "lending" | "unavailable";
    rating: number;
  };
};

const BookDetailModal: React.FC<ModalProps> = ({ closeModal, bookId }) => {
  const userBookId = bookId;
  const bookAuthor = "TKG";
  const bookPage = "120";

  const [images, setImages] = useState("");
  const [message, setMessage] = useState("");
  // タイトル
  const [bookName, setBookName] = useState("");
  // 持ち主
  const [bookOwner, setbookOwner] = useState("");
  // ステータス
  const [lendStatus, setLendStatus] = useState<
    "available" | "lending" | "unavailable"
  >("available");
  // 借りてる人
  const [bookBorrower, setBookBorrower] = useState("");
  // 評価
  const [bookReview, setBookReview] = useState(0);

  const isbn = 9784422311074;

  useEffect(() => {
    setImages("https://iss.ndl.go.jp/thumbnail/" + isbn);
    void (async () => {
      await axios
        .post("/api/v1/get_book_detail", {
          user_book_id: userBookId,
        })
        .then((res: AxiosResponse<BookDetail>) => {
          const { data, status } = res;
          if (data.status === "error") {
            return;
          }
          setMessage(data.message);
          setbookOwner(data.data.owner_name);
          setBookBorrower(data.data.brrower_name);
          setBookName(data.data.title);
          setLendStatus(data.data.state);
          setBookReview(data.data.rating);
        })
        .catch((e: AxiosError<{ error: string }>) => {
          console.log(e.message);
        });
    })();
  }, []);

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
            <div className="book-size">
              <img src={images?.toString()} />
            </div>
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
              <p className="row-label">
                持ち主の
                <br />
                評価
              </p>
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
