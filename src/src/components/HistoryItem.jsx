import React, {useEffect, useState} from 'react';
import '../css/listing.css'
import API from "../API";

const HistoryItem = (props) => {
    const [image, setImage] = useState(undefined)
    const images = require.context('../images',true)
    const product = {
        id: props.order.products[0].id,
        productName: props.order.products[0].name,
        price: props.order.products[0].price,
        dateOfPurchase: props.order.created_at,
        street: props.order.address,
        city: props.order.city,
        zip: props.order.zip
    }
    useEffect(()=>{
        API.getImageById(product.id)
            .then(response => {
                setImage(images(`./${response.data.name}`));
            })
    },[])
    return (
        <div className="product">
            <div className="product-text">
                {image &&  <img  src={image} width="400" alt="product1"/>}
                <div className="description-listing">
                    <p>{product.productName}</p>
                    <p><b>Price:</b>{product.price}</p>
                    <p><b>Date of purchase:</b>{product.dateOfPurchase}</p>
                    <p><b>Street:</b> {product.street}</p>
                    <p><b>City:</b> {product.city}</p>
                    <p><b>Zip:</b> {product.zip}</p>
                </div>
            </div>
        </div>
    );
};

export default HistoryItem;