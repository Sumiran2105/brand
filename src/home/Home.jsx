import React from "react";
import "./Home.css";

const products = [
  { name: "Archline High-Waist Jean", color: "Stone Blue", price: "$129", tone: "cool" },
  { name: "Studio Straight Leg Jean", color: "Indigo Wash", price: "$118", tone: "deep" },
  { name: "Vintage Wide-Leg Jean", color: "Soft Faded", price: "$139", tone: "light" },
  { name: "Tailored Flare Jean", color: "Midnight Ink", price: "$148", tone: "dark" },
  { name: "Utility Mid-Rise Jean", color: "Clay Wash", price: "$119", tone: "warm" },
  { name: "Coastal Slim Jean", color: "Salted Grey", price: "$112", tone: "grey" },
  { name: "Harbor Barrel Jean", color: "Ocean Blue", price: "$134", tone: "blue" },
  { name: "Low-Rise Taper Jean", color: "Rinse Black", price: "$124", tone: "black" },
];

const Home = () => {
  return (
    <main className="shop">
      <section className="shop-header">
        <p className="shop-title">T-Shirt Edit</p>
        <div className="shop-controls">
          <span>View</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span className="shop-filters">Filters (1)</span>
        </div>
      </section>

      <section className="shop-categories">
        {["View all", "High waist", "Mid waist", "Wide-leg", "Straight-leg", "Flared", "Skinny"].map(
          (item) => (
            <button key={item} className={item === "View all" ? "active" : ""} type="button">
              {item}
            </button>
          )
        )}
      </section>

      <section className="shop-grid">
        {products.map((product) => (
          <article key={product.name} className="shop-card">
            <div className={`shop-image tone-${product.tone}`} />
            <div className="shop-meta">
              <div>
                <h3>{product.name}</h3>
                <p>{product.color}</p>
              </div>
              <span>{product.price}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Home;
