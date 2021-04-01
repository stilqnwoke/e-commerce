import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from '../Reducer and State/StateProvider';


function CheckoutProduct({ id, title, image, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item from basket

        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });

    }


    return <div className="checkoutProduct">

        <img className="checkoutProduct__image" src={image} />

        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">
                {title}
            </p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong className="price">{price}</strong>
            </p>
            <div className="checkoutProduct__rating">

                {Array(rating)
                    .fill()
                    .map((_) => (
                        <p>☆</p>
                    ))}

            </div>

            {!hideButton && (
                <button onClick={removeFromBasket} className="remove__button">
                    Remove from basket
                </button>

            )}

        </div>

    </div>

}

export default CheckoutProduct
