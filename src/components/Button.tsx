import "./Button.css";

export type ButtonProp = {
  class: "primary" | "success" | "danger";
  label: string;
  isDiabled : boolean 
};

const displayPrompt = (props: ButtonProp) => {
  alert(`Your button is ${props.class.toUpperCase()}`);
}

export const Button = (props: ButtonProp) => {
  return (
    <div>
      <button type="submit" className={props.class} disabled={props.isDiabled} onClick={() => displayPrompt(props)}>
        {props.label}
      </button>
    </div>
  );
};
