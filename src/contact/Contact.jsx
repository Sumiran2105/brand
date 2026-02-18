import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="contact">
      <section className="contact-hero">
        <p className="eyebrow">Get in Touch</p>
        <h1>We'd love to hear from you.</h1>
        <p className="lead">
          Have questions about our products or services? Our dedicated team is here to help.
          We aim to respond to all inquiries within 24 hours.
        </p>
      </section>

      <section className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith" 
              required
            />
          </label>
          <label>
            Email Address
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com" 
              required
            />
          </label>
          <label>
            Subject
            <select name="subject" value={formData.subject} onChange={handleChange} required>
              <option value="">Select a subject</option>
              <option>General Inquiry</option>
              <option>Order Support</option>
              <option>Product Information</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Message
            <textarea 
              rows="5" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please share your message here..." 
              required
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <div className="info-block">
            <h3>📍 Address</h3>
            <p>123 Premium Street</p>
            <p>New York, NY 10001</p>
            <p>United States</p>
          </div>
          <div className="info-block">
            <h3>⏰ Business Hours</h3>
            <p>Monday - Friday: 9am - 6pm</p>
            <p>Saturday: 10am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="info-block">
            <h3>📞 Contact Info</h3>
            <p>Email: hello@brand.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Support Chat: Available 24/7</p>
          </div>
          <div className="info-block">
            <h3>🌐 Connect With Us</h3>
            <p>Instagram: @ourbrand</p>
            <p>Facebook: Our Brand</p>
            <p>LinkedIn: Our Brand Co.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
