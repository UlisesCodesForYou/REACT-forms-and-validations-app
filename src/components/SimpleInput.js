import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlur = (event) => {
    setEnteredNameTouched(true);
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
    }
  };

  const inputFieldClasses = nameInputIsInvalid
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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
