import React from "react";
import "./About.css";

const About = () => {
  return (
    <main className="about">
      <section className="about-hero">
        <p className="eyebrow">Our story</p>
        <h1>Designing clothing that feels personal, precise, and lived in.</h1>
        <p className="lead">
          Thread & Needle is a small-batch studio founded on the belief that
          modern wardrobes deserve both restraint and romance. We blend old-world
          tailoring with contemporary ease to create pieces that hold their
          shape and soften with time.
        </p>
      </section>

      <section className="about-grid">
        <div className="about-card">
          <h3>Atelier-first</h3>
          <p>
            Every garment begins with a drape test in our coastal studio. We
            prototype, wear, and refine before anything reaches production.
          </p>
        </div>
        <div className="about-card">
          <h3>Materials with memory</h3>
          <p>
            We partner with mills that prioritize natural fibers, traceable
            dyes, and enduring textures that age beautifully.
          </p>
        </div>
        <div className="about-card">
          <h3>Built to last</h3>
          <p>
            Our repair program and fit updates keep pieces in circulation longer
            and reduce wardrobe waste.
          </p>
        </div>
      </section>

      <section className="about-highlight">
        <div>
          <h2>Meet the atelier team.</h2>
          <p>
            A collective of pattern makers, fabric scouts, and stylists working
            across three workshops. We celebrate slow fashion and personal
            connection.
          </p>
        </div>
        <div className="about-stats">
          <div>
            <h3>18</h3>
            <p>Artisans on staff</p>
          </div>
          <div>
            <h3>2015</h3>
            <p>Year founded</p>
          </div>
          <div>
            <h3>92%</h3>
            <p>Materials traceable</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
