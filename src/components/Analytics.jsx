import { useState, useEffect } from 'react'
import {
  Chart as ChartJS } from 'chart.js/auto'
import { Bar, Line, Pie ,Doughnut, Radar } from 'react-chartjs-2'
import { Link } from 'react-router-dom'


function Analytics() {
  const [products, setProducts] = useState([])

  function Analytics({ showBack = false }) {
  
  {showBack && <Link to="/" className="back-link">Home</Link>}
}

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((res) => {
        if (!res.ok) throw new Error('Request failed: ' + res.status)
        return res.json()
      })
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
  }, [])

  // one entry per product name (guards against repeats)
  const uniqueProducts = products.filter(
    (p, i, arr) => arr.findIndex((x) => x.name === p.name) === i
  )

  return (
    <>
      <div className="chart-box">
        <Line
          data={{
            labels: uniqueProducts.map((product) => product.name),
            datasets: [
              {
                label: 'Products prices',
                data: uniqueProducts.map((product) => product.price),

                // line + soft gradient fill
                borderColor: '#b4e818',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                backgroundColor: (ctx) => {
                  const { chart } = ctx
                  if (!chart.chartArea) return 'rgba(180,232,24,0.15)'
                  const g = chart.ctx.createLinearGradient(
                    0, chart.chartArea.top, 0, chart.chartArea.bottom
                  )
                  g.addColorStop(0, 'rgba(180,232,24,0.35)')
                  g.addColorStop(1, 'rgba(180,232,24,0)')
                  return g
                },

                // dots
                pointBackgroundColor: '#f31baf',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 7,
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
                callbacks: {
                  label: (c) => ' KSh ' + c.parsed.y.toLocaleString(),
                },
              },
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: '#c9d1cc', maxRotation: 45, autoSkip: false },
              },
              y: {
                beginAtZero: true,
                border: { display: false },
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: {
                  color: '#c9d1cc',
                  callback: (v) => v.toLocaleString(),
                },
              },
            },
          }}
        />
      </div>
    
    </>
  )
}

export default Analytics