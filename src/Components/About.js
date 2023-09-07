import React from 'react'

const About = () => {
    return (
        <>
            <main className='aboutcontainer'>
                <div className='aboutsection1'>
                    <img src="/images/About.png" alt='about' />
                </div>
                <div className='aboutsection2'>
                    <div className='aboutcontent'>
                        <h2>About Us</h2>
                        <p>Natural health products are naturally-occurring substances that can be used to maintain or restore health. They can be vitamins, minerals, herbs or other plants, amino acids (the individual building blocks of protein), or parts of these substances. They can come in many forms such as pill, capsule, tablet, or liquid form. They supplement (add to) the diet and should not be considered a substitute for food.</p>
                        <button className='explore-cta cta2'>Read More</button>
                    </div>
                </div>
            </main>
            <h1 className='latest'>Latest Articles</h1>
        </>
    )
}

export default About
