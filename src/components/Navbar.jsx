import React from "react";

function Navbar() {
    return (
        <section className="nav-container">
            <div className="logo">
                <h1>eric<span className="last-name">Meyers</span></h1>
            </div>
            <nav>
                <a href="#">RESUME </a>
                <a href="#">SKILLS</a>
                <a href="#">PROJECTS</a>
                <a href="#">CONTACT</a>
            </nav>

        </section>

    )
}

export default Navbar