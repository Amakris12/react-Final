import React from 'react'

const BottomCard = ({Header,Content}) => {
    return (
        <div className='bottomCard'>
            <h1 className='cardHead'>{Header}</h1>
            <p className='contentCard'>{Content}</p>
        </div>
    )
}

export default BottomCard
