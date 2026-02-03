import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const SignIn = () => {
  return (
    <main className="auth">
      <section className="auth-card">
        <div className="auth-header">
          <p className="eyebrow">Welcome back</p>
          <h1>Sign in to your wardrobe.</h1>
          <p className="lead">
            Access saved fits, order history, and personal styling notes.
          </p>
        </div>
        <form className="auth-form">
          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button className="btn btn-primary" type="submit">
            Sign in
          </button>
          <button className="btn btn-ghost" type="button">
            Continue with studio ID
          </button>
        </form>
        <p className="auth-footnote">
          New here? <Link to="/signup">Create an account</Link>
        </p>
      </section>
      <aside className="auth-aside">
        <div>
          <h2>Member benefits</h2>
          <ul>
            <li>Early access to limited drops</li>
            <li>Personalized fit recommendations</li>
            <li>Complimentary alterations</li>
          </ul>
        </div>
      </aside>
    </main>
  );
};

export default SignIn;
