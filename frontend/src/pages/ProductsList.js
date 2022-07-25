import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react"

export default function ListItem() {
  const baseURL = "http://localhost/api/products"
  const [products, setProducts] = useState(null)

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data)
    })
  }, [])

  if (!products) return null

  return (
    <div className='productslist'> 
      <h1>Product List ({products.length})</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Price</th>
            <th>CreatedDate</th>
            <th>ModifiedDate</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(element => {
              return (
                <tr key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.slug}</td>
                  <td>{element.price}</td>
                  <td>{element.created_at}</td>
                  <td>{element.updated_at}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
