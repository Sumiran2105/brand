import React from "react";
import "./About.css";

const About = () => {
  return (
    <main className="about">
      <section className="about-hero">
        <p className="eyebrow">About Us</p>
        <h1 >Crafting Excellence in Every Stitch</h1>
        <p className="lead">
          Our brand stands at the intersection of timeless elegance and modern sophistication. 
          Since our founding, we've been dedicated to creating premium products that celebrate 
          individuality, quality, and enduring style. Every piece we create tells a story of 
          passion, precision, and purpose—designed for those who appreciate the finer things.
        </p>
      </section>

      <section className="about-mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            We believe that true luxury lies in the details. Our mission is to design and 
            deliver exceptional products that exceed expectations, combining traditional 
            craftsmanship with contemporary innovation. We're committed to sustainability, 
            ethical practices, and creating pieces that stand the test of time.
          </p>
        </div>
      </section>

      <section className="about-grid">
        <div className="about-card">
          <div className="card-icon">✨</div>
          <h3>Superior Craftsmanship</h3>
          <p>
            Each product undergoes meticulous quality control, ensuring perfection in every detail. 
            Our artisans bring decades of experience to every creation.
          </p>
        </div>
        <div className="about-card">
          <div className="card-icon">🌿</div>
          <h3>Sustainable Materials</h3>
          <p>
            We partner with responsible suppliers who share our commitment to environmental 
            stewardship and ethical manufacturing practices.
          </p>
        </div>
        <div className="about-card">
          <div className="card-icon">♦</div>
          <h3>Timeless Design</h3>
          <p>
            Our designs transcend trends, creating pieces that remain relevant and beautiful 
            across generations.
          </p>
        </div>
      </section>

      <section className="about-highlight">
        <div className="highlight-text">
          <h2>By The Numbers</h2>
          <p>
            Our growth is a testament to our commitment to excellence. With a loyal community 
            of discerning customers worldwide, we continue to set new standards in our industry.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <h3>25+</h3>
            <p>Years of Excellence</p>
          </div>
          <div className="stat-card">
            <h3>50K+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Quality Assured</p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h4>Integrity</h4>
            <p>We stand behind every product with complete transparency and honesty.</p>
          </div>
          <div className="value-item">
            <h4>Excellence</h4>
            <p>We pursue perfection in every aspect of our craft and customer service.</p>
          </div>
          <div className="value-item">
            <h4>Innovation</h4>
            <p>We constantly evolve, blending tradition with forward-thinking design.</p>
          </div>
          <div className="value-item">
            <h4>Community</h4>
            <p>We celebrate our customers and artisans as vital parts of our journey.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
