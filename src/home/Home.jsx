import React, { useState, useMemo } from "react";
import "./Home.css";

const products = [
  { name: "Archline High-Waist Jean", color: "Stone Blue", price: 149, tone: "cool", category: "High waist", image: "https://cdn.mos.cms.futurecdn.net/whowhatwear/posts/310254/high-waisted-jeans-trend-310254-1700235876624-main-768-80.jpg" },
  { name: "Studio Straight Leg Jean", color: "Indigo Wash", price: 149, tone: "deep", category: "Straight-leg", image: "https://media-ea.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000016309609-Black-BLACK-1000016309609_01-2100.jpg" },
  { name: "Vintage Wide-Leg Jean", color: "Soft Faded", price: 149, tone: "light", category: "Wide-leg", image: "https://tse2.mm.bing.net/th/id/OIP.C0Dm0mj-oUy29GlZxOw6_gHaJa?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Tailored Flare Jean", color: "Midnight Ink", price: 149, tone: "dark", category: "Flared", image: "https://cdn.cliqueinc.com/posts/285013/flare-jean-outfits-285013-1638306838029-main.700x0c.jpg" },
  { name: "Utility Mid-Rise Jean", color: "Clay Wash", price: 149, tone: "warm", category: "Mid waist", image: "https://image.hm.com/assets/hm/3d/47/3d4700e96e0a6c7f0c67600218c6e08fe431fbbe.jpg?imwidth=2160" },
  { name: "Coastal Slim Jean", color: "Salted Grey", price: 149, tone: "grey", category: "Skinny", image: "https://justjeans.jgl.com.au/JJ/aurora/images/products/tiny/128478_denim_t.jpg" },
  { name: "Harbor Barrel Jean", color: "Ocean Blue", price: 149, tone: "blue", category: "Wide-leg", image: "https://image.hm.com/assets/hm/56/97/5697d1b97b1230ce0fc186a546bb5fce05d3c1dc.jpg?imwidth=2160" },
  { name: "Low-Rise Taper Jean", color: "Rinse Black", price: 149, tone: "black", category: "Straight-leg", image: "https://tse4.mm.bing.net/th/id/OIP._ex5DHM-1cFW-cipjJym-wHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3" },
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
          <h1 >Premium Denim Collection</h1>
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
