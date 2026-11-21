import { useState } from 'react';
import ProductTable from '../components/ProductTable';
import useProducts from '../hooks/useProducts';
import '../Products.css';

function ProductsPage() {
  const { products, loading, error } = useProducts();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const totalProducts = products.length;

  const totalCategories = [
    ...new Set(products.map((product) => product.category))
  ].length;

  const totalStock = products.reduce(
    (total, product) => total + Number(product.stock),
    0
  );

  const inventoryValue = products.reduce(
    (total, product) =>
      total + Number(product.price) * Number(product.stock),
    0
  );

  const categories = [
    ...new Set(products.map((product) => product.category))
  ];

  const filteredProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.sku.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === 'All' ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error loading products: {error}</p>;
  }

  return (
    <div className="products-page">

      <header className="products-header">
        <div>
          <h1>Products Overview</h1>
          <p>Manage your store products and inventory.</p>
        </div>

        <button type="button">Add Product +</button>
      </header>

      {/* Analytics section */}
      <section className="analytics-section">
        <div className="summary-cards">

          <div className="summary-card summary-card--total-products">
            <h3>Total Products</h3>
            <p>{totalProducts}</p>
          </div>

          <div className="summary-card summary-card--categories">
            <h3>Categories</h3>
            <p>{totalCategories}</p>
          </div>

          <div className="summary-card summary-card--stock">
            <h3>Stock Update</h3>
            <p>{totalStock} units</p>
          </div>

          <div className="summary-card summary-card--inventory-value">
            <h3>Inventory Value</h3>
            <p>KSh {inventoryValue.toLocaleString()}</p>
          </div>

        </div>
      </section>

      {/* Search and filter */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by product, SKU or category..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="All">All Categories</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Products table */}
      <ProductTable products={filteredProducts} />

    </div>
  );
}

export default ProductsPage;
