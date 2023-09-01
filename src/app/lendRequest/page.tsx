"use client";
import { useEffect, useState } from "react";

import RequestTable from "@/components/RequestTable/RequestTable";
import Styles from "@/app/lendRequest/lendRequest.module.scss";
import Modal from "@/components/Modal/Modal";
import axios from "@/components/utilAxios";

export type Request = {
  id: number;
  title: string;
  borrower_name: string;
  status: string;
  user_book_id: number;
};
const LendRequest = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [requestsData, setRequestsData] = useState<Request[]>([]);

  const getRequests = async () => {
    await axios
      .get("/api/v1/get_requests", {})
      .then((res) => {
        console.log("r", res.data);
        if (res.data) {
          setRequestsData(res.data.data);
        } else {
          setRequestsData([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    void getRequests();
  }, []);

  const handleLend = async (userLendBookId: number) => {
    await axios
      .post("/api/v1/process_request", {
        user_lend_book_id: Number(userLendBookId),
        accept: true,
      })
      .then((res) => {
        console.log(res.data);
        setModalOpen(true);
        setModalMessage("貸出しました");
        void getRequests();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDecline = async (userLendBookId: number) => {
    await axios
      .post("/api/v1/process_request", {
        user_lend_book_id: Number(userLendBookId),
        accept: false,
      })
      .then((res) => {
        console.log(res.data);
        setModalOpen(true);
        setModalMessage("貸出しませんでした");
        void getRequests();
      })
      .catch((err) => {
        console.log(err);
      });
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
