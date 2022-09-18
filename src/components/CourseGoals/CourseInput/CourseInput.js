import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
 const [isValid,setisValid]= useState(true)

  const goalInputChangeHandler = event => {
    //setisValid(true)
    if(enteredValue.trim().length ===0){ // trim method means string.trim()  it check your input length it remove white space from the string ex- "  mayank  " return "mayank"
      setisValid(true);
    }
    setEnteredValue(event.target.value);
    
  };

  const formSubmitHandler = event => {
    event.preventDefault();
   // if(enteredValue===("")){ this means below one
   if(enteredValue.trim().length ===0){ // trim method means string.trim()  it check your input length it remove white space from the string ex- "  mayank  " return "mayank"
    setisValid(false);
 return 
    } 
    setEnteredValue('')  
    props.onAddGoal(enteredValue);
    
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid':''}`} > 
        <label>Course Goal</label>
        <input  type="text" onChange={goalInputChangeHandler} value={enteredValue} /> 
      </div>
      <Button blankinput={isValid} type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
