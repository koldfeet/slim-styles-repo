import React from 'react'
import '../styles/FriendCard.css'

function List(props) {
    return (
        <div>
            <ul className='list-group'>
                {props.blog.map(item => (
                    <li className='list-group-item' key={item.id}>
                        {item.question}
                        <br></br>
                        <li className='list-answer' key={item.id}>
                            {item.answer}
                        </li>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List