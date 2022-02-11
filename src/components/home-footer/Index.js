import React from 'react'
import "../../styles/Home-Footer.css"




const Footer = () => {
    return (
        //id='footer-section' is for the smooth scroll
        <section id='footer-section'>

            <div className="container">
                <div className="row">
                    <div id='footer-left-col' className="col">
                        <h2>| CONTACT INFO |</h2>
                        <ul className='footer-ul'>
                            <li className='footer-li'>PHONE: 303.999.9999</li>
                            <li className='footer-li'>ADDRESS: 123 S Fake St Denver, CO, 80219</li>
                            <li className='footer-li'>EMAIL: Ab.catanddog@gmail.com</li>
                        </ul>
                    </div>
                    <div id='footer-mid-col' className="col">
                        <h2>| HOURS: |</h2>
                        <ul className='footer-ul'>
                            <li className='footer-li'>Monday: XX:00</li>
                            <li className='footer-li'>Tuesday: XX:00</li>
                            <li className='footer-li'>Wednesday: XX:00</li>
                            <li className='footer-li'>Thursday: XX:00</li>
                            <li className='footer-li'>Friday: XX:00</li>
                            <li className='footer-li'>Saturday: Off</li>
                            <li className='footer-li'>Sunday: Off</li>
                        </ul>
                    </div>
                    <div id='footer-right-col' className="col">
                        <h2>| COVID INFO |</h2>
                        <p className='home-footer-p'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer