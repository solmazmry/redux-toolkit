// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail, setPassword, submitForm } from './formSlice';

const Form = () => {
  const dispatch = useDispatch();
  const { name, email, password } = useSelector((state) => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data on Submit:', { name, email, password });
    dispatch(submitForm()); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => dispatch(setName(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
