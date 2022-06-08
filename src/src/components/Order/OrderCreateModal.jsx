import React, {useState} from 'react';
import API from "../../API";
import "../../css/modal.css"


const OrderCreateModal = props => {
    const [order, setOrder] = useState({
        zip: '',
        city: '',
        street: '',
    })
    const handleSubmit = (event) => {
        const obj = ({
                zip: order.zip,
                city: order.city,
                address: order.street
            }
        )
        if (!order.zip || !order.city || !order.street)
        {
            alert('You have empty fields')
            return
        }
        API.createOrder(obj, props.product_id)
            .then(response => {
                console.log(obj)
                alert("Order was create successfully")
                props.handleClose()
            }).catch(err=>
        {
            alert("Product is unavailable right now try again later")
            props.handleClose()
        })
    }

    return (
        <div
            className={`modal fade ${props.visibility ? "show" : "hide"}`}
            id="modal-default"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button
                            className="btn-close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={props.handleClose}
                        >
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label className="col-form-label">Enter info:</label>
                                <input
                                    placeholder="Street"
                                    className="form-control mt-4"
                                    onChange={e => setOrder(prevState => ({...prevState, street: e.target.value}))}
                                />
                                <input
                                    placeholder="City"
                                    className="form-control mt-4"
                                    onChange={e => setOrder(prevState => ({...prevState, city: e.target.value}))}
                                />
                                <input
                                    placeholder="Zip"
                                    className="form-control mt-4"
                                    onChange={e => setOrder(prevState => ({...prevState, zip: e.target.value}))}
                                />
                                <input
                                    placeholder="First name"
                                    className="form-control mt-4"/>
                                <input
                                    placeholder="Last name"
                                    className="form-control mt-4"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            Make Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OrderCreateModal;