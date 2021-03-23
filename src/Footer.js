import React from 'react';
import "./Footer.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {
    return (
        <div className="footer">
            <article className="services">
                <ul>
                    <li><a>Terms of Service</a></li>
                    <li><a>Contacts</a></li>
                    <li><a>Deals</a></li>

                </ul>
                <ul>
                    <li><a>Shipping</a></li>
                    <li><a>Store Locator</a></li>
                    <li><a>Investor Relations</a></li>
                </ul>
                <ul className="social__icons">
                    <li><InstagramIcon /></li>
                    <li><YouTubeIcon /></li>
                    <li><FacebookIcon /></li>
                </ul>
            </article>
        </div>
    )
}

export default Footer
