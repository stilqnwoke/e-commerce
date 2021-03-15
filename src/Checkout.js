import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return <div className="checkout">
        <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />

        {basket?.length === 0} ? (
        <div>
            <h2>
                Your shopping basket is empty.
            </h2>
        </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>


            {/* List out all of the Checkout products*/}
            {basket.map(item => (
                <CheckoutProduct
                    item = {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                />
            ))}

          </div>
        )}
    </div>


}

export default Checkout
