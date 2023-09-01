import axios from "@/components/utilAxios";
import { AxiosResponse, AxiosError } from "axios";
import LendStatus from "../LendStatus/LendStatus";
import Styles from "@/components/BookDetailModal/BookDetailModal.module.scss";
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
    isbn: string;
  };
};

const BookDetailModal: React.FC<ModalProps> = ({ closeModal, bookId }) => {
  const userBookId = bookId;

  const [images, setImages] = useState("");
  const [_, setMessage] = useState("");
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

  useEffect(() => {
    void (async () => {
      await axios
        .get("/api/v1/get_book_detail", {
          params: {
            user_book_id: userBookId,
          },
        })
        .then((res: AxiosResponse<BookDetail>) => {
          console.log(res.data);
          const { data, status } = res;
          if (data.status === "error") {
            return;
          }
          setImages("https://iss.ndl.go.jp/thumbnail/" + data.data.isbn);
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

  const onRequest = async () => {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    await axios
      .post("/api/v1/request_rental", {
        user_book_id: userBookId,
        team_id: Number(params.get("groupId")),
      })
      .then((res) => {
        console.log(res.data);
        closeModal();
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log(e.message);
      });
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.modal}>
        <button className={Styles.closeButton} onClick={closeModal}>
          &times;
        </button>
        <div className={Styles.modalContent}>
          <div>
            <h2 className={Styles.bookName}>{bookName}</h2>
          </div>
          <div className={Styles.leftBlock}>
            <div className={Styles.bookSize}>
              <img src={images?.toString()} />
            </div>
          </div>
          <div className={Styles.rightBlock}>
            <hr className={Styles.separator} />
            <div className={Styles.row}>
              <p className={Styles.rowLabel}>持ち主</p>
              <p className={Styles.rowValue}>{bookOwner}</p>
            </div>
            <hr className={Styles.separator} />
            <div className={Styles.row}>
              <p className={Styles.rowLabel}>ステータス</p>
              <p className={Styles.rowValue}>
                <LendStatus label={lendStatus} />
              </p>
            </div>
            <hr className={Styles.separator} />
            <div className={Styles.row}>
              <p className={Styles.rowLabel}>借りてる人</p>
              <p className={Styles.rowValue}>{bookBorrower}</p>
            </div>
            <hr className={Styles.separator} />
            <div className={Styles.row}>
              <p className={Styles.rowLabel}>
                持ち主の
                <br />
                評価
              </p>
              <div className={Styles.ratingStars}>
                {renderRatingStars(bookReview)}
              </div>
            </div>
          </div>
          <button
            className={Styles.borrowButton}
            onClick={() => {
              onRequest();
            }}
          >
            借りたい！
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailModal;
