import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.trim() !== ""
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  
  let formValid = false;

  if (enteredNameIsValid) {
    formValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
    let emailValid = new RegExp('/^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i');

    
    console.log(enteredEmail)
    console.log(emailValid.test(enteredEmail))
  }

  const nameInputBlurHandler = (event) => {
    enteredEmail(event.target.value)
    let emailValid = new RegExp('/^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i');

    
    console.log(enteredEmail)
    console.log(emailValid.test(enteredEmail))
  };

  const emailBlurHandler = (event) => {
    
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onKeyUp={nameInputBlurHandler}
        />
      </div>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your E-mail</label>
        <input
          value={enteredEmail}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      {nameInputIsInvalid ? (
        <p className="error-text">Name must not be empty.</p>
      ) : (
        ""
      )}
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
