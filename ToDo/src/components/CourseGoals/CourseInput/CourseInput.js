import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl=styled.div`
 
  margin: 0.5rem 0;

 & label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

 & input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

 & input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.invalid label{
  color:red !important;
}
&.invalid input{
  border-color: red !important;
}

`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valid, setValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length===0) {
      setValid(false);
      return;
    }


    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className={!valid?'invalid':''}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
