import React from 'react';
import './ImageSlider.css';

function ImageSlider() {
    React.useEffect(() => {
        let sliderImages = document.querySelectorAll('.slide');
        let rightArrow = document.querySelector('#arrow-right');
        let leftArrow = document.querySelector('#arrow-left');
        let current = 0;

        function reset() {
            for(let i = 0; i<sliderImages.length; i++){
                sliderImages[i].style.display = 'none';
            }
        }

        function init() {
            reset();
            sliderImages[0].style.display = 'block';
        }

        function slideLeft() {
            reset();
            sliderImages[current-1].style.display = 'block';
            current--;
        }

        function slideRight() {
            reset();
            sliderImages[current+1].style.display = 'block';
            current++;
        }
    
        leftArrow.addEventListener('click', function(){
            if(current === 0){
                current = sliderImages.length;
            }
            slideLeft();
        }, false);

        rightArrow.addEventListener('click', function(){
            if(current === sliderImages.length-1){
                current = -1;
            }
            slideRight();
        }, false);

        init();
    });

    return (
        <div className="container">
            <div className="wrap">
                <div id="arrow-left" class="arrow"></div>
                <div id="slider">
                    <div className="slide slide1">
                        <div className="content">
                            <span></span>
                        </div>
                    </div>
                    <div className="slide slide2">
                        <div className="content">
                            <span></span>
                        </div>
                    </div>
                    <div className="slide slide3">
                        <div className="content">
                            <span></span>
                        </div>
                    </div>
                    <div className="slide slide4">
                        <div className="content">
                            <span></span>
                        </div>
                    </div>
                    <div className="slide slide5">
                        <div className="content">
                            <span></span>
                        </div>
                    </div>
                </div>
                <div id="arrow-right" class="arrow"></div>
            </div>
        </div>
    )
}

export default ImageSlider
