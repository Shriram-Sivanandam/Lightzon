import React from 'react';
import ServiceItem from './ServiceItem';
import './Services.css';

function Cakes() {
    return (
        <div className="cards" id="products">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <ServiceItem 
                        src="images/image_1.jpg"
                        text="Electrical Work and Maintanance"
                        />
                         <ServiceItem 
                        src="images/image_2.jpg"
                        text="Interior Works"
                        />
                        <ServiceItem 
                        src="images/image_3.jpg"
                        text="Interior Consulting and Design"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cakes;
