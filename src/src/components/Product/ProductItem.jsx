import React, {useEffect, useState} from 'react';
import API from "../../API";
import {useNavigate} from "react-router-dom";
import ProductEditModal from "./ProductEditModal";

const ProductItem = (props) => {
    const [modalActive, setModalActive] = useState(false)
    const [image, setImage] = useState(undefined)
    const [product, setProduct] = useState({...props.product})
    const images = require.context('../../images', true)
    let navigate = useNavigate()
    useEffect(() => {
        API.getImageById(product.id)
            .then(response => {
                setImage(images(`./${response.data.name}`));

            })
    }, [])
    const toggleModal = () => {
        setModalActive(!modalActive)
    }
    return (
        <div className="product">
            <div className="product-text">
                {image && <img src={image} width="400" alt="product1"/>}
                <div className="description-listing">
                    <div>
                        <p>{product.name}</p>
                        <p><b>Price:</b>{product.price}$</p>
                        <p><b>Description:</b> {product.description}</p>
                        <p><b>Quantity:</b> {product.quantity}</p>

                    </div>
                        <div className="buttons">
                            <div className="btn-group-vertical justify-content-center">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={toggleModal}
                                >Edit
                                </button>
                                {modalActive &&
                                    <ProductEditModal product={props.product} visibility={modalActive} handleClose={toggleModal}
                                    />

                                }
                            </div>
                        </div>
                </div>


            </div>
        </div>
    );
};

export default ProductItem;