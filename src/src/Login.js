import { useState } from 'react';
import { useNavigate, Router } from "react-router-dom";
import axios from './api.js'
import "./css/styles.css"
import "./css/form_styles.css"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate();
    function handleSubmit(event) {
        const user = new URLSearchParams(Object.entries({
            username: username,
            password: password
        })).toString()
        axios.post('/login/', user, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        ).then(response => {
            localStorage.setItem('jwt', response.data.access_token);
            alert("Success login.");
            navigate("/login");
        }).catch((err) => {
            alert(err["error"]);
        });
    }


    return (
        <>
            <div class="center">
                <input
                    type="text"
                    class="font"
                    placeholder="Username or email"
                    name="email"
                    id="email"
                    required
                    onChange={e => setUsername(() => e.target.value)}
                />

                <input
                    type="password"
                    class="font"
                    placeholder="Password"
                    name="psw"
                    id="psw"
                    required
                    onChange={e => setPassword(() => e.target.value)}
                />
                <button
                    type="submit"
                    class="font"
                    onClick={handleSubmit}
                >
                    Continue
                </button>

            </div>
        </>
    )
}
export default Login