import React, { useEffect, useState } from "react";
import "./detailspage.css"
import { useParams } from "react-router-dom";

export default function DetailsPage(){
  const [data, setData] = useState({})
  const {name} = useParams()
  console.log(name)

  useEffect(()=> {
    const fetching = async () => {
      const response = await fetch(`/gifts/${name}`)
      const data = await response.json()
      return setData(data)

    }
    fetching()

  },[name])
  console.log(data, data.name)
    return (
  <div>
  {/* Main item container */}
  <main className="item">
    <section className="img">
      <img src={data.image} alt = {data.name} className="img-main" />
      <div className="img-btns">
        <button className="img-btn">
          <img src={data.image} alt={data.name} className="img-btn__img" />
        </button>
        <button className="img-btn">
          <img src={data.image} alt={data.name} className="img-btn__img" />
        </button>
        <button className="img-btn">
          <img src={data.image} alt={data.name} className="img-btn__img" />
        </button>
        <button className="img-btn">
          <img src={data.image} alt={data.name} className="img-btn__img" />
        </button>
      </div>
    </section>
    <section className="price">
      <h2 className="price-sub__heading">{data.name}</h2>
      <h1 className="price-main__heading">{data.name}</h1>
      <p className="price-txt">{data.description}
      </p>
      <div className="price-box">
        <div className="price-box__main">
          <span className="price-box__main-new">Kshs. {data.price}</span>
          {/* <span className="price-box__main-discount"> 50%</span> */}
        </div>
        <span className="price-box__old">Kshs. 1000.00</span>
      </div>
      <div className="price-btnbox">
        <div className="price-btns">
          <button className="price-btn__add price-btn">
            <i className="fa fa-plus"></i>
          </button>
          <span className="price-btn__txt">0</span>
          <button className="price-btn__remove price-btn">
            <i className="fa fa-minus"></i>
          </button>
        </div>
        <button className="price-cart__btn btn--orange">
          <i className="fa fa-shopping-cart"></i>
          Add to cart
        </button>
      </div>
    </section>
  </main>
  {/* Attribution */}
 
</div>

    )

}