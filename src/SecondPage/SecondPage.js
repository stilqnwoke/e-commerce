import React from 'react';
import "./SecondPage.css";
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

function SecondPage() {
    return (
        <div className="second__page">
            <div className="second__pageRow">


                <Product
                    id="21321321"
                    title="Tablet Stand Holder"
                    price={24.64}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/610qp4ahVPL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                />

                <Product
                    id="21321321"
                    title="Tinwoo Smart Watch for Android"
                    price={50.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/613Ha42CqOL._AC_SL1000_.jpg"
                />

                <Product
                    id="21321321"
                    title="All-In-One Car Seat"
                    price={328.49}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41Tgj0fkVIL._SX300_SY300_QL70_FMwebp_.jpg"
                />


            </div>

            <div className="second__pageRow">
                <Product
                    id="21321321"
                    title="2K Indoor Cam Pan"
                    price={39.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61mpwmt5wcL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
                />

                <Product
                    id="21321321"
                    title="Inflatable Recovery Dog Collar"
                    price={13.59}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81edruxidHL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                />

                <Product
                    id="21321321"
                    title="Electric Hand Mixer"
                    price={19.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71ejvAQfD5L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                />
            </div>

            <div className="second__pageRow">

                <Product
                    id="21321321"
                    title="ORDA Wireless Controller"
                    price={15.29}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71VsPl1gbCL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                />

                <Product
                    id="21321321"
                    title="Leather Working Tools"
                    price={75.61}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71DZfHF9zTL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                />

                <Product
                    id="21321321"
                    title="Bagless Vacuum Cleaner"
                    price={74.99}
                    rating={2}
                    image="https://images-na.ssl-images-amazon.com/images/I/71GZiLcM0bL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                />

            </div>

            <div className="pages">
                <Link to="/">
                    <span><a className="chevrons"><ChevronLeftIcon /></a></span>
                </Link>
                <h1>PAGE</h1>
                <Link to="/second">
                    <span><a className="chevrons"><ChevronRightIcon /></a></span>
                </Link>
            </div>

        </div>

    )
}

export default SecondPage
