import React from "react"
import '../../styles/About-Section.css'
import { Link } from 'react-router-dom'

function about() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div id="about-section-left" className="col">
                        <h1 className="about-section-h1">ABOUT ME</h1>
                        <p className="about-section-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.</p>
                    </div>

                    <div id="about-section-right" className="col">
                        <img className="about-section-img" src="https://source.unsplash.com/300x300?model" alt="profile picture"></img>
                    </div>

                    <div className="about-section-h2">
                        <h2>Gallery Images</h2>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div id="about-gallery-top-left" className="col">
                                <img className="about-section-img" src="https://source.unsplash.com/300x300?fashion" alt="profile picture"></img>
                            </div>
                            <div id="about-gallery-top-mid" className="col">
                                <img className="about-section-img" src="https://source.unsplash.com/300x300?beauty" alt="profile picture"></img>
                            </div>
                            <div id="about-gallery-top-right" className="col">
                                <img className="about-section-img" src="https://source.unsplash.com/300x300?hair" alt="profile picture"></img>
                            </div>
                        </div>
                        <div className="row">
                            <div id="about-gallery-bottom-left" className="col">
                                <img className="about-section-img" src="https://source.unsplash.com/300x300?nail" alt="profile picture"></img>
                            </div>
                            <div id="about-gallery-bottom-mid" className="col">
                                <img className="about-section-img" src="https://source.unsplash.com/300x300?makeup" alt="profile picture"></img>
                            </div>
                            <div id="about-gallery-bottom-right" className="col">
                                <img className="about-section-img" src="https://source.unsplash.com/300x300?Hemline" alt="profile picture"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default about