import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../signin/Auth.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Sign up:", formData);
    // Handle sign up logic
  };

  return (
    <main className="auth">
      <section className="auth-card">
        <div className="auth-header">
          <p className="eyebrow">Join Our Community</p>
          <h1>Create Your Account</h1>
          <p className="lead">
            Join thousands of discerning customers who enjoy premium products, 
            exclusive deals, and personalized service.
          </p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
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
            Password
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a strong password" 
              required
            />
          </label>
          <label>
            Confirm Password
            <input 
              type="password" 
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password" 
              required
            />
          </label>
          <label className="auth-check">
            <input 
              type="checkbox" 
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            <span>Subscribe to our newsletter for exclusive offers and updates</span>
          </label>
          <button className="btn btn-primary" type="submit">
            Create Account
          </button>
        </form>
        <p className="auth-footnote">
          Already have an account? <Link to="/signin">Sign in here</Link>
        </p>
      </section>
      <aside className="auth-aside">
        <div>
          <h2>Why Join Us?</h2>
          <ul>
            <li>✓ Exclusive member-only sales</li>
            <li>✓ Early access to new arrivals</li>
            <li>✓ Free standard shipping</li>
            <li>✓ Easy order tracking</li>
            <li>✓ Dedicated customer support</li>
          </ul>
        </div>
      </aside>
    </main>
  );
};

export default SignUp;
