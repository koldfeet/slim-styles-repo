import React from 'react'
import '../styles/FriendCard.css'

// all list style is inside FriendCard.css file starting on line 66

function List(props) {
    return (
        <section className='list-section-style'>
            <div className='list-item-h2-center'>
                <h2 className='list-item-h2-style'>Hair Information</h2>
            </div>
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
        </section>
    )
}

export default List