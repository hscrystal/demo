import React from 'react'
import axios from "axios"
import { useState } from "react"
import "../components/styles.css"

export default function CreateProducts() {
  const baseURL = "http://localhost/api/products"
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [slug,setSlug] = useState('')
  const [price,setPrice] = useState('')

  const inputName = (event) => {setName(event.target.value)}
  const inputDescription = (event) => {setDescription(event.target.value)}
  const inputSlug = (event) => {setSlug(event.target.value)}
  const inputPrice = (event) => {setPrice(event.target.value)}
  
  const addProduct = (event) => {
    event.preventDefault()
    const product = {
      name: name,
      description: description,
      slug: slug,
      price: Number(price)
    }
    setName('')
    setDescription('')
    setSlug('')
    setPrice(0)
    const config = {
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      }
    };
    axios.post(baseURL,product,config)
      .then(
        response => alert(JSON.stringify(response.data))
      )
      .catch(error => {
        console.log("Error::" ,error.response.data)
      })
  }

  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input type="text" onChange={inputName}/>
        </div>
        <div>
          <label>Description</label>
          <input type="text" onChange={inputDescription}/>
        </div>
        <div>
          <label>Slug</label>
          <input type="text" onChange={inputSlug}/>
        </div>
        <div>
          <label>Price</label>
          <input type="number" onChange={inputPrice}/>
        </div>
        <div>
          <button type="submit" onClick={addProduct}>Add</button>
        </div>
      </form>
    </div>
  )
}
