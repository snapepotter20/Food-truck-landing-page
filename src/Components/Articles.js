import React from 'react'
import { HeaderObject } from "./Duck/Duck";
// import Tomato from './images/Tomato.jpej';

const Articles = () => {
    return (
        <>
            <div className='articlescontainer'>
            
                    {HeaderObject.map((item, index) => (
                        <div className="goals">
                            <img src={item.imageUrl} alt='tomato' />
                            <h6 className="item-head">{item.heading}</h6>
                            <p className='item-para'>{item.text}</p>
                            <button>Read more</button>
                        </div>
                    ))}
                
            </div>

        </>
    )
}

export default Articles;