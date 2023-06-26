import "./Button.css";

export type ButtonProp = {
  class: "primary" | "success" | "danger";
  label: string;
};

export const Button = (props: ButtonProp) => {
  return (
    <div>
      <button type="submit" className={props.class}>
        {props.label}
      </button>
    </div>
  );
};
