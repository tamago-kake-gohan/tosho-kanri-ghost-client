"use client";

import SelectGroup from "@/components/SelectGroup/SelectGroup";
import "./home.css";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Main = () => {
  const router = useRouter();
  return (
    <div className="main-container">
      <div className="button-container">
        <Link className="button-row" href="/groupCreation">
          <Button text="図書館をつくる" size="large" />
        </Link>
        <Link className="button-row" href="/bookRegistration">
          <Button text="本を登録する" size="large" />
        </Link>
        <Link className="button-row" href="/bookManagement">
          <Button text="登録した本の確認" size="large" />
        </Link>
        <Link className="button-row" href="/lendRequest">
          <Button text="貸出を許可する" size="large" />
        </Link>
        <Link className="button-row" href="/sendReturnDemand">
          <Button text="返却の催促をする" size="large" />
        </Link>
      </div>
      <SelectGroup />
    </div>
  );
};

export default Main;
