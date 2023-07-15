import "./Button.css";

interface ButtonProps {
  text: string;
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({ text, size = "medium" }) => {
  const buttonClass = `button ${size}`;

  return (
    <button className={buttonClass}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
