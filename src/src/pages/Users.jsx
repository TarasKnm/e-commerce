import React, {useEffect, useState} from 'react';
import UserItem from "../components/UserItem";
import '../css/listing.css'
import API from "../API";

const Users = () => {
    const jwt = localStorage.jwt
    const [users, setUsers] = useState([])
    useEffect(() => {
        API.getAllUsers(jwt)
            .then(response => {
                    setUsers(response.data)
                }
            )
    }, [])
    return (
        <div className="block">
            {users.map(user =>
                <UserItem key={user.id} user={user}/>
            )}
        </div>
    );
};

export default Users;