import React from 'react';
import Anchor from '../../shared/Anchor/Anchor';
import Image from '../../shared/Image/Image';

function Category(props){
    const { categories } = props;
    return (
        <>
         {categories && categories.map((item, i) => {
          return(
            i%2 === 0 ? 
            <figure key={item.id} className="flexContainer flexEnd home-tile">
            <Image src={item.imageUrl} alt={item.key} />
            <figcaption className="flexItem category-info">
              <h1>{item.name}</h1>
              <p>{item.description.split('\n')}</p>
              <Anchor
              to={`/plp/${item.key}`}
              className="btn-title"
              title={item.name}
              >
                Explore {item.key}
              </Anchor>
            </figcaption>
            </figure>
         
          : 
            <figure key={item.id} className="flexContainer flexEnd home-tile">
            <figcaption className=" category-info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <Anchor
              to={`/plp/${item.key}`}
              className="btn-title"
              title={item.name}
              >
                Explore {item.key}
              </Anchor>
            </figcaption>
                <Image src={item.imageUrl} alt={item.key} />
            </figure>
        )}) }
        </>
    )
}

export default Category;