import React from 'react'
import './landing.css'
import logo from '../assets/hero.png'
import { NavLink } from 'react-router-dom'

const items = [
  {label : 'home ', path : '/' , variant : 'green' } ,
  { label: 'Dashboard', path : '/dashboard' ,variant: 'dark' },
  { label: 'Products', path : '/products' ,variant: 'green' },
  
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <header className='sidebar-header'>
      <h2 >E-Commerce Admin</h2>
      </header>

       <img src={logo} alt="logo" className="sidebar-logo" />
      <h4 className="sidebar-title">
        GROUP 3 PROJECT <br /> DASHBOARD
      </h4>


       <nav className="sidebar-nav">
        {items.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-btn ${item.variant} ${isActive ? 'active' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      
    </aside>
  );
}

export default Sidebar