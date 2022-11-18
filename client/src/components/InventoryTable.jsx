import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import imgStyle from "./main.module.css"


const InventoryTable = (props) => {

    const navigate = useNavigate()
    const {products, setProducts} = props
    //trigger when the component has finished loading
    // useEffect(() => {
        //get all the notes from the server
    //     axios.get("http://localhost:8000/api/products")
    //     .then(response => {
    //         console.log(response.data)
    //         setProducts(response.data)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // },[]);


     //Delete
const deleteProduct = (deleteId,) => {
    if(window.confirm("Are you sure you want to remove from your inventory?")){
    axios.delete(`http://localhost:8000/api/products/${deleteId}`)
    .then(response => {
        console.log("Delete Success", response.data)

        // remove from the DOM after a successful delete
        setProducts(products.filter((thisProduct) => thisProduct._id !== deleteId)) 
    })
    .catch(err => console.log(err))
    }
}
return (
    <>
    <h4>Inventory Items</h4>
    <table>
        <thead>
            <tr>
                <td>Name:</td>
                <td>Image:</td>
                <td>Catagory:</td>
                <td>Price:</td>
                <td>Quantity:</td>
                <td>Action:</td>
            </tr>
        </thead>
        <tbody>
        {
            products.map((oneProduct) => {
                return(
                    <tr key ={oneProduct._id}>
                        <td>{oneProduct.name}</td>
                        <td><img src={oneProduct.image} alt="item pic" className={imgStyle.img}></img></td>
                        <td>{oneProduct.catagory}</td>
                        <td>{oneProduct.price}</td>
                        <td>{oneProduct.quantity}</td>
                        <td>
                        <button onClick={() => navigate(`/oneProduct/${oneProduct._id}`)}>View</button>
                            <button onClick={() => navigate(`/updateProduct/${oneProduct._id}`)}>Update</button>
                            <button onClick={() => deleteProduct(oneProduct._id)}>Delete</button>
                        </td>
                    </tr>
                )
            })
        }
        </tbody>
    </table>
    </>
)
}

export default InventoryTable