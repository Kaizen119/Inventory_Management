import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import InventoryStats from '../components/InventoryStats'
import InventoryTable from '../components/InventoryTable'

const Dashboard = (props) => {
return(
    <>
    <header>{<Header />}</header>
    <div>{<Navbar />}</div>
    <div>{<InventoryStats />}</div>
    <div>{<InventoryTable />}</div>

    </>
)
}

export default Dashboard