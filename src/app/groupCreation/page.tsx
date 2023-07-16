"use client";
import axios from "@/components/utilAxios";
import { AxiosResponse, AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import { AddressEditor } from "@/components/addressEditor";
import Styles from "@/app/signin/signin.module.scss";
import { FormEvent, MouseEvent, useState } from "react";

const GroupCreation = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [groupName, setGroupName] = useState("");
  const [memberAddress, setMemberAddress] = useState<string[]>([]);
  const params = new URLSearchParams([["user", "1234"]]);

  type RESERR = {
    message: string;
    status: "error";
    data: string[];
  };
  type RESSUC = {
    message: string;
    status: "success";
    team_id: number;
  };
  const onSubmit = (
    e: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setLoading(true);
    void (async () => {
      await axios
        .post("/api/v1/create_teams", {
          Name: groupName,
          Emails: memberAddress,
        })
        .then((res: AxiosResponse<RESERR> | AxiosResponse<RESSUC>) => {
          const { data, status } = res;
          if (data.status === "error") {
            setMessage(data.data + "は存在しません。");
            return;
          }
          router.push(`/home?${params.toString()}`);
          setLoading(false);
        })
        .catch((e: AxiosError<{ error: string }>) => {
          console.log(e.message);
        });
    })();
  };

  return (
    <div className={Styles.wrapper}>
      <h1>グループ作成</h1>
      {loading && <div className={Styles.loading} />}

      <form className={Styles.form} onSubmit={onSubmit}>
        <p>GROUP NAME</p>
        <input
          type="text"
          className={Styles.input}
          value={groupName}
          onChange={(e) => {
            setGroupName(e.target.value);
          }}
        />
        <p>MEMBER MAIL ADDRESS</p>
        <AddressEditor addresses={memberAddress} onChange={setMemberAddress} />
        <div className={Styles.button}>
          {message && <div>{message}</div>}
          <Button type="submit" text="作成する" />
        </div>
      </form>
    </div>
  );
};

export default GroupCreation;
