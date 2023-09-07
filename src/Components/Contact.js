import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='contactcontainer'>
                <div className='image2'>
                    <img src='/images/logo.png' alt='contact' />
                </div>

                <div className='contactus'>
                    <div className='address'>
                        <h3>Conatct Us</h3>
                        <ul>TIF Pvt Ltd,5/1 market street,Mumbai 50301</ul>
                        <ul>tif456@gmail.com</ul>
                        <ul>(904)443-0343</ul>
                    </div>
                    <div className='more'>
                        <h3>More</h3>
                        <ul>About Us</ul>
                        <ul>Products</ul>
                        <ul>Career</ul>
                        <ul>Contact Us</ul>
                    </div>
                    <div className='links'>
                        <h3>Social Links</h3>
                        <div className='media'>
                            <div className='socialmedia'>
                                <a href="https://www.instagram.com/">
                                    <img src="/images/instagram.svg" alt='about' />
                                </a>
                            </div>
                            <div className='socialmedia'>
                                <a href="https://twitter.com/">
                                    <img src="/images/twitter.svg" alt='about' />
                                </a>
                            </div>
                            <div className='socialmedia'>
                                <a href="https://facebook.com/">
                                    <img src="/images/facebook-f.svg" alt='about' />
                                </a>
                            </div>
                        </div>
                        <div class="center">
                             &copy; 2023 Jumbo Food Truck
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
