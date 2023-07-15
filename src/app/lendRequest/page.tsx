import RequestTable from "@/components/RequestTable/RequestTable";
import "./lendRequest.css";

const LendRequest = () => {
  const requests = [
    {
      bookName: "書籍名A",
      sender: "T",
    },
    {
      bookName: "書籍名AB",
      sender: "TK",
    },
    {
      bookName: "書籍名ABC",
      sender: "TKG",
    },
    {
      bookName: "書籍名ABCABC",
      sender: "TKGTKG",
    },
  ];
  return (
    <div className="lend-request-container">
      <div className="library-name">今届いているリクエスト</div>
      <RequestTable requests={requests} />
    </div>
  );
};

export default LendRequest;
