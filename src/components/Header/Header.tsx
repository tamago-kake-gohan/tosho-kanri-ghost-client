"use client";
import "./Header.css";
import axios from "@/components/utilAxios";
import { AxiosResponse, AxiosError } from "axios";
import { useState, useEffect } from "react";
import HomeButton from "@/components/Header/HomeButton";
import BookManagamentButton from "./BookManagementButton";

const Header = () => {
  const [show, setShow] = useState(false);
  type RESPONSE = { is_logged_in: boolean };

  useEffect(() => {
    const getAuth = async () => {
      await axios
        .post("/api/v1/try_auth")
        .then((res: AxiosResponse<RESPONSE>) => {
          const { data, status } = res;
          if (data.is_logged_in) {
            setShow(true);
          } else {
            setShow(false);
          }
        })
        .catch((e: AxiosError<{ error: string }>) => {
          console.log(e.message);
        });
    };
    getAuth();
  });

  return (
    <header className="header-container">
      {show ? (
        <>
          <BookManagamentButton />
          <HomeButton />
        </>
      ) : null}
    </header>
  );
};

export default Header;
