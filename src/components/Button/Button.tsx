import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

// function Button({ children, color, onClick }: Props) {
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    ></button>
  );
};
export default Button;

//<button type="button" className={"btn btn-" + color} onClick={onClick}>
//{children}
//</button>
