import { Link, useParams } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

function ProductDetailsPage() {
  const { id } = useParams();
  const { products, loading, error } = useProducts();

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>Error loading product: {error}</p>;
  }

  const product = products.find(
    (item) => Number(item.id) === Number(id)
  );

  if (!product) {
    return (
      <div className="product-details-page">
        <h2>Product not found</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <Link to="/products" className="back-to-products">
        ← Back to Products
      </Link>

      <div className="product-details-card">
        <img
          src={product.image}
          alt={product.name}
          className="product-details-image"
        />

        <div className="product-details-info">
          <h1>{product.name}</h1>

          <p><strong>Product ID:</strong> {product.id}</p>
          <p><strong>SKU:</strong> {product.sku}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p>
            <strong>Price:</strong> KSh{' '}
            {Number(product.price).toLocaleString()}
          </p>
          <p><strong>Stock:</strong> {product.stock} units</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
