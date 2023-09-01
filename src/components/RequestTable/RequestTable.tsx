import Styles from "@/components/RequestTable/RequestTable.module.scss";

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
    <div className={Styles.wrapper}>
      <div className={Styles.tableHeader}>
        <span className={Styles.headerItem}>書籍名</span>
        <span className={Styles.headerItem}>リクエストした人</span>
        <span className={Styles.headerItem}></span>
      </div>
      <div className={Styles.tableBody}>
        {requests.map((request, index) => (
          <div className={Styles.tableRow} key={index}>
            <span className={`${Styles.tableItem} ${Styles.tableItemBookname}`}>
              {request.bookName}
            </span>
            <span className={`${Styles.tableItem} ${Styles.tableItemSender}`}>
              {request.sender}さん
            </span>
            <span className={`${Styles.tableItem} ${Styles.tableItemButton}`}>
              <div className={Styles.buttonContainer}>
                <button className={Styles.buttonItem} onClick={onLend}>
                  貸す
                </button>
                <button className={Styles.buttonItem} onClick={onDecline}>
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
