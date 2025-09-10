import React, { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import "../contact/Contact.css"; // переиспользуем стили формы

// изображения
import hero from "../../assets/images/hero.jpg";
import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpg";
import about3 from "../../assets/images/about3.jpg";
import projects01 from "../../assets/images/projects_01.png";
import projects02 from "../../assets/images/projects_02.png";
import projects03 from "../../assets/images/projects_03.png";
import projects04 from "../../assets/images/projects_04.png";
import projects05 from "../../assets/images/projects_05.png";
import contactImg from "../../assets/images/contact.jpg";

const HomePage: React.FC = () => {
  const [sentHome, setSentHome] = useState(false);

  function onSubmitHome(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSentHome(true);
  }

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-kicker">PROJECT</span>
              <span className="hero-lead">Lorum</span>
            </h1>
          </div>

          <figure className="hero-art">
            <img src={hero} alt="Project Lorum" />
            <figcaption className="hero-cta">
              <Link to="/projects" className="btn btn--white">View Project →</Link>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ABOUT (3 tiles + text) */}
      <section className="container about-tiles">
        <div className="about-tiles__grid">
          <img className="tile t1" src={about1} alt="About 1" />
          <img className="tile t2" src={about2} alt="About 2" />
          <img className="tile t3" src={about3} alt="About 3" />
        </div>

        <article className="about-tiles__text">
          <h2 className="section-heading">About</h2>
          <p className="muted">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>
          <a href="#" className="btn btn--white">Read More →</a>
        </article>
      </section>

      {/* MAIN FOCUS */}
      <section className="container focus-v2">
        <h2 className="section-heading">Main Focus/Mission Statement</h2>

        <div className="focus-v2__grid">
          <article className="focus-v2__item">
            <span className="focus-v2__num" aria-hidden>1</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed efficitur, lectus et facilisis placerat.
            </p>
          </article>

          <article className="focus-v2__item">
            <span className="focus-v2__num" aria-hidden>2</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed efficitur, lectus et facilisis placerat, magna mauris
              porttitor tortor, a auctor est felis ut nisl.
            </p>
          </article>
        </div>
      </section>

      {/* OUR PROJECTS */}
      <section className="container projects-v3">
        <h2 className="section-heading">Our Projects</h2>

        <div className="projects-v3__grid">
          {/* верхний ряд: 2 равные */}
          <article className="proj a">
            <img src={projects01} alt="Sample project cover" />
            <div className="overlay">
              <h3>Sample<br />Project</h3>
              <a href="#" className="ghost">VIEW MORE →</a>
            </div>
          </article>

          <article className="proj b">
            <img src={projects02} alt="Project 2" />
          </article>

          {/* нижний ряд: 3 мини */}
          <article className="proj c"><img src={projects03} alt="Project 3" /></article>
          <article className="proj d"><img src={projects04} alt="Project 4" /></article>
          <article className="proj e"><img src={projects05} alt="Project 5" /></article>
        </div>

        <div className="projects-v3__actions">
          <a href="/projects" className="btn btn--cta">All Projects →</a>
        </div>
      </section>

      {/* CONTACT — полный блок формы прямо на главной */}
      <section className="container contact">
        <h2 className="section-heading">Contact Us</h2>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={onSubmitHome}>
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

            <button className="btn btn--cta" type="submit">Send Email →</button>
            {sentHome && <p role="status" aria-live="polite">Thank you! We’ll be in touch.</p>}
          </form>

          <figure className="contact-media">
            <img className="contact-photo" src={contactImg} alt="Contact" />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
