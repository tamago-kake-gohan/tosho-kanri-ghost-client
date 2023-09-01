import Styles from "@/components/LendStatus/LendStatus.module.scss";

interface ChipProps {
  label: "available" | "lending" | "unavailable";
}
const labelText = {
  available: "貸出可",
  lending: "貸出中",
  unavailable: "貸出不可",
};

const LendStatus: React.FC<ChipProps> = ({ label }) => {
  let chipClassName = `${Styles.chip}`;

  switch (label) {
    case "available":
      chipClassName += ` ${Styles.chipAvailable}`;
      break;
    case "unavailable":
      chipClassName += ` ${Styles.chipUnavailable}`;
      break;
    case "lending":
      chipClassName += ` ${Styles.chipBorrowed}`;
      break;
    default:
      break;
  }

  return <div className={chipClassName}>{labelText[label]}</div>;
};

export default LendStatus;
