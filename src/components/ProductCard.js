import React from 'react'
import '../styles/FriendCard.css'

function ProductCard(props) {
    return (
        <div className='card'>
            <div className='img-container'>
                <img alt={props.name} src={props.image} />
            </div>
            <div className='content'>
                <ul>
                    <li>
                        <strong>Name: </strong> {props.name}
                    </li>
                    <li>
                        <strong>Price: </strong> {props.price}
                    </li>
                    <li>
                        <strong>Rating: </strong> {props.rating}
                    </li>
                </ul>
            </div>
            <span onClick={() => props.removeFriend(props.id)} className="remove">X</span>
        </div>
    )
};

export default ProductCard