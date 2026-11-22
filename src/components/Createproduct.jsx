import React from 'react'

function Createproduct() {




  return (
    <div >

        <div className='create-product'>
            <h1>Add Products</h1>
            <form className="product-form" >
                <h3>Add Product</h3>
                
                <input name="sku" placeholder="SKU (e.g. ACC-005)"   required />
                <input name="name" placeholder="Product name"  required />
                <input name="image" placeholder="Image URL"  />
                <br />

                <select name="category"  >
                    <option value="/"> Slect category of product</option>
                    <option value=" Accessories"> Slect category</option>
                    <option value="Footwear "> Slect category</option>
                    <option value="Beauty "> Slect category</option>
                    <option value="Clothing "> Slect category</option>
                    <option value="Electronics "> Slect category</option>
                    <option value="Home "> Slect category</option>

               </select>

      <div className="form-row">
        <input name="price" type="number" min="0" placeholder="Price (KSh)"  required />
        <input name="stock" type="number" min="0" placeholder="Stock" required />
      </div>
    
        
    
    </form>


            




        </div>




      
    </div>
  )
}

export default Createproduct
