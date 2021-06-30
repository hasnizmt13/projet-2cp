import { useState, useEffect } from 'react';
import validateInfo from './validation.js'

const useForm = (validate) => {
  const [values, setValues] = useState({

    dateCF: '',
    dateVisa: '',
    dateMend: '',
    respo: '',
    date: '',
    motif: '',
    dateTr: '',
    desc: '',
    file: '',

  });
  const [errors, setErrors] = useState(() => {
    return {}
  });
  

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validateInfo(values));
  };

  /*useEffect(
    () => {
      if (Object.keys(errors).length === 0 && (page == 1)) {
        callback();
      }
    },
    [errors]
  );*/

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;