import "./LendStatus.css";

interface ChipProps {
  label: "貸出中" | "貸出可" | "貸出不可";
}

const LendStatus: React.FC<ChipProps> = ({ label }) => {
  let chipClassName = "chip";

  switch (label) {
    case "貸出可":
      chipClassName += " chip-available";
      break;
    case "貸出不可":
      chipClassName += " chip-unavailable";
      break;
    case "貸出中":
      chipClassName += " chip-borrowed";
      break;
    default:
      break;
  }

  return <div className={chipClassName}>{label}</div>;
};

export default LendStatus;
