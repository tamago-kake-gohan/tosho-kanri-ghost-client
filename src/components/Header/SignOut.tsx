import Styles from "@/components/Header/Header.module.scss";
import Link from "next/link";

const SignOutButton = () => {
  return (
    <Link className={Styles.headerButton} href="/signin">
      <span className={Styles.headerButtonText}>SIGN OUT</span>
    </Link>
  );
};

export default SignOutButton;
