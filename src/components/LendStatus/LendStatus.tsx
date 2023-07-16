import "./LendStatus.css";

interface ChipProps {
  label: "available" | "lending" | "unavailable";
}
const labelText = {
  available: "貸出可",
  lending: "貸出中",
  unavailable: "貸出不可",
};

const LendStatus: React.FC<ChipProps> = ({ label }) => {
  let chipClassName = "chip";

  switch (label) {
    case "available":
      chipClassName += " chip-available";
      break;
    case "unavailable":
      chipClassName += " chip-unavailable";
      break;
    case "lending":
      chipClassName += " chip-borrowed";
      break;
    default:
      break;
  }

  return <div className={chipClassName}>{labelText[label]}</div>;
};

export default LendStatus;
