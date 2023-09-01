"use client";

import SelectGroup from "@/components/SelectGroup/SelectGroup";
import Styles from "@/app/home/home.module.css";
import Button from "@/components/Button/Button";
import Link from "next/link";

const Main = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.buttonContainer}>
        {/* ルーティングはLinkタグで */}
        <Link className={Styles.buttonRow} href="/groupCreation">
          <Button text="図書館をつくる" size="large" />
        </Link>
        <Link className={Styles.buttonRow} href="/bookRegistration">
          <Button text="本を登録する" size="large" />
        </Link>
        <Link className={Styles.buttonRow} href="/bookManagement">
          <Button text="登録した本の確認" size="large" />
        </Link>
        <Link className={Styles.buttonRow} href="/lendRequest">
          <Button text="貸出を許可する" size="large" />
        </Link>
        <Link className={Styles.buttonRow} href="/">
          <Button text="返却の催促をする" size="large" />
        </Link>
      </div>
      <SelectGroup />
    </div>
  );
};

export default Main;
