import React, { useState, useMemo } from "react";
import "./Home.css";

const products = [
  { name: "Archline High-Waist Jean", color: "Stone Blue", price: 129, tone: "cool", category: "High waist", image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=600&fit=crop" },
  { name: "Studio Straight Leg Jean", color: "Indigo Wash", price: 118, tone: "deep", category: "Straight-leg", image: "https://images.unsplash.com/photo-1541099716352-8e5fb908301b?w=500&h=600&fit=crop" },
  { name: "Vintage Wide-Leg Jean", color: "Soft Faded", price: 139, tone: "light", category: "Wide-leg", image: "https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=500&h=600&fit=crop" },
  { name: "Tailored Flare Jean", color: "Midnight Ink", price: 148, tone: "dark", category: "Flared", image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=600&fit=crop" },
  { name: "Utility Mid-Rise Jean", color: "Clay Wash", price: 119, tone: "warm", category: "Mid waist", image: "https://images.unsplash.com/photo-1595777707802-cb2c2a7b8da0?w=500&h=600&fit=crop" },
  { name: "Coastal Slim Jean", color: "Salted Grey", price: 112, tone: "grey", category: "Skinny", image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=600&fit=crop" },
  { name: "Harbor Barrel Jean", color: "Ocean Blue", price: 134, tone: "blue", category: "Wide-leg", image: "https://images.unsplash.com/photo-1475217869307-2c5889cf516e?w=500&h=600&fit=crop" },
  { name: "Low-Rise Taper Jean", color: "Rinse Black", price: 124, tone: "black", category: "Straight-leg", image: "https://images.unsplash.com/photo-1541099716352-8e5fb908301b?w=500&h=600&fit=crop" },
];

const categories = ["View all", "High waist", "Mid waist", "Wide-leg", "Straight-leg", "Flared", "Skinny"];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("View all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filteredAndSortedProducts = useMemo(() => {
    let result = products;

    // Filter by category
    if (selectedCategory !== "View all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.color.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    if (sortBy === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <main className="shop">
      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Premium Denim Collection</h1>
          <p>Discover our curated selection of premium jeans crafted for style and comfort</p>
          <button className="hero-cta">Explore Now</button>
        </div>
        <div className="hero-background" />
      </section>

      {/* Shop Header */}
      <section className="shop-header">
        <div>
          <p className="shop-title">T-Shirt Edit</p>
          <p className="shop-subtitle">
            {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? "item" : "items"} found
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="search-filter-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by name or color..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery("")}>
              ✕
            </button>
          )}
        </div>

        <div className="sort-controls">
          <label htmlFor="sort-select">Sort by:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>
      </section>

      {/* Category Filters */}
      <section className="shop-categories">
        {categories.map((item) => (
          <button
            key={item}
            className={selectedCategory === item ? "active" : ""}
            type="button"
            onClick={() => setSelectedCategory(item)}
          >
            {item}
          </button>
        ))}
      </section>

      {/* Product Grid */}
      <section className="shop-grid">
        {filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map((product) => (
            <article key={product.name} className="shop-card">
              <div className="shop-image-wrapper">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="shop-image"
                />
                <div className={`shop-image-overlay tone-${product.tone}`} />
              </div>
              <div className="shop-meta">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.color}</p>
                </div>
                <span className="shop-price">${product.price}</span>
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </article>
          ))
        ) : (
          <div className="no-products">
            <p>No products found matching your criteria.</p>
            <button onClick={() => { setSearchQuery(""); setSelectedCategory("View all"); }} className="reset-btn">
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
