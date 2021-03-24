import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const history = useHistory(); // redirect component
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault(); // this stops refreshing

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            // logged in and it redirects to home page
            history.push("/");
        })
        .catch((e) => alert(e.message));
    }

    const register = (event) => {
        event.preventDefault(); // this stops refreshing

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // created a user and it redirects to home page
            history.push("/");
        })
        .catch((e) => alert(e.message));
    }



    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/298/4925697298_1ab905a8-2ba6-451a-aa38-176587ab5a26.png?cb=1616549959"
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign in</button>
                </form>

                <button onClick={register} className="login__registerButton">Create your account</button>
            </div>
        </div>
    )
}

export default Login
