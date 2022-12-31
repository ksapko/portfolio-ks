import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rxbd0vn",
        "template_bq2bvsc",
        form.current,
        "nczpFk_a76HwMMBFd"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Success !");
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED ...", error);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Get in touch</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <AiOutlineMail className="icons-contact" />
            <h5>Email</h5>
            <a href="mailto:ksapko97@gmail.com" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="icons-contact" />
            <h5>Messenger</h5>
            <a href="https://m.me/kasia.sapko" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <div className="container">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              type="message"
              rows="7"
              name="message"
              placeholder="Your Message"
              required
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
