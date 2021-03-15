import React from 'react'

function CheckoutProduct({ id, title, image, price, rating }) {
    return <div className="checkoutProduct">
        <img src={image} />

        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">
                {title}
            </p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">

                {Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))}

            </div>

            <button onClick={removeFromBasket}>
                Remove from basket
        </button>
        </div>
    </div>

}

export default CheckoutProduct
