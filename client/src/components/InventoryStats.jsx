import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const InventoryStats = (props) => {

  const navigate = useNavigate()

  return (
    <div>
        <h4>Inventory Stats</h4>
          <div>
            <p>Total Products</p>
          <p>{props.products.length}</p>
          </div>
        <div>
          <p>Total Inventory Value</p>
          <p>{props.products.reduce((sum,product) => {return sum + (product['price'] * product['quantity'])},0)}</p>
        </div>
        <div>
          <p>Out of Stock</p>
          <p>{props.products.filter(product => product['quantity'] <= 0).length}</p>
        </div>
    </div>
  )
}

export default InventoryStats