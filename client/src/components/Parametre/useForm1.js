import { useState, useEffect } from 'react';

const useForm = () => {
  const [values, setValues] = useState({

    nom: '',
    prenom: '',
    adr: ''
  });
 // const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
 
  const handleSubmit = e => {
    e.preventDefault();
    

   // setErrors(validateInfo(values));
  };
  

    
   

  return { handleChange, handleSubmit, values };
};

export default useForm;