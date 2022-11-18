import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../components/Header'
import InventoryStats from '../components/InventoryStats'
import InventoryTable from '../components/InventoryTable'
import css from '../components/main.module.css'


const Dashboard = (props) => {
    const [products,setProducts] = useState([]);
    const [userId, setUserId] = useState()


    useEffect(() => {
        //get all the notes from the server
        axios.get("http://localhost:8000/api/products")
        .then(response => {
            console.log(response.data)
            setProducts(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[]);


return(
    <div>
        <header>{<Header />}</header>
        <div>{<InventoryStats products = {products} setProducts={setProducts} />}</div>
        <div>{<InventoryTable products = {products} setProducts={setProducts} />}</div>
    </div>
)}
export default Dashboard;