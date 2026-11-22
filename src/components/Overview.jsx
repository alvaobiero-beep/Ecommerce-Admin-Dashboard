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

  // combine stock per category so each category appears only once
  const stockByCategory = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + product.stock
    return acc
  }, {})

  return (
    <>
      <div className="chart-box">
        <Bar
          data={{
            labels: Object.keys(stockByCategory),
            datasets: [
              {
                label: 'Stock recent updates',
                data: Object.values(stockByCategory),

                // one color per category
                backgroundColor: [
                  '#10eb609d',
                  '#5f1465',
                  '#b4e818aa',
                  '#3b9bffaa',
                  '#ff3b9baa',
                  '#ffb63baa',
                ],
                hoverBackgroundColor: '#b4e818',

                // bar outline
            
                borderWidth: 2,
                borderSkipped: false,
                maxBarThickness: 48,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: { color: '#c9d1cc', usePointStyle: true },
              },
              tooltip: {
                backgroundColor: '#0f1211',
                borderColor: '#343a36',
                borderWidth: 1,
                padding: 10,
                cornerRadius: 8,
              },
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: '#c9d1cc' },
              },
              y: {
                beginAtZero: true,
                border: { display: false },
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: { color: '#c9d1cc' },
              },
            },
          }}
        />
      </div>
      
    </>
  )
}

export default Overview