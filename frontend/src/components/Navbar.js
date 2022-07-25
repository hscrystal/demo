import { Link } from "react-router-dom"
import React from 'react'
import "./styles.css"

export default function Navbar() {
  return (
    <nav className='nav'>
      <Link to="/"> 
        Products Site
      </Link>
        <ul>
          <li>
            <Link to="/ProductsList">Products List</Link>
          </li>
          <li>
            <Link to="/CreateProducts">Create Products</Link>
          </li>
        </ul>
    </nav>
  )
}
