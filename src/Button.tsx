import { Children } from "react";

interface Props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClick: () => void;
}

function Button({ children, color, onClick }: Props) {
  return (
    <>
      <h1> Buttons below yo</h1>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
export default Button;
