import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <form action="https://hook.eu1.make.com/7i7wgb5gemo6uvzq1ycn5wc9rropteir">
                    <input
                        type="hidden"
                        name="redirect"
                        value="https://gregoirevaillant.github.io/portfolio#contact"
                    />
                    <input
                        type="text"
                        name="fullnamae"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="7"
                        required
                    />
                    <button type="submit" className="btn btn-primary ">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
