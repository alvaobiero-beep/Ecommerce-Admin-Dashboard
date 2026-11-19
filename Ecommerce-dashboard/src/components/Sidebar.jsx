import React from 'react'
import './landing.css'
import logo from '../assets/hero.png'
import icon from '../assets/group3img.jpeg'


const items = [
  { label: 'Management', variant: 'dark' },
  { label: 'Store', variant: 'green' },
  { label: 'Store managers', variant: 'green' },
  { label: 'Analytics', variant: 'dark' },
  { label: 'Updates', variant: 'green' },
]

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src={icon} alt="logo" className="sidebar-logo" />
      <h4 className="sidebar-title">
        GROUP 3 PROJECT <br /> DASHBOARD
      </h4>

      <nav className="sidebar-nav">
        {items.map((item) => (
          <button key={item.label} className={`sidebar-btn ${item.variant}`}>
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar