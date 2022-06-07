import React, {useContext, useState} from 'react';
import { useNavigate } from "react-router-dom"
import '../css/form_styles.css'
import API from '../API'

const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        const user = new URLSearchParams(Object.entries({
            username: username,
            password: password
        })).toString();
        API.sendLoginRequest(user)
            .then(response => {
                localStorage.setItem('isSuperUser',response.data.is_superuser)
                localStorage.setItem('jwt',response.data.access_token)
                alert("Success login.");
                navigate("/profile");
            }).catch((err) => {
            alert(err["error"]);
        });
    }


    return (
        <div className="center">
            <input
                type="text"
                className="font"
                placeholder="Username or email"
                name="email"
                id="email"
                required
                onChange={e => setUsername(() => e.target.value)}
            />

            <input
                type="password"
                className="font"
                placeholder="Password"
                name="psw"
                id="psw"
                required
                onChange={e => setPassword(() => e.target.value)}
            />
            <div className="inline">
                <p>Don't have an account?</p>
                <a className="underline" href={"/register"}>Sign up</a>
            </div>
            <div className="col text-center">
                <button
                    type="submit"
                    className="text-center rounded-pill"
                    onClick={handleSubmit}
                >
                    Continue
                </button>
            </div>


        </div>
    )
}
export default LoginForm