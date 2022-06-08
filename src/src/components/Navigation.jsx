import React, {useContext} from 'react';


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
                <li><a className="text-decoration-none" href="/home">Home</a></li>
                <li><a className="text-decoration-none" href="/history">History</a></li>
                {
                    !jwt ?
                        <li><a className="text-decoration-none" href="/login">Sign In</a></li> : null
                }
                {
                    isSuperUser === 'True' ?
                        <li><a className="text-decoration-none" href="/users">Users</a></li> : null
                }
                {
                    isSuperUser === 'True' ?
                        <li><a className="text-decoration-none" href="/products">Products</a></li> : null
                }
                <li><a className="text-decoration-none" href="/profile">Profile</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;