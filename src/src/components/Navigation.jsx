import React, {useContext} from 'react';
import '../css/styles.css'

const Navigation = () => {
    const jwt = localStorage.jwt
    const isSuperUser = localStorage.isSuperUser
    return (
        <nav>
            <label className="logo">
                <h1>E-commerce</h1>
                <h2>The best e-commerce</h2>
            </label>
            <ul>
                <li><a href="home">Home</a></li>
                <li><a href="history">History</a></li>
                {
                    !jwt ?
                        <li><a href="login">Sign In</a></li> : null
                }
                {
                    isSuperUser ?
                        <li><a href="users">Users</a></li> : null

                }
                <li><a href="profile">Profile</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;