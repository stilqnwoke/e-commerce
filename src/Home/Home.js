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
                title="first product"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />

            <Product
                id="21321321"
                title="first product"
                price={239}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
            />

            <Product
                id="21321321"
                title="first product"
                price={239}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
            />


        </div>


        <div className="home__row">
            <Product
                id="21321321"
                title="first product"
                price={199.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />

            <Product
                id="21321321"
                title="first product"
                price={98.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />

            <Product
                id="21321321"
                title="first product"
                price={598.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />
        </div>

        <div className="home__row">
            <Product
                id="21321321"
                title="first product"
                price={1094.98}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />

            <Product
                id="21321321"
                title="first product"
                price={239}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
            />

            <Product
                id="21321321"
                title="first product"
                price={239}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
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
