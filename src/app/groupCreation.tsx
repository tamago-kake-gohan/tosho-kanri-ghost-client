import { Header } from "../components/header";
import { useState } from "react";
 
export function GroupCreation() {
  const [groupName, setGroupName] = useState("");
  const [memberAddress, setMemberAddress] = useState("");

  return (
    <div>
      <h2>グループ作成</h2>
      <p>メンバー用メールアドレスは「,」で区切って入力してください。</p>
      
      <div>
        <p>GROUP NAME</p>
        <input
          type="text"
          value={groupName}
          onChange={(e) => {
            setGroupName(e.target.value);
          }}
        />
      </div>
      <div>
        <p>MEMBER MAIL ADDRESS</p>
        <input 
          type="text"
          value={memberAddress}
          onChange={(e)=>{
            setMemberAddress(e.target.value);
          }}
        />
      </div>
      <button type="submit">作成する</button>
    </div>
  );
}