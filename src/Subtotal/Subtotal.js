import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../Reducer and State/StateProvider';
import { getBasketTotal } from "../Reducer and State/reducer";
import { useHistory } from "react-router-dom";


function Subtotal() {
    const history = useHistory(); // browser history
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">

            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p className="total__amount">
                            Subtotal ({basket.length} items): <strong>{` ${value} `}</strong>
                        </p>
                        
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />
            <button onClick={e => history.push('/payment')}>Checkout</button>
        </div>
    );

}

export default Subtotal
