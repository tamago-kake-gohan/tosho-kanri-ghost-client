"use client";
import axios from "@/components/utilAxios";
import { AxiosResponse, AxiosError } from "axios";
import Button from "@/components/Button/Button";
import Styles from "@/app/signin/signin.module.scss";
import { FormEvent, MouseEvent, useState } from "react";

const GroupCreation = () => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  type RESPONSE = { message: string; status: "error" | "success" };

  const onSubmit = (
    // 引数の型指定
    e: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>,
  ) => {
    // イベントに対するデフォルト操作のキャンセル
    e.preventDefault();
    setLoading(true);
    void (async () => {
      await axios
        .post("/api/v1/login", {
          Email: email,
          Password: password,
        })
        .then((res: AxiosResponse<RESPONSE>) => {
          const { data, status } = res;
          if (data.status === "error") {
            setMessage("メールアドレスかパスワードが違います");
            return;
          }
          setLoading(false);
        })
        .catch((e: AxiosError<{ error: string }>) => {
          console.log(e.message);
        });
    })();
    console.log("テスト");
  };

  return (
    <div className={Styles.wrapper}>
      <h1>図書管理ごーすと！</h1>

      {loading && <div className={Styles.loading} />}

      <form className={Styles.form} onSubmit={onSubmit}>
        <p>MAIL ADDRESS</p>
        <input
          type="text"
          className={Styles.input}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p>PASSWORD</p>
        <input
          type="password"
          className={Styles.input}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className={Styles.button}>
          <Button type="submit" text="ログイン" />
        </div>
      </form>
      {message && <div>{message}</div>}
      <div className={Styles.signup}>
        <p>
          新規登録は<a href="/signup">こちら</a>
        </p>
      </div>
    </div>
  );
};

export default GroupCreation;
