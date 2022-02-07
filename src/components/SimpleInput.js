import { useState } from "react";
import useInputValidation from "../Custom Hooks/use-input";

const SimpleInput = (props) => {
  //##### REACT BUILT IN HOOKS #######
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  //##### END OF REACT BUILT IN HOOKS #######

  // ###### CUSTOM HOOKS #######

  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChanged,
    valueBlur: nameBlueHandler,
  } = useInputValidation(value => value.trim() !== '');

  // #### END OF CUSTOM HOOKS

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlur = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlur = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true); // This state pretty much states that the user touched the form one way or another
    if (!enteredNameIsValid) {
      // This prevents the user from sending an empty string to the database. I also used the .trim method to remove any excess white space
      return;
    } else {
      setEnteredNameTouched(true);

      console.log(enteredName);
      setEnteredName(""); //This will reset the form when it is submitted.  I have set it to an empty string.
      setEnteredNameTouched(false);

      setEnteredEmail("");
      setEnteredEmailTouched(false);
    }
  };

  const inputFieldClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const inputEmailClasses = emailInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputFieldClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameInputBlur}
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Please type in your name.</p>
        )}
      </div>

      <div className={inputEmailClasses}>
        <label htmlFor="name">E-mail Address</label>
        <input
          type="email"
          id="email"
          onBlur={emailInputBlur}
          onChange={emailInputChangeHandler}
          value={enteredEmail}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Please type a valid e-mail address.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
