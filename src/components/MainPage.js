import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainPage.css';

function MainPage() {
    return (
        <div className="mainPage_container" id="home">
            <h1>Lightzon Chennai</h1>
            <p>Interior and Electrical</p>
            <p>Services</p>
            <a href="https://wa.me/918667401982" target="_blank" rel="noreferrer">
                <div className='mainPage_btns'>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'><span>Contact Us Now</span></Button>
                </div>
            </a>
        </div>
    )
}

export default MainPage;
