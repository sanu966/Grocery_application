import React from "react";
import '../../styles/cart.scss';
import groupBy from 'lodash.groupby';
import LineItem from './lineItem';
import Footer from './footer';
import CartOffer from './cartOffer';
import Button from '../shared/Button/Button';
import Heading from '../shared/Heading/Heading';
import "font-awesome/css/font-awesome.min.css";

function Cart(props) {
    let groupedProducts = [];
    const { cartProducts } = props;

    function plusProduct(product) {
        props.requestAddProduct(product);
    }

    function minusProduct(product) {
        props.requestMinusProduct(product);
    }

    let totalCheckoutPrice = 0;

    if (cartProducts) {
        groupedProducts = groupBy(cartProducts, 'id');
    }

    return <div className="shopping-cart" tabIndex="0" role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialogDesc">
        <div className="shopping-cart-contents">
            <div className="shopping-cart-header">
                <Heading id="dialogTitle" variant="h2">My Cart({cartProducts ? cartProducts.length : 0} {cartProducts && cartProducts.length === 1 ? 'item' : 'items'} )</Heading>
                <Button className="fa fa-times icon-close" aria-label="cart close" onClick={props.handleClose}></Button>
            </div>
            <div className="cart-body">
                <div className="cart-items" aria-label={`cart has ${cartProducts ? cartProducts.length : 0} items`}>
                    {groupedProducts && Object.values(groupedProducts).map((obj, i) => {
                        totalCheckoutPrice += obj[0].price * obj.length;
                        return (
                            <LineItem i={i} obj={obj} plusProduct={plusProduct} minusProduct={minusProduct} />
                        )
                    })}
                </div>


                <CartOffer cartProducts={cartProducts} />


            </div>

            <Footer cartProducts={cartProducts} totalCheckoutPrice={totalCheckoutPrice} handleClose={props.handleClose} />
        </div>
    </div >;
}

export default Cart;