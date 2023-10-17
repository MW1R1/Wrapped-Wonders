import React from "react";

export default function GiftItem({image, name, price}){
    return(
        <div className="card">
            <img src={image} alt={name}/>
            <p>{name}</p>
            <h5 className="price">Kshs. {price}</h5>
            <div className="product-buttons">
                <button>View More</button>
                <button>Add to Cart</button>
            </div>
            
        </div>
    )

}