import React from 'react'
import './List.css'
const List = ({items}) => {
  return (
    <div className="lists">
        {items.map((item)=>{
            const {id, title} = item;
            return(
                <div key={id} className='pov'>
                    <p>{title}</p>
                </div>
            )
        })}
    </div>
  )
}

export default List