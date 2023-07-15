import "./Button.css";

interface ButtonProps {
  text: string;
  type?: "submit" | "button" | "reset" | undefined;
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({ text, type= "submit", size = "medium" }) => {
  const buttonClass = `button ${size}`;

  return (
    <button type={type} className={buttonClass}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
