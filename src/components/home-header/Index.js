import React from "react"
import '../../styles/Home-Header.css'
import { links } from '../../data'

function header() {
    return (
        <header>
            <div id="header-container-fixed" className="container">
                <div className="row">
                    <div id="header-left-col" className="col">
                        <h1 className="home-header-h1">Slim. Styles</h1>

                        <div>
                            {links.map((link) => {
                                return (
                                    //part of the smooth scroll => data.js
                                    //this is the nav CONTACT SERVICES HOURS
                                    //className="nav-style" is for the nav link style check line 2
                                    < a className="nav-style" href={link.url} key={link.id}>
                                        {link.text}
                                    </a>
                                )
                            })}
                        </div>


                    </div>
                </div>
            </div>
        </header >
    )
}

export default header