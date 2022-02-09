import { useState } from "react";

const BasicForm = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const [firstNameIsValid, setFirstNameIsValid] = useState(true);
  const [lastNameIsValid, setLastNameIsValid] = useState(true);
  const [emailIsValid, mailIsValid] = useState(true);

  const [firstNameIsTouched, setFirstNameIsTouched] = useState(false);
  const [lastNameIsTouched, setLastNameIsTouched] = useState(false);
  const [emailIsTouched, mailIsTouched] = useState(false);

  const firstNameInputHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const lastNameInputHandler = (event) => {
    setEnteredLastName(event.targe.value);
  };

  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
    setEnteredEmail("");
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredFirstName.trim() === "" && enteredLastName.trim() === "") {
      setFirstNameIsValid(false);
      setLastNameIsValid(false);
      return;
    } else {
      setFirstNameIsValid(true);
      setLastNameIsValid(true);

      setEnteredFirstName("");
      setEnteredLastName("");
    }

    if (enteredEmail.includes("@")) {
      mailIsValid(true);
      setEnteredEmail("");
    } else {
      mailIsValid(false);
      return;
    }
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameInputHandler}
            value={enteredFirstName}
          />
          {!firstNameIsValid && (
            <p className="error-text">Please enter your first name</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameInputHandler}
            value={enteredLastName}
          />
          {!lastNameIsValid && (
            <p className="error-text">Please enter your last name.</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="emal"
          onChange={emailInputHandler}
          value={enteredEmail}
        />
        {!emailIsValid && (
          <p className="error-text">Please enter your email.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
