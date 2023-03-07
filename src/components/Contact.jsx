import React from "react";

function Contact() {
    return (
        <div id="contact">
            <section className="contact-me">
                <h1>Contact Me:</h1>
            </section>
            <form className="contact-form" action="#" method="post">
                <div className="contact-left">

                    <input type="text" id="name" name="name" required placeholder="Name*"></input>

                    <input type="email" id="email" name="email" required placeholder="E-mail*"></input>

                    <input type="text" id="subject" name="subject" required placeholder="Subject*"></input>

                    <textarea id="message" name="message" required placeholder="Please write your message here"></textarea>

                    <input type="submit" value="Send" id="submit"></input>
                </div>
                <div className="contact-right">

                    <a href="#" className="contact-img-1"></a>
                    <a href="#" className="contact-img-2"></a>
                    <a href="#" className="contact-img-3"></a>

                </div>
            </form >
        </div>




    )
}


export default Contact