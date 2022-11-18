import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import css from '../components/main.module.css'

const InventoryStats = (props) => {

  const navigate = useNavigate()

  return (
    <div>
        <h4>Inventory Stats</h4>
          <div>
            <p>Total Products :{props.products.length}</p>
          </div>
        <div>
          <p>Total Inventory Value: {props.products.reduce((sum,product) => {return sum + (product['price'] * product['quantity'])},0)}</p>
        </div>
        <div>
          <p>Out of Stock: {props.products.filter(product => product['quantity'] <= 0).length}</p>
        </div>
        <br/>
    </div>
  )
}

export default InventoryStats