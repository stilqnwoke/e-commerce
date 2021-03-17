import React from 'react';
import "./Payment.css";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();


    return (
        <div className="payment">
            <div className="payment__container">

                <h1>Checkout {<Link to="/checkout">({basket?.length} items)</Link>}</h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>345 Kentucky Drive</p>
                        <p>Los Angeles, CA 34871</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe implementation*/}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
