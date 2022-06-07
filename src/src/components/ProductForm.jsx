import React from 'react';
import {useEffect, useState} from "react"
import '../css/product.css'
import API from "../API";
import {useParams} from "react-router-dom";
import Modal from '../components/Modal';

const ProductForm = () => {
    const {id} = useParams()
    const [product, setProduct] = useState('')
    const [image, setImage] = useState(undefined)
    const [modalActive,setModalActive] = useState(false)
    const images = require.context('../images', true)

    useEffect(() => {
        API.getProductById(id)
            .then(response => setProduct(response.data))
        API.getImageById(id)
            .then(response => {
                setImage(images(`./${response.data.name}`));
                console.log(image)
            })
    }, [])

    const toggleModal = () => {
      setModalActive(!modalActive)
    }

    return (<div>
        <div className="container-product">
            <div className="product-image">
                {image && <img src={image} alt="product1"/>}
            </div>
            <div className="details">
                <div className="description limit" id="w74">
                    <h6>Home/T-shirt</h6>
                    <h3 className="py-4">{product.name}</h3>
                    <h2>{product.price}$</h2>
                    <h4 className="mt-5 mb-5">Product Details</h4>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi aperiam asperiores aspernatur atque ducimus est harum magni maiores nam natus non officia optio provident quam qui quis, repellendus soluta. </span>
                </div>
                <div className="text-center">
                    <button
                        onClick={toggleModal}
                        className="buy-btn align-self-end btn btn-lg btn-primary">Buy
                    </button>
                    {modalActive && <Modal product_id={id} visibility={modalActive} handleClose={toggleModal}
                    />

                    }
                </div>
            </div>
        </div>
    </div>);
};

export default ProductForm;