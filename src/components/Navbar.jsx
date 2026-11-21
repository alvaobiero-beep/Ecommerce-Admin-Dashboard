import React from 'react'
import './landing.css'
import icon from '../assets/group3img.jpeg'

 

const items = [
  {label : 'home ', path : '/' , variant : 'green' } ,
  { label: 'Dashboard', path : '/dashboard' ,variant: 'dark' },
  { label: 'Products', path : '/products' ,variant: 'green' },
  
]

function Navbar() {
  return (
    <aside className="sidebar">
 dashboard-page
      <header className='sidebar-header'>
      <h2 >E-Commerce Admin</h2>
      </header>

      <img src={icon} alt="logo" className="sidebar-logo" />

      <h4 className="sidebar-title">
        GROUP 3 PROJECT <br /> DASHBOARD
      </h4>


       
      
    </aside>
  );
}

export default Navbar