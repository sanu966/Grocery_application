import React from 'react';
import Heading from '../shared/Heading/Heading';
import Image from '../shared/Image/Image';

const CartOffer = (props) => {
    return (<>
        {props.cartProducts && props.cartProducts.length ?
            <div className="lowest-price-gauranteed">
                <div className="lowest-price-logo">
                    <Image src={`/static/images/lowest-price.png`} alt="lowest-price" />
                </div>
                <div className="cheaper-anywhere"><p>You won't find it cheaper anywhwere</p></div>
            </div> : <div id="dialogDesc" className="lowest-price-gauranteed-blank">
                <Heading variant="h2">No items in your cart</Heading>
                <p>Your favourite items are just a click away</p>
            </div>}
    </>)
}

export default CartOffer;