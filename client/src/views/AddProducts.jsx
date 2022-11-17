import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import AddItemForm from '../components/AddItemForm'
import css from '../components/main.module.css'



const AddProducts = (props) => {

    return (
<body>
<div><Header /></div>
    <div className={css.container4}>
    <img src="/imgs/GBI2.png" alt=""/>
    <div><AddItemForm /></div>
    </div>
</body>



    )
}

export default AddProducts