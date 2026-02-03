import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">New season edit</p>
          <h1>Clothing for the weather between who you are and who you’re becoming.</h1>
          <p className="lead">
            Thread & Needle is a modern atelier for everyday tailoring. We build
            elevated essentials with soft structure, grounded hues, and
            responsible materials.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Shop the capsule</button>
            <button className="btn btn-ghost">Book a fitting</button>
          </div>
          <div className="hero-meta">
            <div>
              <span>48h</span>
              <p>Studio delivery</p>
            </div>
            <div>
              <span>12</span>
              <p>Colors curated</p>
            </div>
            <div>
              <span>2k+</span>
              <p>Members styled</p>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <p>Capsule 09</p>
            <h3>Stone, Olive, Ink</h3>
            <span>Textures that move with you</span>
          </div>
          <div className="hero-shape hero-shape-one" />
          <div className="hero-shape hero-shape-two" />
          <div className="hero-shape hero-shape-three" />
        </div>
      </section>

      <section className="collection">
        <div className="section-head">
          <div>
            <p className="eyebrow">Capsule collection</p>
            <h2>Soft tailoring, engineered for day to night.</h2>
          </div>
          <button className="btn btn-ghost">View all pieces</button>
        </div>
        <div className="product-grid">
          {[
            { name: "Stormfield Trench", tone: "Sandstone", price: "$248" },
            { name: "Marina Knit Polo", tone: "Deep Sea", price: "$128" },
            { name: "Sage Utility Pant", tone: "Fern", price: "$168" },
            { name: "Silt Leather Tote", tone: "Iron", price: "$198" },
          ].map((item) => (
            <article key={item.name} className="product-card">
              <div className="product-swatch" />
              <div className="product-info">
                <h3>{item.name}</h3>
                <p>{item.tone}</p>
              </div>
              <span className="price">{item.price}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="lookbook">
        <div className="section-head">
          <div>
            <p className="eyebrow">Studio lookbook</p>
            <h2>Layering stories, styled in motion.</h2>
          </div>
        </div>
        <div className="lookbook-row">
          {[
            "Morning commute essentials",
            "Elevated weekend uniform",
            "After hours in soft tailoring",
          ].map((title) => (
            <div key={title} className="lookbook-card">
              <div className="lookbook-image" />
              <div>
                <h3>{title}</h3>
                <p>Explore silhouettes, texture, and tonal color.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="values">
        <div>
          <p className="eyebrow">Our practice</p>
          <h2>Precision crafted, with integrity.</h2>
          <p className="lead">
            We work with family-owned mills, traceable fibers, and small-batch
            production to keep every stitch deliberate.
          </p>
        </div>
        <div className="value-grid">
          <div>
            <h3>64%</h3>
            <p>Lower water usage than conventional dyes.</p>
          </div>
          <div>
            <h3>3</h3>
            <p>Artisan workshops across the coast.</p>
          </div>
          <div>
            <h3>5</h3>
            <p>Years of free alterations and repairs.</p>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div>
          <h2>Join the wardrobe club.</h2>
          <p>
            Styling notes, early access drops, and personal fittings — delivered
            once a week.
          </p>
        </div>
        <form className="newsletter-form">
          <input type="email" placeholder="you@example.com" />
          <button className="btn btn-primary" type="submit">
            Subscribe
          </button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <h3>Thread & Needle</h3>
          <p>Atelier-crafted essentials for modern wardrobes.</p>
        </div>
        <div className="footer-links">
          <span>Studio</span>
          <span>Craft</span>
          <span>Journal</span>
          <span>Support</span>
        </div>
        <p className="footer-note">© 2026 Thread & Needle Atelier</p>
      </footer>
    </main>
  );
};

export default Home;
