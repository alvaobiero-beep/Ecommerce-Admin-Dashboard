import { useState, useEffect } from 'react'
import {
  Chart as ChartJS } from 'chart.js/auto'
import { Bar, Line, Pie } from 'react-chartjs-2'
import { Link } from 'react-router-dom'


function Overview() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((res) => {
        if (!res.ok) throw new Error('Request failed: ' + res.status)
        return res.json()
      })
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <div>
        <Bar
          data={{
            labels: products.map((product) => product.category),
            datasets: [
              {
                label: 'products category',
                data: products.map((product) => (product.stock)),
              },
              {
                label: 'products category',
                data: products.map((product) => (product.stock)),
              },
            ],
          }}
        />
      </div>
      <Link to={'/'}> Home</Link>

    </>
  )
}

export default Overview