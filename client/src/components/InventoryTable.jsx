import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import css from '../components/main.module.css'


const InventoryTable = (props) => {

    const navigate = useNavigate()
    const {products, setProducts} = props

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
    <div>
    <table className={css.table}>
        <thead className={css.table}>
            <tr className={css.table}>
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
                        <td><img src={oneProduct.image} alt="item pic" className={css.img}></img></td>
                        <td>{oneProduct.catagory}</td>
                        <td>{oneProduct.price}</td>
                        <td>{oneProduct.quantity}</td>
                        <td>
                        {/* <img src="/imgs/spyglass.png" width="20px" alt=""/>|
                        <img src="/imgs/eraser.png" width="20px" alt=""/>|
                        <img src="/imgs/trashcan.png"  width="20px" alt=""/> */}
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
    </div>
    </>
)
}

export default InventoryTable