import React from 'react';

export default function Shoes({title, content, price,image}){
    return(
        <div className='shoes-container'>
            <img src= {image} alt="상품이미지" />
            <div className='shoes-content'>
                <h2>{title}</h2>
                <h4>{content}</h4>
                <p>{price}</p>
            </div>
        </div>
    )
}

