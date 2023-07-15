import "./RequestTable.css";

type Request = {
  bookName: string;
  sender: string;
};

interface RequestTableProps {
  requests: Request[];
  onLend: () => void;
  onDecline: () => void;
}

const RequestTable: React.FC<RequestTableProps> = ({
  requests,
  onLend,
  onDecline,
}) => {
  return (
    <div className="table-container">
      <div className="table-header">
        <span className="header-item">書籍名</span>
        <span className="header-item">リクエストした人</span>
        <span className="header-item"></span>
      </div>
      <div className="table-body">
        {requests.map((request, index) => (
          <div className="table-row" key={index}>
            <span className="table-item table-item-bookname">
              {request.bookName}
            </span>
            <span className="table-item table-item-sender">
              {request.sender}さん
            </span>
            <span className="table-item table-item-button">
              <div className="button-container">
                <button className="button-item" onClick={onLend}>
                  貸す
                </button>
                <button className="button-item" onClick={onDecline}>
                  貸せない
                </button>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestTable;
