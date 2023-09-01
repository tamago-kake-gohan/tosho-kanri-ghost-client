"use client";
import { useState, useEffect } from "react";
import Styles from "@/app/lendManagement/lendManagement.module.scss";
import BookStatusTable from "@/components/BookStatusTable/BookStatusTable";
import BookDetailModal from "@/components/BookDetailModal/BookDetailModal";
import axios from "@/components/utilAxios";
import Button from "@/components/Button/Button";
import RefineButton from "@/components/RefineButton/RefineButton";

type Book = {
  id: number;
  title: string;
  state: "available" | "lending" | "unavailable";
  owner_name: string;
};

const LendManagement = () => {
  const [booksData, setBooksData] = useState<Book[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalBookId, setModalBookId] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [condition, setCondition] = useState("all");

  const getBooks = async () => {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    console.log(params.get("groupId"));
    await axios
      .get<{ data: Book[] }>("/api/v1/get_team_books", {
        params: {
          team_id: params.get("groupId"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setBooksData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    void getBooks();
  }, []);

  const handleDetail = (bookId: number) => {
    console.log("handle", bookId);
    setModalBookId(bookId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const getBooksWithCondition = async () => {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    await axios
      .get<{ data: Book[] }>("/api/v1/get_team_books/conditions", {
        params: {
          team_id: params.get("groupId"),
          keyword: keyword,
          status: condition,
        },
      })
      .then((res) => {
        console.log("success", res.data);
        setBooksData(res.data.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const onChangeCondition = () => {
    switch (condition) {
      case "all":
        setCondition("available");
        break;
      case "available":
        setCondition("lending");
        break;
      case "lending":
        setCondition("unavailable");
        break;
      case "unavailable":
        setCondition("all");
        break;
    }
  };

  const search = () => {
    getBooksWithCondition();
  };

  const clear = () => {
    setKeyword("");
    setCondition("all");
    getBooks();
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.libraryName}>TKG としょかん</div>
      <div className={Styles.searchContainer}>
        <div className={Styles.keywordBlock}>
          <p>キーワード検索</p>
          <input
            type="text"
            className={Styles.input}
            value={keyword}
            placeholder="書籍名から検索"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
        </div>
        <div className={Styles.refineBlock}>
          <p>絞り込み検索</p>
          <div onClick={onChangeCondition}>
            <RefineButton status={condition} />
          </div>
        </div>
        <div className={Styles.buttonBlock}>
          <div onClick={clear}>
            <Button text="クリア" size="small" color="light" />
          </div>
          <br />
          <div onClick={search}>
            <Button text="検索" size="small" color="dark" />
          </div>
        </div>
      </div>
      <hr />
      <div className={Styles.bookStatusTable}>
        <BookStatusTable books={booksData} onDetail={handleDetail} />
      </div>
      {modalOpen && (
        <BookDetailModal closeModal={closeModal} bookId={modalBookId} />
      )}
    </div>
  );
};

export default LendManagement;
