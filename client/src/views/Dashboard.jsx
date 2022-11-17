import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import InventoryStats from '../components/InventoryStats'
import InventoryTable from '../components/InventoryTable'
import css from '../components/main.module.css'

const Dashboard = (props) => {
    const [id,setId] = useState('')
return(
    <body>
    <>
    <p>{id}</p>
    <header>{<Header />}</header>
    <div>{<Navbar />}</div>
    <div>{<InventoryStats />}</div>
    <div>{<InventoryTable />}</div>

    </>
    </body>
)
}

export default Dashboard