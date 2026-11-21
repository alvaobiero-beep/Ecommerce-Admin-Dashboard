import { useState, useEffect } from 'react'
import {
  Chart as ChartJS } from 'chart.js/auto'
import { Bar, Doughnut, Line, Pie , Radar} from 'react-chartjs-2'
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
        < Radar
          data={{
            labels: products.map((product) => product.category),
            datasets: [
              {
              label: 'Stock recent updates',
                data: products.map((product) => (product.stock)),

                backgroundColor:[
                  " #10eb609d",
                  " #5f1465"
                  
                ],
          // line
          borderColor: "#b4e818",
          borderWidth: 3,

          // dots
          pointBackgroundColor: "#ffffff",
          pointBorderColor: "#0e08b7",
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 9,
        
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