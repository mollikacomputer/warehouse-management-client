import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import app from "../../firebase.init";
import "./Login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const notifyLogIn = () => toast("Login Successfully");
  const auth = getAuth(app);
  const [user, setUser] = useState('');

  const handleGoogleSignIn = () =>{
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
    .then((result) =>{
      const user = result.user;
      setUser(user.displayName);
      // console.log(user.displayName, user.email);
    });
    notifyLogIn();
  }

  const notifySignOut = () => toast("Sign Out Now");

  const handleSignOut = (e) =>{
    e.preventDefault();
    const auth = getAuth();
    signOut(auth)
    .then(() =>{
    
    })
    .catch((error)=>{
      console.error(error)
    });
    notifySignOut();
  }

  return (
    <div className="w-75 mx-auto" >
      <h2> Please Log in</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {
          user ?<button onClick={handleSignOut} className="btn btn-primary w-100" > Sign Out </button> :
          <Button className="w-100" variant="primary" type="submit"> Sign In </Button>
        }
        <p> Are you New youser? <Link to='/register' >Register Now </Link>  </p>
      </Form><br/>
      <button onClick={handleGoogleSignIn} className="btn btn-primary" > SignIn with google </button>
      <h2> Name : {user}</h2>
      <ToastContainer />
    </div>
  );
};

export default Login;
