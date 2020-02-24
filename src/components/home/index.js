import React from "react";
import Header from '../header/header'
import Footer from "../footer";
import "../../styles/home.scss";
import '../../styles/common.scss';
import Category from './Category/Category';
import Carousel from './Carousel/Carousel';
import Anchor from '../shared/Anchor/Anchor';


function Home(props) {
  const { banners, categories, cartProducts } = props;
  return (
    
    <div className="container">
      <Anchor className="skip-main" to="#main" title="Skip to main content">Skip to main content</Anchor>
      <Header cartProducts={cartProducts} />
      <main className="main" id="main">
        
      <Carousel
        naturalSlideWidth={100}
        naturalSlideHeight={30}
        banners={banners}
        totalSlides={banners && banners.length}
        isPlaying={true}
      />
         
      <Category categories={categories} />
       
      </main>
      <Footer />
    </div>
  );
}

export default Home;
