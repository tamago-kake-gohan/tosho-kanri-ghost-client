"use client";
import { usePathname } from "next/navigation";
import axios from "@/components/utilAxios";
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
      </form>
      {message && <div>{message}</div>}
      <button type="submit" className={Styles.button}>作成する</button>
    </div>
  );
}

export default GroupCreation;