import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {useState, useEffect } from 'react'
import axios from 'axios'

const OneProduct = () => {
  //grab the url variable
    const {id} = useParams();
    const navigate = useNavigate();

    const [thisProduct, setThisProduct] = useState(null)

useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
    .then(response => {
        console.log(response.data)
        setThisProduct(response.data)
    })
    .catch(error => {
        console.log(error)
    })
},[id])

    return (
    <div>
    {thisProduct ? (
        <>
            <div>
                <h1>{thisProduct.name}</h1>
                <img src={thisProduct.image} alt="where did you go" />
                <h2>{thisProduct.catagoy}</h2>
                <h2>{thisProduct.price}</h2>
                <h2>{thisProduct.quantity}</h2>

            </div>
            <div>
                </div>
        </>
        ): ("This Product is not shown in Inventory...")
    }
    <button onClick={() => navigate('/dashboard')}>Home</button>
    </div>
    )
}

export default OneProduct