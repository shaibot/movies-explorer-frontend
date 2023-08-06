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

// ВАЛИДАЦИЯ ИЗ ТЕОРИИ

// import React, { useCallback } from 'react';

// //хук управления формой
// function useForm() {
//   const [values, setValues] = React.useState({});

//   const handleChange = (event) => {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;
//     setValues({ ...values, [name]: value });
//   };

//   return { values, handleChange, setValues };
// }

// //хук управления формой и валидации формы
// function useFormWithValidation() {
//   const [values, setValues] = React.useState({});
//   const [errors, setErrors] = React.useState({});
//   const [isValid, setIsValid] = React.useState(false);

//   const handleInputChange = (event) => {
//     const target = event.target;
//     const name = target.name;
//     const value = target.value;
//     setValues({ ...values, [name]: value });
//     setErrors({ ...errors, [name]: target.validationMessage });
//     setIsValid(target.closest('form').checkValidity());
//   };

//   const resetForm = useCallback(
//     (newValues = {}, newErrors = {}, newIsValid = false) => {
//       setValues(newValues);
//       setErrors(newErrors);
//       setIsValid(newIsValid);
//     },
//     [setValues, setErrors, setIsValid]
//   );

//   return { values, handleInputChange, errors, isValid, resetForm };
// }
//

const handleChange = (event, isValid, setIsValid) => {
  const target = event.target;
  // const name = target.name;
  // const value = target.value;
  setIsValid(target.closest('form').checkValidity());
  return isValid;
};

export { handleChange };
