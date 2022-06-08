import React from 'react';
import {useEffect, useState} from "react";
import API from "../API";
import ProductItem from "../components/Product/ProductItem";

const Products = () => {
    const [products, setOrders] = useState([])

    useEffect(() => {
        API.getAllProducts().then(
            response => {
                setOrders(response.data)
            }
        ).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            <div className="block">
                {products && products.length ? products.map(
                    product => <ProductItem key={product.id} product={product}/>
                ) : <></>}
            </div>
        </div>
    );
};
export default Products;