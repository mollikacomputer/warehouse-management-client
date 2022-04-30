import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, verifyBeforeUpdateEmail, } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);
const Register = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handleUserNameBlur = (e) =>{
    setUsername(e.target.value);
  }

  const handleEmailBlur = (e) =>{
    setEmail(e.target.value);
  }
  const handlePasswordBlur = (e) =>{
    setPassword(e.target.value);
  }
  // console.log(username, password, email);
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
        verifyBeforeUpdateEmail();
    })
    .catch(error => {
        console.error(error)
    })
    console.log(username, password, email);
  }

  return (
    <div className="w-75 mx-auto">
      <h2> Please Register</h2>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control onBlur={handleUserNameBlur} type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onBlur={handleEmailBlur} name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control onBlur={handlePasswordBlur} name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Register Now
        </Button>
        <br />
        <br />
        <p>
          Have you an account? <Link to="/login">Log in Now </Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
