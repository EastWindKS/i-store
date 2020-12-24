import classNames from "classnames";

export default function Button(props) {
  const { children, className, outline } = props;
  return (
    <button
      className={classNames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
}
