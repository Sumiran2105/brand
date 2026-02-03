import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <main className="contact">
      <section className="contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>Let’s design something together.</h1>
        <p className="lead">
          Reach out for fittings, styling, or custom tailoring. We respond within
          one business day.
        </p>
      </section>

      <section className="contact-grid">
        <form className="contact-form">
          <label>
            Full name
            <input type="text" placeholder="Avery Lane" />
          </label>
          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            What can we help with?
            <select>
              <option>Fitting appointment</option>
              <option>Custom tailoring</option>
              <option>Order support</option>
              <option>Wholesale inquiry</option>
            </select>
          </label>
          <label>
            Message
            <textarea rows="4" placeholder="Tell us about the pieces you love." />
          </label>
          <button className="btn btn-primary" type="submit">
            Send request
          </button>
        </form>

        <div className="contact-info">
          <div>
            <h3>Studio</h3>
            <p>214 Harborline Ave, Suite 3</p>
            <p>Santa Marina, CA</p>
          </div>
          <div>
            <h3>Hours</h3>
            <p>Tue - Sat, 10am - 6pm</p>
            <p>Private fittings by request</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>studio@threadandneedle.com</p>
            <p>+1 (415) 555-0182</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
