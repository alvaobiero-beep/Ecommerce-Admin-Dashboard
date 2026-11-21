import { useState, useEffect } from 'react'
import {
  Chart as ChartJS } from 'chart.js/auto'
import { Bar, Line, Pie ,Doughnut, Radar } from 'react-chartjs-2'
import { Link } from 'react-router-dom'


function Analytics() {
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
        <Line
          data={{
            labels: products.map((product) => product.name),
            datasets: [
              {
                label: 'Products prices',
                data: products.map((product) => (product.price)),
                backgroundColor:[

                  "#30cf2a",
                  "#f31baf",

                ]
              },

              
            ],
          }}
        />
      </div>
      <Link to={'/'}> Home</Link> 


    </>
  )
}

export default Analytics