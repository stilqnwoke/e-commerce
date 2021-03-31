import React from 'react';
import { useStateValue } from '../Reducer and State/StateProvider';
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import { Link } from 'react-router-dom';



function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                {/* <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" /> */}

                {basket?.length === 0 ? (
                    <div className="no__products">
                            <img className="empty__cart" src="https://www.frostcouture.ie/skin/frontend/rwd/acjewellary/images/empty_cart.png"></img>
                            <div className="message">
                                <h1>You need to add items to the cart, to proceed to Checkout</h1>
                                <Link to="/">
                                    <button className="products__page">Search for products</button>
                                </Link>
                            </div>
                    </div>
                ) : (
                        <div>
                            {/* <h3>Hello, {user?.email}</h3> */}
                            <h2 className="checkout__title">Your Shopping Basket</h2>



                            {/* List out all of the Checkout products*/}
                            {basket.map((item) => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}

                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    );

}

// react currency format

export default Checkout
