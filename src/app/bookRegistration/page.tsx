"use client";
import axios from "@/components/utilAxios";
import { AxiosResponse, AxiosError } from "axios";
import Styles from "@/app/bookRegistration/bookRegistration.module.scss";
import { ScannerWrapper } from "@/components/Scanner/ScannerWrapper";
import Button from "@/components/Button/Button";
import { FormEvent, MouseEvent, useState } from "react";

const bookRegistration = () => {
  const [isbn, setISBN] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
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
        .post("/api/v1/add_book", {
          ISBN: isbn,
        })
        .then((res: AxiosResponse<RESPONSE>) => {
          const { data, status } = res;
          if (data.status === "error") {
            setMessage(data.message);
            return;
          }
          setMessage("登録が完了しました");
          setLoading(false);
        })
        .catch((e: AxiosError<{ error: string }>) => {
          console.log(e.message);
        });
    })();
  };

  return (
    <div className={Styles.wrapper}>
      <h1>書籍登録</h1>
      <div className={Styles.camera}>
        <h2>カメラ入力</h2>
        <p>バーコードを読み取ります。</p>
        <ScannerWrapper callback={setISBN} />
      </div>

      <div className={Styles.inputForm}>
        <form className={Styles.form} onSubmit={onSubmit}>
          <p>
            カメラでうまく読み取れない場合は、ISBNコードを直接ご入力ください。
          </p>
          <input
            type="text"
            className={Styles.input}
            value={isbn}
            minLength={13}
            onChange={(e) => {
              setISBN(e.target.value);
            }}
          />
          {message && <div>{message}</div>}
          <div className={Styles.button}>
            <Button type="submit" text="書籍登録" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default bookRegistration;
