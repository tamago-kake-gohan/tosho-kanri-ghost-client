"use client";

import SelectGroup from "@/components/SelectGroup/SelectGroup";
import "./home.css";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

const Main = () => {
  const router = useRouter();
  return (
    <div className="main-container">
      <div className="button-container">
        <div className="button-row">
          <Button text="図書館をつくる" size="large" />
        </div>
        <div className="button-row">
          <Button text="本を登録する" size="large" />
        </div>
        <div className="button-row">
          <Button text="登録した本の確認" size="large" />
        </div>
        <div className="button-row">
          <Button text="貸出を許可する" size="large" />
        </div>
        <div className="button-row">
          <Button text="返却の催促をする" size="large" />
        </div>
      </div>
      <SelectGroup />
    </div>
  );
};

export default Main;
