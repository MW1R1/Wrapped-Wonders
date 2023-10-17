import React from "react";
import "./detailspage.css"

export default function DetailsPage(){
    return (
  <div>
  <div className="body-wrapper" />
  {/* Overlay image Modal */}
  <div className="overlay-container">
    <div className="item-overlay">
      <button className="item-overlay__btn">
        <img src="images/icon-close.svg" alt="close image" className="item-overlay__btn-img" />
      </button>
      {/* <div className="item-overlay__mainImg">
        <img src="images/image-product-1.jpg" alt className="item-overlay__img" />
        <button className="item-overlay__btnlft overlay-btn">
          <img src="images/icon-next.svg" alt="next symbol image" className="item-overlay__btnlft-img overlay-btn__img" />
        </button>
        <button className="item-overlay__btnrgt overlay-btn">
          <img src="images/icon-next.svg" alt="next symbol image" className="item-overlay__btnrgt-img overlay-btn__img" />
        </button>
      </div> */}
      {/* <div className="overlay-img__btns">
        <button className="overlay-img__btn" data-img={0}>
          <img src="images/image-product-1-thumbnail.jpg" alt="shoe product image" className="overlay-img__btn-img" />
        </button>
        <button className="overlay-img__btn" data-img={1}>
          <img src="images/image-product-2-thumbnail.jpg" alt="shoe product image" className="overlay-img__btn-img" />
        </button>
        <button className="overlay-img__btn" data-img={2}>
          <img src="images/image-product-3-thumbnail.jpg" alt="shoe product image" className="overlay-img__btn-img" />
        </button>
        <button className="overlay-img__btn" data-img={3}>
          <img src="images/image-product-4-thumbnail.jpg" alt="shoe product image" className="overlay-img__btn-img" />
        </button>
      </div> */}
    </div>
  </div>
  {/* Cart */}
  <div className="head-cart">
    <h3 className="head-cart__heading">Cart</h3>
    <div className="head-cart__txt">Your cart is empty.</div>
    <div className="head-cart__item">
      <div className="head-cart__item-wrapper">
        <img src="images/image-product-1-thumbnail.jpg" alt="cart product image" className="head-cart__item-img" />
        <div className="head-cart__des">
          <p className="head-cart__des-txt">Fall Limited Edition Sneakers</p>
          <div className="head-cart__price">
            <span className="head-cart__price-single">$125.00*3</span>
            <span className="head-cart__price-total">$375.00</span>
          </div>
        </div>
        <button className="head-cart__item-btn">
          <img src="images/icon-delete.svg" alt="delete image" className="head-cart__btn-img" />
        </button>
      </div>
      <button className="head-cart__btn btn--orange">Checkout</button>
    </div>
  </div>
  {/* Header */}
  <header className="head">
    <div className="head-lft">
      <button className="head-lft__btn">
        <img src="images/icon-menu.svg" alt="menu image" className="head-lft__btn-img" />
      </button>
      <img src="images/logo.svg" alt="logo" className="head-logo" />
      <ul className="head-nav">
        <li className="head-nav__item">Collections</li>
        <li className="head-nav__item">Men</li>
        <li className="head-nav__item">Women</li>
        <li className="head-nav__item">About</li>
        <li className="head-nav__item">Contact</li>
      </ul>
    </div>
    <div className="head-rgt">
      <button className="head-rgt__btn">
        <img src="images/icon-cart.svg" alt="cart image" className="head-cart__btn-img" />
      </button>
      <img src="images/image-avatar.png" alt="person image" className="head-rgt__img" />
    </div>
  </header>
  {/* Main item container */}
  <main className="item">
    <section className="img">
      <button className="img-main__btnlft img-main__btn">
        <img src="images/icon-next.svg" alt="next symbol image" className="img-main__btnlft-img img-main__btn-img" />
      </button>
      <button className="img-main__btnrgt img-main__btn">
        <img src="images/icon-next.svg" alt="next symbol image" className="img-main__btnrgt-img img-main__btn-img" />
      </button>
      <img src="images/image-product-1.jpg" alt className="img-main" />
      <div className="img-btns">
        <button className="img-btn">
          <img src="images/image-product-1-thumbnail.jpg" alt="shoe product image" className="img-btn__img" />
        </button>
        <button className="img-btn">
          <img src="images/image-product-2-thumbnail.jpg" alt="shoe product image" className="img-btn__img" />
        </button>
        <button className="img-btn">
          <img src="images/image-product-3-thumbnail.jpg" alt="shoe product image" className="img-btn__img" />
        </button>
        <button className="img-btn">
          <img src="images/image-product-4-thumbnail.jpg" alt="shoe product image" className="img-btn__img" />
        </button>
      </div>
    </section>
    <section className="price">
      <h2 className="price-sub__heading">Sneaker Company</h2>
      <h1 className="price-main__heading">Fall Limited Edition Sneakers</h1>
      <p className="price-txt">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything
        the weather can offer.
      </p>
      <div className="price-box">
        <div className="price-box__main">
          <span className="price-box__main-new">$125.00</span>
          <span className="price-box__main-discount"> 50%</span>
        </div>
        <span className="price-box__old">$250.00</span>
      </div>
      <div className="price-btnbox">
        <div className="price-btns">
          <button className="price-btn__add price-btn">
            <img src="images/icon-plus.svg" alt="plus sign" className="price-btn__add-img price-btn__img" />
          </button>
          <span className="price-btn__txt">0</span>
          <button className="price-btn__remove price-btn">
            <img src="images/icon-minus.svg" alt="minus sign" className="price-btn__remove-img price-btn__img" />
          </button>
        </div>
        <button className="price-cart__btn btn--orange">
          <img src="images/icon-cart.svg" alt="cart image" className="price-cart__btn-img" />
          Add to cart
        </button>
      </div>
    </section>
  </main>
  {/* Attribution */}
  <div className="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">venkatesh.b</a>.
  </div>
</div>

    )

}