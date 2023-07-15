"use client";
import { useState } from "react";

import RequestTable from "@/components/RequestTable/RequestTable";
import "./lendRequest.css";
import Modal from "@/components/Modal/Modal";

const LendRequest = () => {
  const requests = [
    {
      bookName: "書籍名A",
      sender: "T",
    },
    {
      bookName: "書籍名AB",
      sender: "TK",
    },
    {
      bookName: "書籍名ABC",
      sender: "TKG",
    },
    {
      bookName: "書籍名ABCABC",
      sender: "TKGTKG",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleLend = () => {
    setModalOpen(true);
    setModalMessage("貸出しました");
  };

  const handleDecline = () => {
    setModalOpen(true);
    setModalMessage("貸出しませんでした");
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="lend-request-container">
      <div className="library-name">今届いているリクエスト</div>
      <RequestTable
        requests={requests}
        onLend={handleLend}
        onDecline={handleDecline}
      />
      {modalOpen && <Modal closeModal={closeModal} message={modalMessage} />}
    </div>
  );
};

export default LendRequest;
