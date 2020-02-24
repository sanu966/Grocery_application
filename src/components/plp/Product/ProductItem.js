import React from 'react';
import Image from '../../shared/Image/Image';
import Heading from '../../shared/Heading/Heading';
import Button from '../../shared/Button/Button';
import { useWindowResize } from '../../header/useWindowResize';

function ProductItem(props) {
    const { buyNow, obj } = props;
    const { width } = useWindowResize();
    return (
        <div key={obj.id} className="item">
                <Heading variant="h1">List of products based on categories</Heading>
                <Heading variant="h2">{obj.name}</Heading>
                <div className={`flexContainer flexRowDirection item-wrapper ${width < 768 ? '': 'flexColumnDirection'}`}>
                    <div className="item-inner-content">
                        <Image src={obj.imageURL} alt={obj.name} />
                    </div>
                    <div className="item-inner-content">
                        <p>{obj.description}</p>
                        <span className="price-tag"> MRP Rs. {obj.price}</span>
                        <Button className="buyNow-btn" onClick={() => buyNow(obj)} aria-label={`Buy ${obj.name} at Rupees ${obj.price}`}>Buy Now</Button>
                    </div>
                </div>
                <Button className="buyNow-mobile-btn" onClick={() => buyNow(obj)} aria-label={`Buy ${obj.name} at Rupees ${obj.price}`}>Buy Now @ Rs.{obj.price}</Button>
            </div>
    );
}

export default ProductItem;