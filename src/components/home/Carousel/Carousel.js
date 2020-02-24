import React from 'react';
import {
    CarouselProvider,
    Slider,
    Slide,
    Dot,
    ButtonBack,
    ButtonNext
  } from "pure-react-carousel";
  import "pure-react-carousel/dist/react-carousel.es.css";
  import Image from '../../shared/Image/Image';

function Carousel(props){
    const { naturalSlideWidth, naturalSlideHeight, totalSlides, isPlaying, banners } = props;
    const carouselStyle = {
       'marginTop': '10px',
       'boxShadow': '0px 6px 5px -3px #d8d7d7'
    }
    return (
        <>
         <CarouselProvider
            style={carouselStyle}
            naturalSlideWidth={naturalSlideWidth}
            naturalSlideHeight={naturalSlideHeight}
            banners={banners}
            totalSlides={totalSlides}
            isPlaying={isPlaying}
          >
              <div className="slideshow-container">
                <Slider aria-label="banner deals">
                  {banners && banners.map((item,i) => {
                    return (
                      <Slide key={item.id} index={i} className="mySlides"><Image src={item.bannerImageUrl} alt={item.bannerImageAlt}/></Slide>
                    )})}
                </Slider>

                <div className="slides-dot">
                  {banners && banners.map((item,i)=> {
                    return(
                      <Dot key={item.id} slide={i} aria-label={"Show slide " + item.order + " of 5"} className="dot" />
                  )})}
                </div>
                <ButtonBack aria-label="previous" className="prev">Back</ButtonBack>
                <ButtonNext aria-label="next" className="next">Next</ButtonNext>
              </div>
            
          </CarouselProvider>
       
        </>
    )
}

export default Carousel;