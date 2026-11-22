import { useState } from 'react';
import ProductTable from '../components/ProductTable';
import useProducts from '../hooks/useProducts';
import '../Products.css';
import { Link } from 'react-router-dom';
import Overview from '../components/Overview';
import Analytics from '../components/Analytics';
import icon from '../assets/group3img.jpeg'

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


          <img src="icon" alt="#" />
            <h3 className="sidebar-title"> 
              GROUP 3 PROJECT <br /> DASHBOARD
            </h3>
        
          <h1>Products Overview</h1>
          <h2> Manage store</h2>
          <Link to='/overview' > Category-analysis</Link>
          <Link to='/analytics'>Stock-analysis</Link>
        

        <button type="button">Add Product +</button>
        <input type="text" placeholder='Search for product ...'  value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
         />

      </header>

      {/* Analytics section */}
      <section className="analytics-section">
        <div className="summary-cards"> 

          <div className="summary-card summary-card--total-products" id='analytics-total'>
            <h3>Total Products</h3>
            <p>{totalProducts}</p>



            <h3>Amout of Revenue</h3>
            <p>KSh {inventoryValue.toLocaleString()}</p>
          
          </div>

          <div className="summary-card summary-card--categories" id='analytics'>
            <h3>Categories</h3>
            <Analytics/>



            <p>{totalCategories}</p> 

          </div>

          <div className="summary-card summary-card--stock" id='analytics'>
            <h3>Stock Update</h3>
               <Overview products={products} />
            
            <p>{totalStock} units</p>





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
