import { useState, useEffect } from 'react';
import validateInfo from './validation.js'

const useForm = (validate) => {
  // const [formInfo, setFormInfo] = useState({respo: ''})
  //   useEffect(() => {
  //       fetch("/infor/").then( res => {
  //           if (res.ok) {
  //               return res.json()
  //           }
  //       }).then(jsonRes => {
  //           if (jsonRes !== undefined){
  //               setFormInfo({...formInfo,
  //                   respo: jsonRes.marcheInfo.respo
  //               }) 
  //           }
                 
            
  //       })  
  //   }, [])
  const [values, setValues] = useState( () => {
    return {
      type: '',
      objet: '',
      fournisseur: '',
      dateTr: '',
      respo: '',
      decis: '',
      num: '',
      desc: '',
      file: '',
  
    }
  });
  
  
  const [errors, setErrors] = useState({});
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    e.target.style.borderBottomColor = "blue"
  };
  
  
  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validateInfo(values));

  };

  /*useEffect(
    () => {
      if (Object.keys(errors).length === 0 ) {
        callback();
      }
    },
    [errors]
  );*/

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;