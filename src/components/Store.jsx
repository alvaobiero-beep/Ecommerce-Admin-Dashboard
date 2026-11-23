import React,{ useEffect,useState} from 'react'
import { Link } from 'react-router-dom'


function Store() {


    const[searchProduct, setSearchProduct]= useState("")

const[products ,setProducts ] = useState([])

    useEffect(()=>{
         fetch(' https://my-json-server-0oe4.onrender.com/products/')
      .then((res) => {
        if (!res.ok) throw new Error('Request failed: ' + res.status)
        return res.json()
      })
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))




    },[])
    const filtereddata =products.filter(
        (item)=>item.name.toLowerCase().includes(searchProduct.toLowerCase().trim())
    )




    const handleDelete = (id) => {
  // ask before deleting
  if (!window.confirm('Delete this product?')) return

  fetch(' https://my-json-server-0oe4.onrender.com/products/' + id, {
    method: 'DELETE',
  })
    .then((res) => {
      if (!res.ok) throw new Error('Request failed: ' + res.status)
      // remove it from the table without reloading
      setProducts(products.filter((product) => product.id !== id))
    })
    .catch((err) => console.error(err))
}


  return (
    
<>





 <div className="product-table-container"   id='products-store'>


    <div>
        
        <input type="text"  placeholder='Search for a product in the store'   
         value={searchProduct}   onChange={(e)=> setSearchProduct(e.target.value) }/><br />
        <button><Link to='/'>Exit</Link></button>
    </div>
      <h2>Store display</h2>
         <div className='add'><Link to= '/create' > Add +</Link> </div>

      

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
          {filtereddata.map((product) => (
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
              
              <td>
                <Link to={`/edit/${product.id}`} className="edit-link">Edit</Link>
                <button className="delete-btn" onClick={() => handleDelete(product.id)}>
                    Delete
                </button>
                </td>





            </tr>
          ))}
        </tbody>
      </table>

      {products.length === 0 && (   // ← change this
  <p className="no-products">No products found.</p>
      )}


      
    </div>






</>



  )
}

export default Store
