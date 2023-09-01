import Styles from "@/components/Button/Button.module.scss";

type ButtonProps = {
  text: string;
  type?: "submit" | "button" | "reset" | undefined;
  size?: "small" | "medium" | "large";
  color?: "dark" | "light";
};

const Button: React.FC<ButtonProps> = ({
  text,
  type = "submit",
  size = "medium",
  color = "dark",
}) => {
  const buttonClass = `${Styles.wrapper} ${Styles[size]} ${Styles[color]}`;
  return (
    <button type={type} className={buttonClass}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
