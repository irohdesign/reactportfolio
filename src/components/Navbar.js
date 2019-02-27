import React from "react";
import "../style.css";

function Navbar() {
    return(
        <div id="nav-heading">
            <nav id="main-nav">
                <div id="left-nav">
                    <ul>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div id="right-nav">
                    <ul>
                        <li><img src="/assets/github.svg"></img>Github</li>
                        <li><img src="/assets/linkedin.svg"></img>LinkedIn</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;