"use client";
import { usePathname } from "next/navigation";
import axios from "@/components/utilAxios";
import Button from "@/components/Button/Button"
import Styles from "@/app/groupCreation/groupCreation.module.scss";
import { AddressEditor } from "@/components/addressEditor";
import { FormEvent, MouseEvent, useState, useEffect } from "react";
 
const GroupCreation = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [groupName, setGroupName] = useState("");
  const [memberAddress, setMemberAddress] = useState([""]);

  const onSubmit = (
    // 引数の型指定
    e: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>
  ) => {
    // イベントに対するデフォルト操作のキャンセル
    e.preventDefault();
    setLoading(true);
    void (async () => {
      const res = await axios.post("",{
        groupName: groupName,
        memberAddress: memberAddress
      });
    })();
  };

  return (
    <div className={Styles.wrapper}>
        <h1>グループ作成</h1>

      {loading && <div className={Styles.loading} />}
      
      <form className={Styles.form} onSubmit={onSubmit} >
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
        <Button type="submit" text="作成する" size="large" />
      </form>
      {message && <div>{message}</div>}
    </div>
  );
}

export default GroupCreation;