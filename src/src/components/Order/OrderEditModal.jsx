import React, {useState} from 'react';
import API from "../../API";
import "../../css/modal.css"


const OrderEditModal = props => {
    const [order, setOrder] = useState({...props.order})
    const handleSubmit = (event) => {
        if (!order.zip || !order.city || !order.address)
        {
            alert('You have empty fields')
            return
        }
        if (order.zip === props.order.zip && order.city === props.order.city && order.address === props.order.address){
            alert("You didn't change anything")
            return;
        }
        API.updateOrder(order, order.id)
            .then(response => {
                window.location.reload(false);
            }).catch(err=>
        {

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
                                <label className="col-form-label">Edit order:</label>
                                <input
                                    placeholder="Street"
                                    className="form-control mt-4"
                                    defaultValue={order?.address || ""}
                                    onChange={e => setOrder(prevState => ({...prevState, address: e.target.value}))}
                                />
                                <input
                                    placeholder="City"
                                    className="form-control mt-4"
                                    defaultValue={order?.city || ""}
                                    onChange={e => setOrder(prevState => ({...prevState, city: e.target.value}))}
                                />
                                <input
                                    placeholder="Zip"
                                    className="form-control mt-4"
                                    defaultValue={order?.zip || ""}
                                    onChange={e => setOrder(prevState => ({...prevState, zip: e.target.value}))}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            Ok
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default OrderEditModal;