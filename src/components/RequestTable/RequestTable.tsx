import Styles from "@/components/RequestTable/RequestTable.module.scss";
import { Request } from "@/app/lendRequest/page";
import Button from "@/components/Button/Button";

interface RequestTableProps {
  requests: Request[];
  onLend: (userBookId: number) => void;
  onDecline: (userBookId: number) => void;
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
        {requests.map((request, index) => {
          if (request.status == "requested") {
            return (
              <div className={Styles.tableRow} key={index}>
                <span
                  className={`${Styles.tableItem} ${Styles.tableItemBookname}`}
                >
                  {request.title}
                </span>
                <span
                  className={`${Styles.tableItem} ${Styles.tableItemSender}`}
                >
                  {request.borrower_name}さん
                </span>{" "}
                <span
                  className={`${Styles.tableItem} ${Styles.tableItemButton}`}
                >
                  <div className={Styles.buttonContainer}>
                    <div onClick={() => onLend(request.id)}>
                      <Button text="貸す" size="small" color="dark" />
                    </div>
                    <br />
                    <div onClick={() => onDecline(request.id)}>
                      <Button text="貸さない" size="small" color="light" />
                    </div>
                  </div>
                </span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default RequestTable;
