import React, { useState, useEffect } from 'react';
import "./Orders.css";
import Order from "../Order/Order";
import { db } from "../firebase/firebase";
import { Link } from 'react-router-dom';
import { useStateValue } from "../Reducer and State/StateProvider";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => {
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                })
        } else {
            setOrders([]);
        }

    }, [user])

    return (


        <div>
            {orders?.length === 0 ? (
                <div className="no__orders">
                    <div >
                        <ShoppingCartOutlinedIcon color="action" />
                        <div className="container__button">
                            <h3 className="empty__orders">No orders yet</h3>
                            <Link to="/">
                            <button className="button">Back to Home</button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            ) : (
                    <div className="orders">
                        <h1>Your orders</h1>

                        <div className="orders__order">
                            {orders?.map(order => (
                                <Order order={order} />
                            ))}
                        </div>
                    </div>
                )}
        </div>

    )
}

export default Orders
