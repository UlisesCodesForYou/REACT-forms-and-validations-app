import {useState} from 'react'

const useInputValidation = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && setIsTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
      };

      const valueBlur = (event) => {
        setIsTouched(true);
      };

    return {
        value: enteredValue,
        hasError: hasError,
        valueChangeHandler,
        valueBlur
    };

};

export default useInputValidation; 