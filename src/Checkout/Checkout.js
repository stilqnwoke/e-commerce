import React from 'react';
import { useStateValue } from '../Reducer and State/StateProvider';
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                {/* <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" /> */}

                {basket?.length === 0 ? (
                    <div>
                        <h2>
                            <img className="empty__cart" src="https://shop.aviary.org/resources/images/common/cartEmpty.png"></img>
                        </h2>
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
