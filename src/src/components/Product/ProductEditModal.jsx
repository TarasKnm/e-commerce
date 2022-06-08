import React, {useState} from 'react';
import API from "../../API";
import "../../css/modal.css"


const ProductEditModal = props => {
    const [product, setProduct] = useState({...props.product})

    const handleSubmit = (event) => {
        // const obj = ({
        //     name: product.name,
        //     description:product.description,
        //     price: product.price,
        //     quantity: product.quantity
        // })
        API.updateProduct(product, product.id)
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
                                    placeholder="Product name"
                                    className="form-control mt-4"
                                    defaultValue={product?.name || ""}
                                    onChange={e => setProduct(prevState => ({...prevState, name: e.target.value}))}
                                />
                                <input
                                    placeholder="Price"
                                    className="form-control mt-4"
                                    defaultValue={product?.price || ""}
                                    onChange={e => setProduct(prevState => ({...prevState, price: parseInt(e.target.value)}))}
                                />
                                <input
                                    placeholder="Quantity"
                                    className="form-control mt-4"
                                    defaultValue={product?.quantity || ""}
                                    onChange={e => setProduct(prevState => ({...prevState, quantity: e.target.value}))}
                                />
                                <textarea
                                    placeholder="Description"
                                    className="form-control mt-4"
                                    defaultValue={product?.description || ""}
                                    onChange={e => setProduct(prevState => ({...prevState, description: e.target.value}))}
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

export default ProductEditModal;