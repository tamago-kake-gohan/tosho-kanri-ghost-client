import SelectGroup from "@/components/SelectGroup/SelectGroup";
import "./home.css";
import Button from "@/components/Button/Button";

const Main = () => {
  return (
    <div className="main-container">
      <div className="button-container">
        <div className="button-row">
          <Button text="グループ作成" size="large" />
        </div>
        <div className="button-row">
          <Button text="書籍登録" size="large" />
        </div>
        <div className="button-row">
          <Button text="貸出許可" size="large" />
        </div>
      </div>
      <div className="select-group-container">
        <SelectGroup />
      </div>
    </div>
  );
};

export default Main;
