import React from "react";

function Navbar() {
    return (
        <section className="nav-container">
            <div className="logo">
                <h1>p0p<span className="last-name">Tartz</span></h1>
            </div>
            <nav>
                <div>
                    <a href="#">RESUME </a>
                </div>
                <div>
                    <a href="#">SKILLS</a>
                </div>
                <div>

                    <a href="#">PROJECTS</a>
                </div>
                <div>
                    <a href="#">CONTACT</a>
                </div>


            </nav>

        </section>

    )
}

export default Navbar