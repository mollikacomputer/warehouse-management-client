import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {

  const auth = getAuth();
  const handleCreateUser = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="w-75 mx-auto">
      <h2> Please Register</h2>
      <Form onSubmit={handleCreateUser} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Register Now
        </Button>
        <br />
        <br />
        <p>
          {" "}
          Have you an account? <Link to="/login">Log in Now </Link>{" "}
        </p>
      </Form>
    </div>
  );
};

export default Register;
