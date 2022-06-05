import React from 'react';
import '../css/listing.css'
import product from "../images/product2.jpg"

const UserItem = (props) => {
    return (
        <div className="product">
            <div className="product-text">
                <img src={product} alt="product2"/>
                <div className="description-listing">
                    <strong className="header">User id: {props.user.id}</strong>
                    <p><b>Username:</b>{props.user.username}</p>
                    <p><b>Email:</b>{props.user.email}</p>
                    <p><b>Phone number:</b>{props.user.phone}</p>
                </div>
            </div>
        </div>
    );
};

export default UserItem;