import React, { useState } from "react";

const Cart = () => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                <div className="cart__item">
                  <div className="cart__book">
                    <img
                      className="cart__book--img"
                      src="https://covers.openlibrary.org/b/id/8091016-L.jpg"
                      alt=""
                    />
                    <div className="cart__book--info">
                      <span className="cart__book--title">title</span>
                      <span className="cart__book--price">item price</span>
                      <button className="cart__book--remove">Remove</button>
                    </div>
                  </div>
                  <div className="cart__quantity">
                    <input
                      type="number"
                      min={0}
                      max={99}
                      className="cart__input"
                    />
                  </div>
                  <div className="cart__total">item price</div>
                </div>
              </div>
            </div>
            {/* <div className="cart__empty">
              <img src="" alt="" className="cart__empty--img" />
              <h2>You don't have any books in your cart!</h2>
              <button className="btn">Browse books</button>
            </div> */}

            <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>{0}</span>
              </div>
              <div className="total__item total__tax">
                <span>Tax</span>
                <span>${0}</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>${0}</span>
              </div>
              <button
                className="btn btn__checkout no-cursor"
                onClick={() => alert("Haven't got around do this  :(")}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
