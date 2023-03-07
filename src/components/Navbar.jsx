import React from "react";

function Navbar() {
    return (
        <section className="nav-container">
            <div className="logo">
                <h1>p0p<span className="last-name">Tartz</span></h1>
            </div>
            <nav>
                <div>
                    <a href="">RESUME </a>
                </div>
                <div>
                    <a href="#skills">SKILLS</a>
                </div>
                <div>

                    <a href="#portfolio">PROJECTS</a>
                </div>
                <div>
                    <a href="#contact">CONTACT</a>
                </div>


            </nav>

        </section>

    )
}

export default Navbar