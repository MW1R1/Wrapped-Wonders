import React from "react";

export default function GiftItem({image, name, price}){
    return(
        <div className="card">
            <img src={image} alt={name}/>
            <p>{name}</p>
            <p>Kshs. {price}</p>
        </div>
    )

}