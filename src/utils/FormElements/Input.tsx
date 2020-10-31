import React from "react";
import "./FormElements.css";
import { Button } from "../Buttons/Button";

function Input(props: any) {
  const type = props.type;
  const name = props.name;
  const value = props.value;
  const placeholder = props.placeholder;
  const onChangeHandler = props.onChangeHandler;
  const hasLabel = props.hasLabel;
  const labelText = props.labelText;
  const error = props.errorText;
  const hasButton = props.hasButton;
  const buttonHandler = props.buttonHandler;
  const classNameForm = `form-element form-input`;
  const classNameInput = `form-element-field`;
  return (
    <div className={classNameForm}>
      {hasLabel && <label className="form-element-label">{labelText}</label>}
      <div className="form-flex">
        <input
          placeholder={placeholder}
          type={type}
          className={classNameInput}
          onChange={onChangeHandler}
          value={value}
          name={name}
        />
        {hasButton && (
          <Button type="button" onClick={buttonHandler} secondary={false}>
            OK
          </Button>
        )}
      </div>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}
export default Input;
