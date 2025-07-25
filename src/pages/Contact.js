import React from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2asn59p",   
        "template_qh34zsg",  
        e.target,
        "dNd1fqxQGO6IGcQLx"    
      )
      .then(
        () => alert(" Message sent successfully!"),
        (error) => alert(" Failed to send message. Please try again.")
      );

    e.target.reset();
  };

  return (
    <>
      <div className="contact-container">
        <h1 className="contact-heading">
          CONTACT&nbsp;
          <motion.span
            layoutId="magicM"
            className="char metallic contact-m"
            style={{ opacity: 1 }}
          >
            M
          </motion.span>
          E
        </h1>

        <motion.form
          className="contact-form"
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            autoComplete="off"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          />
          <button type="submit">Send Message</button>
        </motion.form>
      </div>
    </>
  );
};

export default Contact;
