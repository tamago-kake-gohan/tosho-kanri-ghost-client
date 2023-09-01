import Styles from "@/components/RefineButton/RefineButton.module.scss";

type RefineButtonProps = {
  status: string;
};

const RefineButton: React.FC<RefineButtonProps> = ({ status }) => {
  var text = "";
  switch (status) {
    case "available":
      text = "貸出可のみ";
      break;
    case "lending":
      text = "貸出中のみ";
      break;
    case "unavailable":
      text = "貸出不可のみ";
      break;
    case "all":
      text = "すべて";
      break;
  }
  return (
    <button className={Styles.wrapper}>
      <span>{text}</span>
    </button>
  );
};

export default RefineButton;
