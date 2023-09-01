"use client";
import { useEffect, useState } from "react";

import RequestTable from "@/components/RequestTable/RequestTable";
import Styles from "@/app/lendRequest/lendRequest.module.scss";
import Modal from "@/components/Modal/Modal";

type Request = {
  bookName: string;
  sender: string;
};
const LendRequest = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [requestsData, setRequestsData] = useState<Request[]>([]);

  useEffect(() => {
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
    setRequestsData(requests);
  }, []);

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
    <div className={Styles.wrapper}>
      <div className={Styles.libraryName}>今届いているリクエスト</div>
      <RequestTable
        requests={requestsData}
        onLend={handleLend}
        onDecline={handleDecline}
      />
      {modalOpen && <Modal closeModal={closeModal} message={modalMessage} />}
    </div>
  );
};

export default LendRequest;
