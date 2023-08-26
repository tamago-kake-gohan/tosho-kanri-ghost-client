"use client";
import { useState, useEffect } from "react";
import "./lendManagement.css";
import BookStatusTable from "@/components/BookStatusTable/BookStatusTable";
import BookDetailModal from "@/components/BookDetailModal/BookDetailModal";
import axios from "@/components/utilAxios";

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

  useEffect(() => {
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

  return (
    <div className="book-management-container">
      <div className="library-name">TKG としょかん</div>
      <div className="book-status-table">
        <BookStatusTable books={booksData} onDetail={handleDetail} />
      </div>
      {modalOpen && (
        <BookDetailModal closeModal={closeModal} bookId={modalBookId} />
      )}
    </div>
  );
};

export default LendManagement;
