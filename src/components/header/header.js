import React, { useState } from "react";
import '../../styles/header.scss';
import "../../styles/Layout.scss";
import Model from "../model";
import Anchor from '../shared/Anchor/Anchor';
import Button from '../shared/Button/Button';
import Image from '../shared/Image/Image';
import "font-awesome/css/font-awesome.min.css";
import { useWindowResize } from './useWindowResize';

function Header(props) {
    const { cartProducts } = props;
    const [display, setDisplay] = useState('none');
    const [show, setModel] = useState(false);
    const  { width } = useWindowResize();
   

    let showModal = () => {
        setModel(true);
    };

    let hideModal = () => {
        console.log('handle close clicked');
        setModel(false);
    };

  function showMobileMenu(e) {
    if (display === "block") {
      setDisplay('none');
  } else {
      setDisplay('block');
  }
  }

    if(width < 768) {
      return (
      <div>
      <header>
         <div className="mobile-navbar">
                <div className="flexContainer mobile-nav">
                    <div className="mobile-menu">
                        <Anchor to={'/'} title="logo">
                          <Image src={'/static/images/logo.png'} alt="logo" />
                          </Anchor>
                        <ul className="myLinks" style={{ display: display }}>
                            <li><Anchor to={'/'}>Home</Anchor></li>
                            <li><Anchor to={'/plp/all'}>Products</Anchor></li>
                            <li><Anchor to={'/login'}>Sign In</Anchor></li>
                            <li><Anchor to={'/register'}>Register</Anchor></li>
                        </ul>
                    </div>
           
                        <div className="mobile-cart">
                            <i onClick={showModal} className="m-btn-cart">  
                            <Image src={'/static/images/cart.svg'} alt="cart logo" />
                            <span>{cartProducts ? cartProducts.length : 0} {cartProducts && cartProducts.length === 1 ? 'item' : 'items'}</span>
                            </i>
                        </div>
                        <div className="mobile-hamburger">
                            <i onClick={() => showMobileMenu()} className="fa fa-bars"></i>
                        </div>

                </div>
            </div>
      </header>
      <Model show={show} handleClose={hideModal} />
      </div>
      )
    } else {
      return (
      <div>
      <header>
      <div className="desktop">
        <div className="flexContainer web-app">
          <div className="flexItem flexContainer flexCenter itemCenter logo">
            
              <Anchor to="/" title="logo">
              <Image src="/static/images/logo.png" alt="sabka-bazar-logo" />
              </Anchor>
           
          </div>
          <nav role="navigation" aria-label="header navigation" className="flexItem  header-nav">
            <ul role="menu">
              <li role="menuitem">
                <Anchor to="/" aria-label="Home Menu Item" title="Home">Home</Anchor>
              </li>
              <li role="menuitem">
                <Anchor to="/plp/all" aria-label="Products Menu Item" title="Products">Products</Anchor>
              </li>
            </ul>
          </nav>
          <div className="flexItem" >
          <nav aria-label="site navigation" className="top-nav">
            <ul role="menu" className="flexTop flexContainer flexCenter">
              <li role="menuitem">
                <Anchor to="/login" aria-label="SignIn Menu Item" title="SignIn">SignIn</Anchor>
              </li>
              <li role="menuitem">
                <Anchor to="/Register" aria-label="Register Menu Item" title="Register">Register</Anchor>
              </li>
            </ul>
            </nav>
            <div className="flexCart flexContainer flexCenter flexEnd">
              <Button className="btn-cart" aria-label={`${cartProducts ? cartProducts.length : 0} items cart`} onClick={showModal}>
              <Image src="/static/images/cart.svg" alt="cart-logo" />
              <span>{cartProducts ? cartProducts.length : 0} {cartProducts && cartProducts.length === 1 ? 'item' : 'items'}</span>
              </Button>
            </div>
            </div>
        </div>
        </div>
      </header>
      <Model show={show} handleClose={hideModal} />
  </div>
      );
    }
  }

export default Header;
