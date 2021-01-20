import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container" id="about">
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <a className='links' href='https://www.instagram.com/lightzon.in/'  target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i> Lightzon</a>
                        <a className='links' href='https://wa.me/918667401982' target="_blank" rel="noreferrer"><i class="fab fa-whatsapp"></i> Bhavi Shanker</a>
                    </div>
                </div>
            </div>
            <div className="the_end">
                <div className="footer__logo">
                    <h1>Lightzon</h1>
                </div>
                <div className="footer__copyright">
                    <p><span>&#169;</span> 2020 Lightzon</p>
                </div>
                <div className="footer__TC">*T<span>&#38;</span>C Apply</div>
            </div>
        </div>
    )
}

export default Footer
