import React from "react";

const Input = (props) => {
  let inputElement = null;
  const inputClasses = ["input-element"];

  switch (props.elementType) {
    case "input":
      inputElement = <input className={inputClasses.join(" ")} />;
      break;
    case "textarea":
      inputElement = <textarea className={inputClasses.join(" ")} />;
      break;

    case "select":
      inputElement = (
        <select className={inputClasses.join(" ")}>
          <option></option>
        </select>
      );
      break;

    case "text":
      inputElement = <text className={inputClasses.join(" ")} />;
      break;

    default:
      inputElement = <input className={inputClasses.join(" ")} />;
  }

  return (
    <div className="input">
      <label className="label">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
