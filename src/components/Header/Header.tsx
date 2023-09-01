"use client";
import Styles from "@/components/Header/Header.module.scss";
import axios from "@/components/utilAxios";
import { AxiosResponse, AxiosError } from "axios";
import { useState, useEffect } from "react";
import HomeButton from "@/components/Header/HomeButton";
import BookManagamentButton from "./BookManagementButton";
import SignOutButton from "./SignOut";

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

  const signOut = async () => {
    await axios.get("/api/v1/logout");
  };

  return (
    <header className={Styles.wrapper}>
      {show ? (
        <>
          <BookManagamentButton />
          <HomeButton />
          <div onClick={signOut}>
            <SignOutButton />
          </div>
        </>
      ) : null}
    </header>
  );
};

export default Header;
