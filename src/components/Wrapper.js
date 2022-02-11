import React from 'react'
import '../styles/FriendCard.css'


function Wrapper(props) {
    return (
        <div>
            {/* id='services' is for the smooth scroll */}
            <h1 id='services' className='about-section-h2'>Services</h1>
            <div className='wrapper'> {props.children} </div>
        </div>
    )
}

export default Wrapper