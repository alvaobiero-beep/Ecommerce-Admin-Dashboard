import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Editproduct() {
  const { id } = useParams() // gets the id from the URL (/edit/3)
  const navigate = useNavigate()

  // 1. One state for each input
  const [sku, setSku] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')

  // 2. Load the existing product and fill the form
  useEffect(() => {
    fetch('https://my-json-server-0oe4.onrender.com/products/' + id)
      .then((res) => res.json())
      .then((product) => {
        setSku(product.sku)
        setName(product.name)
        setImage(product.image)
        setCategory(product.category)
        setPrice(product.price)
        setStock(product.stock)
      })
      .catch((err) => console.error(err))
  }, [id])

  // 3. Save the changes
  const handleSubmit = (e) => {
    e.preventDefault()

    const updatedProduct = {
      sku: sku,
      name: name,
      image: image,
      category: category,
      price: Number(price),
      stock: Number(stock),
    }

    fetch('https://my-json-server-0oe4.onrender.com/products/' + id, {
      method: 'PUT', // PUT replaces the product with the new data
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Request failed: ' + res.status)
        return res.json()
      })
      .then(() => {
        alert('Product updated!')
        navigate('/')
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className="create-product">
      <h1>Edit Product</h1>

      <form className="product-form" onSubmit={handleSubmit}>
        <input
          placeholder="SKU"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
          required
        />

        <input
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>Select category</option>
          <option value="Accessories">Accessories</option>
          <option value="Footwear">Footwear</option>
          <option value="Beauty">Beauty</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Home">Home</option>
        </select>

        <div className="form-row">
          <input
            type="number"
            min="0"
            placeholder="Price (KSh)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <input
            type="number"
            min="0"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>

        <button type="submit">Save Changes</button>
        <Link to="/" className="back-link">Cancel</Link>
      </form>
    </div>
  )
}

export default Editproduct