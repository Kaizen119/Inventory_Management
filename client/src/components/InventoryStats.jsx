import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const InventoryStats = (props) => {

  const navigate = useNavigate()
  const {products, setProducts} = props
  const [totalProducts, setTotalProducts] = useState(products.length)
  const [inventoryValue, setInventoryValue] = useState(products.reduce((sum,product) => {return sum + (product['price'] * product['quantity'])},0))
  const [outOfStock, setOutOfStock] = useState(products.filter(product => product['quantity'] <= 0).length)
  // const [allCatagories, setAllCatagories] = useState(products.filter(product => product['catagory']).length)

  return (
    <>
    <div>
        <h4>Inventory Stats</h4>
        <div>
          <p>Total Products</p>
          <p>{totalProducts}</p>
          </div>
        <div>
          <p>Total Inventory Value</p>
          <p>{inventoryValue}</p>
        </div>
        <div>
          <p>Out of Stock</p>
          <p>{outOfStock}</p>
        </div>
        {/* <div>
          <p>All Catagories</p>
          <p></p>
        </div> */}
    </div>
    </>
  )
}

export default InventoryStats