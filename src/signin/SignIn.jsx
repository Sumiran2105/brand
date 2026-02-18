import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in:", { email, password });
    // Handle sign in logic
  };

  return (
    <main className="auth">
      <section className="auth-card">
        <div className="auth-header">
          <p className="eyebrow">Welcome Back</p>
          <h1>Sign In to Your Account</h1>
          <p className="lead">
            Access your orders, track shipments, manage preferences, and enjoy exclusive member benefits.
          </p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email Address
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com" 
              required
            />
          </label>
          <label>
            Password
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password" 
              required
            />
          </label>
          <div className="auth-options">
            <label className="auth-check">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#forgot" className="forgot-link">Forgot password?</a>
          </div>
          <button className="btn btn-primary" type="submit">
            Sign In
          </button>
        </form>
        <p className="auth-footnote">
          Don't have an account? <Link to="/signup">Create one now</Link>
        </p>
      </section>
      <aside className="auth-aside">
        <div>
          <h2>Member Benefits</h2>
          <ul>
            <li>✓ Exclusive member discounts</li>
            <li>✓ Early access to new collections</li>
            <li>✓ Free shipping on orders</li>
            <li>✓ Priority customer support</li>
            <li>✓ Personalized recommendations</li>
          </ul>
        </div>
      </aside>
    </main>
  );
};

export default SignIn;
