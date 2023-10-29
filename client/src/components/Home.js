import React from "react";
import GiftItem from "./GiftItem";

export default function Home({ gifts }){
    const displayGifts = gifts?.map(gift => {
        return <GiftItem key={gift.id} image = {gift.image} name = {gift.name} price = {gift.price}/>
    })

    return(
        <div className="cards">
            {displayGifts}
        </div>
    )

}