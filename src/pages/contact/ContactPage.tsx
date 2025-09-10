import React, { useState } from "react";
import type { FormEvent } from "react";
import contactImg from "../../assets/images/contact.jpg";
import "./Contact.css";

const ContactPage: React.FC = () => {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="container contact">
      <h1 className="section-heading">Contact Us</h1>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={onSubmit}>
          <label htmlFor="name" className="sr-only">Name</label>
          <input id="name" name="name" placeholder="Name" />

          <label htmlFor="phone" className="sr-only">Phone Number</label>
          <input id="phone" name="phone" type="tel" required placeholder="Phone Number*" />

          <label htmlFor="email" className="sr-only">E-mail</label>
          <input id="email" name="email" type="email" required placeholder="E-mail*" />

          <label htmlFor="interest" className="sr-only">Interested In</label>
          <input id="interest" name="interest" placeholder="Interested In" />

          <label htmlFor="message" className="sr-only">Message</label>
          <textarea id="message" name="message" rows={6} required placeholder="Message*" />

          <button type="submit" className="btn btn--cta">Send Email →</button>

          {sent && <p role="status" aria-live="polite">Thank you! We’ll be in touch.</p>}
        </form>

        <figure className="contact-media">
          <img className="contact-photo" src={contactImg} alt="Contact" />
        </figure>
      </div>
    </section>
  );
};

export default ContactPage;
