"use client";
import { useEffect, useState } from "react";

import RequestTable from "@/components/RequestTable/RequestTable";
import Styles from "@/app/lendRequest/lendRequest.module.scss";
import Modal from "@/components/Modal/Modal";

export type Request = {
  id: number;
  title: string;
  borrower_name: string;
  status: string;
};
const LendRequest = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [requestsData, setRequestsData] = useState<Request[]>([]);

  useEffect(() => {
    const requests = [
      {
        id: 0,
        title: "書籍名A",
        borrower_name: "T",
        status: "requested",
      },
      {
        id: 1,
        title: "書籍名B",
        borrower_name: "K",
        status: "requested",
      },
      {
        id: 2,
        title: "書籍名C",
        borrower_name: "G",
        status: "accepted",
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
