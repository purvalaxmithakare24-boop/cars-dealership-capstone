
import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration form submitted!");
  };

  return (
    <div style={{
      maxWidth: "450px",
      margin: "50px auto",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 0 10px #ccc"
    }}>

      <h2 style={{ textAlign: "center" }}>Sign Up</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
<div className="register_container" style={{width: "50%"}}>
  <div className="header">
    <span className="text">SignUp</span>
    <hr />
  </div>
  <div className="inputs">
    <div className="input">
      <input type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
    </div>
    <div className="input">
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
    </div>
    <div className="input">
      <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
    </div>
    <div className="input">
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className="input">
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
  </div>
  <div className="submit_container">
    <button className="submit" onClick={register}>Register</button>
  </div>
</div>
        <div className="mb-3">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-control"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-control"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
        >
          Register
        </button>

      </form>
    </div>
  );
};

export default Register;
