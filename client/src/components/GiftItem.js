import React from "react";
import { Link } from "react-router-dom";

export default function GiftItem({image, name, price}){
    return(
        <div className="card">
            <img src={image} alt={name}/>
            <div className="container">
                <p>{name}</p>
                <h5 className="price">Kshs. {price}</h5>
                <div className="product-buttons">
                    <button><Link className="more" to={`/${name}`}>View More</Link></button>
                    <button>Add to Cart</button>
                </div>
            </div>
            
            
        </div>
    )

}