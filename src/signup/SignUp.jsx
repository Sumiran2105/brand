import React from "react";
import { Link } from "react-router-dom";
import "../signin/Auth.css";

const SignUp = () => {
  return (
    <main className="auth">
      <section className="auth-card">
        <div className="auth-header">
          <p className="eyebrow">Join the atelier</p>
          <h1>Create your studio account.</h1>
          <p className="lead">
            Store sizes, save looks, and book fittings in a few steps.
          </p>
        </div>
        <form className="auth-form">
          <label>
            Full name
            <input type="text" placeholder="Avery Lane" />
          </label>
          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Create a password" />
          </label>
          <label className="auth-check">
            <input type="checkbox" />
            <span>Send me styling notes and early access drops.</span>
          </label>
          <button className="btn btn-primary" type="submit">
            Create account
          </button>
          <button className="btn btn-ghost" type="button">
            Continue with studio ID
          </button>
        </form>
        <p className="auth-footnote">
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </section>
      <aside className="auth-aside">
        <div>
          <h2>What you get</h2>
          <ul>
            <li>Access to the members-only capsule</li>
            <li>Priority tailoring appointments</li>
            <li>Wardrobe refresh reminders</li>
          </ul>
        </div>
      </aside>
    </main>
  );
};

export default SignUp;
