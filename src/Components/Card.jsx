import React from 'react'

const Card = ({Header,Content}) => {
    return (
        <div className='card'>
            <h1 className='cardHead'>{Header}</h1>
            <p className='contentCard'>{Content}</p>
        </div>
    )
}

export default Card
