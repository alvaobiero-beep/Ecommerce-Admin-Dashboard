import { Link } from 'react-router-dom';

function ProductTable({ products }) {
  return (
    <div className="product-table-container">
      <h2>Products Display</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>SKU</th>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.sku}</td>

              <td className="product-info">
                <Link
                  to={`/products/${product.id}`}
                  className="product-link"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />

                  <span>{product.name}</span>
                </Link>
              </td>

              <td>{product.category}</td>
              <td>
                KSh {Number(product.price).toLocaleString()}
              </td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {products.length === 0 && (
        <p className="no-products">No products found.</p>
      )}
    </div>
  );
}

export default ProductTable;

