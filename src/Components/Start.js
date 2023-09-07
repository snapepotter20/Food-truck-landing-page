import React from 'react'

const Start = () => {
    return (
        <>
            <main className='container'>
                <div className='section1'>
                    <div className='image'>
                        <img src="/images/logo.png" alt='logo' />
                    </div>
                    <div className='content'>
                        <h1>Discover the <span className='span-word'>Best</span> Food and Drinks</h1>
                        <p>Naturally made Healthcare Products for the better care & support of your body.</p>
                        <button className='explore-cta'>Explore Now!</button>
                    </div>
                </div>

                <div className='section2'>
                    <img src="/images/Group 289.png" alt='group 289' className='img1'/>
                    <img src="/images/Vector 1.png" alt='vector' className='img2'></img>
                    <img src="/images/Group 318.png" alt='vector' className='img3'></img>
                </div>
            </main>
        </>
    )
}

export default Start
