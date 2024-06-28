import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';

const Signup = (props) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(6, 'Must be at least 6 characters')
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      const id = Math.floor(Math.random() * 1000000);
      const { confirmPassword, ...dataToSend } = values;
      dataToSend.id = id;
      console.log('Signup form submitted:', dataToSend)
      props.addUser(dataToSend);
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert('Signup successful!');
      } else {
        alert('Signup failed.');
      }
    },
  });

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <TextField id="outlined-basic" 
          label="Username" 
          variant="outlined"
          type="text"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            color="secondary"
            value={formik.values.username}
           />
          {formik.touched.username && formik.errors.username ? (
            <div className="error">{formik.errors.username}</div>
          ) : null}
        </div>
        <div className="form-group">
          <TextField id="outlined-basic" 
          label="Email" 
          variant="outlined"
          type="text"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
           />
          
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="error">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;