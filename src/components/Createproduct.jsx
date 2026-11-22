import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Createproduct() {
  // 1. One state for each input
  const [sku, setSku] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')

  const navigate = useNavigate()

  // 2. Runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault() // stops the page from reloading

    // 3. Put the data together (keys match your table: sku, name, image...)
    const newProduct = {
      sku: sku,
      name: name,
      image: image,
      category: category,
      price: Number(price),  // convert text to number
      stock: Number(stock),
    }

    // 4. Send it to the API
    fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then(() => {
        alert('Product added!')
        navigate('/') // go back to the table page
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className="create-product">
      <h1>Add Products</h1>

      <form className="product-form" onSubmit={handleSubmit}>
        <input
          placeholder="SKU (e.g. ACC-005)"
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

        <button type="submit">Add Product +</button>
        <Link to="/" className="back-link"> Exit</Link>
      </form>
    </div>
  )
}

export default Createproduct