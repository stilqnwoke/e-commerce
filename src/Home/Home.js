import React from 'react';
import './Home.css';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

function Home() {
    return <div className="home">
        {/* <img className="home__image" src="https://image.freepik.com/free-photo/online-shopping-icon-smart-phone-global-concept_117856-2469.jpg"></img> */}

        <div className="home__row">
            <Product
                id="21321321"
                title="The Lean Startup"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />

            <Product
                id="21321321"
                title="USB Speaker"
                price={139}
                rating={3}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
            />

            <Product
                id="21321321"
                title="Credit Card Wallet"
                price={11.04}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/7194TAsM-9L.__AC_SY300_SX300_QL70_FMwebp_.jpg"
            />


        </div>


        <div className="home__row">
            <Product
                id="21321321"
                title="Gaming Headset for PC"
                price={26.35}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/615o1%2BWB5IL._AC_SL1000_.jpg"
            />

            <Product
                id="21321321"
                title="Face Masks Reusable"
                price={16.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/61lNm8pSDXL._AC_SX569_.jpg"
            />

            <Product
                id="21321321"
                title="GoPro HERO8 Black"
                price={299.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61aldlBUqYL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            />
        </div>

        <div className="home__row">
            <Product
                id="21321321"
                title="USB C Charger"
                price={23.70}
                rating={2}
                image="https://images-na.ssl-images-amazon.com/images/I/51p5hvao-ZL._AC_SL1300_.jpg"
            />

            <Product
                id="21321321"
                title="19-Inch Mickey Mouse"
                price={10.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81Tiz99G%2BSL._AC_SL1500_.jpg"
            />

            <Product
                id="21321321"
                title="Magnetic Wireless Charger"
                price={23.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/61KobYn6YkL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
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

    </div >


}

export default Home
