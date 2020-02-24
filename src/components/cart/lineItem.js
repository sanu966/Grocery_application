import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Button from '../shared/Button/Button';
import Image from '../shared/Image/Image';

const LineItem = (props) => {
    const { obj, i, plusProduct, minusProduct } = props;
    return <div key={i} className="shopping-cart-item">
        <div className="apple-logo">
            <Image src={obj[0].imageURL} alt={obj[0].name} />
        </div>
        <p><strong>{obj[0].name}</strong></p>
        <Button className="icon-minus" aria-label={`remove ${obj[0].name}`} onClick={() => minusProduct(obj[0])}><i className="fa fa-minus-circle icon-minus"></i></Button>
        <span className="minus-1">{obj.length}</span>
        <Button className="icon-plus" aria-label={`add ${obj[0].name}`} onClick={() => plusProduct(obj[0])}><i class="fa fa-plus-circle icon-plus"></i></Button>
        <span className="icon-close"><i class="fa fa-times icon-close"></i></span>
        <span className="product-price">Rs.{obj[0].price}</span>
        <span className="total-product-price">Rs.{obj[0].price * obj.length}</span>
    </div>
}

export default LineItem;