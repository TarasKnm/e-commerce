import React, {useContext, useEffect, useState} from 'react';
import Product from '../../images/product2.jpg'
import {useNavigate} from "react-router-dom";
import API from "../../API";
import '../../css/profile.css'

const ProfileForm = () => {
    const jwt = localStorage.jwt
    const [user, setUser] = useState('')
    let navigate = useNavigate()
    useEffect(() => {
        if (!jwt) {
            navigate('/login')
        }
        API.getUserProfile(jwt)
            .then(response => {
                setUser(response.data)
            })
    }, [])

    const logout = (e) => {
        e.preventDefault()
        localStorage.clear()
        navigate('/login')
    }

    const deleteUser = (e) => {
        API.deleteUser(jwt)
            .then(response => {
                alert("Account has been successfully deleted")
                logout(e)
            })
    }

    const updateUser = (e) => {
        API.updateUser({user,jwt})
            .then(response => {
                alert("Your profile was successfully updated")
            })
    }

    return (
        <div className="form">
            <div className="block1">
                <img src={Product} alt="product1"/>
                <div className="information">
                    <div className="row">
                        <div className="description text-center">Email:</div>
                        <input
                            placeholder="email"
                            className="field"
                            defaultValue={user?.email || ""}
                            onChange={e => (setUser(prevState => ({...prevState, email: e.target.value})))}
                        />
                    </div>
                    <div className="row">
                        <div className="description text-center">First name:</div>
                        <input
                            placeholder="Firstname"
                            className="field"
                            defaultValue={user?.firstname || ""}
                            onChange={e => (setUser(prevState => ({...prevState, firstname: e.target.value})))}
                        />
                    </div>
                    <div className="row">
                        <div className="description text-center">Last name:</div>
                        <input
                            placeholder="Lastname"
                            className="field"
                            defaultValue={user?.lastname || ""}
                            onChange={e => (setUser(prevState => ({...prevState, lastname: e.target.value})))}
                        />
                    </div>
                    <div className="row">
                        <div className="description text-center">Username:</div>
                        <input
                            placeholder="Username"
                            className="field"
                            defaultValue={user?.username || ""}
                            onChange={e => (setUser(prevState => ({...prevState, username: e.target.value})))}
                        />
                    </div>
                    <div className="row">
                        <div className="description text-center">Phone number:</div>
                        <input
                            placeholder="Phone number"
                            className="field"
                            defaultValue={user?.phone || ""}
                            onChange={e => (setUser(prevState => ({...prevState, phone: e.target.value})))}
                        />
                    </div>
                </div>
            </div>
            <div className="block2">
                <ul>
                    <li>
                        <button
                            className='profile-button'
                            onClick={logout}
                        >Log out
                        </button>
                    </li>
                    <li>
                        <button
                            className='profile-button'
                            onClick={updateUser}
                        >Save changes
                        </button>
                    </li>
                    <li>
                        <button
                            className='profile-button'
                            onClick={deleteUser}
                        >Delete
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileForm;