import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import InventoryStats from '../components/InventoryStats'
import InventoryTable from '../components/InventoryTable'


const Dashboard = (props) => {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        //get all the notes from the server
        axios.get("http://localhost:8000/api/products", {withCredentials: true})
        .then(response => {
            console.log(response.data)
            setProducts(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[]);
return(
    <>
    <body>

    <header>{<Header />}</header>
    <div>{<Navbar />}</div>
    <div>{<InventoryStats products = {products} setProducts={setProducts} />}</div>
    <div>{<InventoryTable products = {products} setProducts={setProducts} />}</div>
    </body>
    </>
)
}

export default Dashboard