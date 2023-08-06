import React, { useCallback } from 'react';

//хук управления формой и валидации формы
// export const useFormWithValidation = () => {
//   const [values, setValues] = React.useState({});
//   const [errors, setErrors] = React.useState({});
//   const [isValid, setIsValid] = React.useState(false);



//   const resetForm = useCallback(
//     (newValues = {}, newErrors = {}, newIsValid = false) => {
//       setValues(newValues);
//       setErrors(newErrors);
//       setIsValid(newIsValid);
//     },
//     [setValues, setErrors, setIsValid]
//   );

//   return { values, handleChange, errors, isValid, resetForm };
// }


const handleChange = (event, isValid, setIsValid) => {
  const target = event.target;
  // const name = target.name;
  // const value = target.value;
  setIsValid(target.closest('form').checkValidity());
  return isValid
};

export default handleChange