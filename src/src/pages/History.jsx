import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import API from "../API";
import HistoryItem from "../components/HistoryItem";

const History = () => {
    const [orders, setOrders] = useState([])
    // const [image, setImage] = useState(undefined)
    // const images = require.context('../images',true)

    useEffect(() => {
        API.getUserOrders().then(
            response => {
                setOrders(response.data)
            }
        ).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className="block">
            {orders && orders.length ? orders.map(
                order => <HistoryItem key={order.id} order={order}/>
            ) : <h1 className='center'>You have not made any orders yet</h1>}
        </div>
    );
};

export default History;