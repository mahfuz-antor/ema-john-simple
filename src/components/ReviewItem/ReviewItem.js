import React from 'react';


const reviewItemStyle = {
    width: '65%',
    border: '1px solid red',
    margin: '20px',
    marginLeft: '150px',
    padding: '20px'
}

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    return (
        <div className="review-item" style={reviewItemStyle}>
            <h4 className="product-name">{name}</h4>
            <p>Quantity:{quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button
                className="main-button"
                onClick={() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;