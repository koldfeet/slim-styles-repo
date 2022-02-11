import React from 'react'
import '../styles/FriendCard.css'

function List(props) {
    return (
        <div>
            <ul className='list-group'>
                {props.service.map(item => (
                    <li className='list-group-item' key={item.id}>
                        {item.Name}
                        {item.Price}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List