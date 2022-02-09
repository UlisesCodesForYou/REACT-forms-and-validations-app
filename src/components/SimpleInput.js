import useInputValidation from "../Custom Hooks/use-input";

const SimpleInput = (props) => {
  // ###### CUSTOM HOOKS #######

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    valueBlur: nameBlurHandler,
    reset: resetNameInput,
  } = useInputValidation((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlur: emailBlurHandler,
    reset: resetEmailInput,
  } = useInputValidation((value) => value.includes("@"));

  // #### END OF CUSTOM HOOKS

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      // This prevents the user from sending an empty string to the database. I also used the .trim method to remove any excess white space
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const inputFieldClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const inputEmailClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputFieldClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameBlurHandler}
          onChange={nameChangedHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Please type in your name.</p>
        )}
      </div>

      <div className={inputEmailClasses}>
        <label htmlFor="name">E-mail Address</label>
        <input
          type="email"
          id="email"
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
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
