// import React from 'react';
// import  { useState } from 'react';
// import '../Pages/RegistrationForm.css'
// const RegistrationForm = ({ handleClose }) => {
//   // Logic to handle form submission goes here
//   // handleClose is a function to close the form


//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [errors, setErrors] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     // Validation logic ...

//     setErrors(newErrors);

//     // If there are no errors, you can submit the form
//     if (Object.keys(newErrors).length === 0) {
//       // Submit the form or perform other actions
//       console.log('Form submitted:', formData);
//     }
//   };

//   return (
//     <div className="registration-form">
//       <h2>Registration Form</h2>
//       {/* Your registration form fields and submit button */}
//       <button onClick={handleClose}>Close</button>

     


//       <div className="registration-form">
//       <h2>Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Username</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//           {errors.username && <span className="error">{errors.username}</span>}
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           {errors.password && <span className="error">{errors.password}</span>}
//         </div>
//         <div className="form-group">
//           <label>Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//           />
//           {errors.confirmPassword && (
//             <span className="error">{errors.confirmPassword}</span>
//           )}
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default RegistrationForm;


import React, { useState } from 'react';
import '../Pages/RegistrationForm.css';

const RegistrationForm = ({ handleClose }) => {
  // Logic to handle form submission goes here
  // handleClose is a function to close the form

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation logic ...

    setErrors(newErrors);

    // If there are no errors, you can submit the form
    if (Object.keys(newErrors).length === 0) {
      // Submit the form or perform other actions
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      <button onClick={handleClose}>Close</button>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
     
    </div>
  );
};

export default RegistrationForm;

