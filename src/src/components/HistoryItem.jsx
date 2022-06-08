import React, {useEffect, useState} from 'react';
import '../css/listing.css'
import '../css/history.css'
import API from "../API";
import {useNavigate} from "react-router-dom";
import OrderEditModal from "./Order/OrderEditModal";

const HistoryItem = (props) => {
    const [modalActive, setModalActive] = useState(false)
    const [image, setImage] = useState(undefined)
    const images = require.context('../images', true)
    let navigate = useNavigate()
    const product = {
        id: props.order.products[0].id,
        productName: props.order.products[0].name,
        price: props.order.products[0].price,
        dateOfPurchase: props.order.created_at,
        street: props.order.address,
        city: props.order.city,
        zip: props.order.zip,
        status: props.order.status
    }
    useEffect(() => {
        API.getImageById(product.id)
            .then(response => {
                setImage(images(`./${response.data.name}`));

            })
    }, [])
    const deleteOrder = () => {
        API.deleteOrder(props.order.id)
            .then(response => {
                alert("Order has been successfully canceled")
                window.location.reload(false);
            })
    }
    const toggleModal = () => {
        setModalActive(!modalActive)
    }
    return (
        <div className="product">
            <div className="product-text">
                {image && <img src={image} width="400" alt="product1"/>}
                <div className="description-listing">
                    <div>
                        <p>{product.productName}</p>
                        <p><b>Price:</b>{product.price}$</p>
                        <p><b>Date of purchase:</b>{product.dateOfPurchase}</p>
                        <p><b>Street:</b> {product.street}</p>
                        <p><b>City:</b> {product.city}</p>
                        <p><b>Zip:</b> {product.zip}</p>
                        <p><b>Status:</b> {product.status}</p>
                    </div>
                    {product.status && product.status === "In progress" ?
                        <div className="buttons">
                            <div className="btn-group-vertical justify-content-center">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={deleteOrder}
                                >Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={toggleModal}
                                >Edit
                                </button>
                                {modalActive &&
                                    <OrderEditModal order={props.order} visibility={modalActive} handleClose={toggleModal}
                                />

                                }
                            </div>
                        </div> : <></>}
                </div>


            </div>
        </div>
    );
};

export default HistoryItem;