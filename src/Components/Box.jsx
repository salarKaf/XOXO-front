import "./Box.css";

export const Box = ({value, onClick}) => {
  const style = value === "X" ? "box blue-x " : "box red-o";
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};
