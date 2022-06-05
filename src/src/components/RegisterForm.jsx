import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import API from "../API";

const RegisterForm = () => {
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        repeat_password: '',
        phone: ''
    })

    let navigate = useNavigate()

    function handleSubmit(event) {
        const object = JSON.stringify({
            password: user.password,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            phone: user.phone
        })
        API.sendRegistrationRequest(object)
            .then(response => {
                alert("Successful registration.");
                navigate("/login");
            }).catch((err) => {
            alert(err["error"]);
        });
    }


    return (
        <div className="center">
            <h3>Create an account</h3>

            <input
                type="text"
                className="font"
                placeholder="First name"
                name="fname"
                id="fname"
                required
                onChange={e => setUser(prevState => ({...prevState, firstname: e.target.value}))}
            />
            <input
                type="text"
                className="font"
                placeholder="Last name"
                name="lname"
                id="lname"
                required
                onChange={e => setUser(prevState => ({...prevState, lastname: e.target.value}))}
            />
            <input
                type="text"
                className="font"
                placeholder="Username"
                name="username"
                id="username"
                onChange={e => setUser(prevState => ({...prevState, username: e.target.value}))}
                required />
            <input
                type="email"
                className="font"
                placeholder="Email"
                name="email"
                id="email"
                onChange={e => setUser(prevState => ({...prevState, email: e.target.value}))}
                required />
            <input
                type="phone-number"
                className="font"
                placeholder="Phone number"
                name="phone-number"
                id="phone-number"
                onChange={e => setUser(prevState => ({...prevState, phone: e.target.value}))}
                required />
            <input
                type="password"
                className="font"
                placeholder="Password"
                name="psw"
                id="psw"
                onChange={e => setUser(prevState => ({...prevState, password: e.target.value}))}
                required />
            <input
                type="password"
                className="font"
                placeholder="Repeat password"
                name="psw-repeat"
                id="psw-repeat"
                onChange={e => setUser(prevState => ({...prevState, repeat_password: e.target.value}))}
                required/>

            <div className="inline">
                <p>Already have an account?</p>
                <a href="sign-in.html">Sign in</a>
            </div>
            <button
                type="submit"
                className="font"
                onClick={handleSubmit}>Sign Up</button>
        </div>
    )
};

export default RegisterForm;