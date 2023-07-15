"use client";
import axios from "@/components/utilAxios";
import { AxiosResponse, AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import Styles from "@/app/signin/signin.module.scss";
import { FormEvent, MouseEvent, useState } from "react";

const GroupCreation = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const params = new URLSearchParams([["user", "1234"]]);

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
        .post("/api/v1/register", {
          Email: email,
          Name: name,
          Password: password,
        })
        .then((res: AxiosResponse<RESPONSE>) => {
          const { data, status } = res;
          if (data.status === "error") {
            setMessage("登録に失敗しました");
            return;
          }
          router.push(`/home?${params.toString()}`);
          setLoading(false);
        })
        .catch((e: AxiosError<{ error: string }>) => {
          console.log(e.message);
        });
    })();
    console.log(params.toString());
  };

  return (
    <div className={Styles.wrapper}>
      <h1>新規アカウント登録</h1>

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
        <p>NAME</p>
        <input
          type="type"
          className={Styles.input}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
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
          {message && <div>{message}</div>}
          <Button type="submit" text="新規登録" />
        </div>
      </form>
    </div>
  );
};

export default GroupCreation;
