import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid footer-color">
         <div className="row">
            <div className="col-lg-3">
                <h2>
                ABOUT AGENCY
                </h2>
                <p>The world has become so fast paced that people don’t want to stand by reading a page of information, they would much rather look at a presentation and understand the message. It has come to a point</p>
            </div>
            <div className="col-lg-3">
                <h2>Company</h2>
                <ul className="footer-list">
                    <li >Pricing</li>
                    <li >About</li>
                    <li >Gallery</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="col-lg-3">
                <h2>Newsletter</h2>
                <div>
                    <input type="email" className="p-2 m-2" placeholder="email"/>
                    <input type="submit"/>
                </div>
            </div>
            <div className="col-lg-3">
            <h2>Popular Destination</h2>
                <ul className="footer-list">
                    <li>Indonesia</li>
                    <li>America</li>
                    <li>Thailand</li>
                    <li>France</li>
                </ul>
            </div>

         </div>
            
        </div>
    );
};

export default Footer;