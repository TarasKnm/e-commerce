import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import "../css/grid.css"

const HomeForm = (props) => {
    let navigate = useNavigate()

    return (
        <div>
            <div>
                <div className="four-blocks">
                    <div
                        id="div1"
                        className="item"
                        onClick={() => navigate("/product/1")}
                    >
                        <img src={props.images[0]} alt=""/>
                    </div>
                    <div
                        id="div2"
                        className="item"
                        onClick={() => navigate("/product/2")}
                    >
                        <img src={props.images[1]} alt={props.images.name}/>
                    </div>
                    <div
                        id="div3"
                        className="item"
                        onClick={() => navigate("/product/3")}
                    >
                        <img src={props.images[2]} alt=""/>
                    </div>

                    <div
                        id="div4"
                        className="item"
                        onClick={() => navigate("/product/4")}
                    >
                        <img src={props.images[3]} alt=""/>
                    </div>
                </div>
                <div className="two-blocs">
                    <div
                        id="div5"
                        className="item"
                        onClick={() => navigate("/product/4")}
                    >
                        <img src={props.images[4]} alt=""/>
                    </div>
                    <div
                        id="div6"
                        className="item"
                        onClick={() => navigate("/product/4")}
                    >
                        <img src={props.images[5]} alt=""/>

                    </div>
                </div>
                <div className="two-blocs">
                    <div
                        id="div7"
                        className="item"
                        onClick={() => navigate("/product/4")}
                    >
                        <img src={props.images[6]} alt=""/>

                    </div>
                    <div
                        id="div8"
                        className="item"
                        onClick={() => navigate ("/product/4")}
                        >
                        <img src={props.images[7]} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeForm;