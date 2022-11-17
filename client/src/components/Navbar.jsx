import React from 'react'
import { useNavigate } from 'react-router-dom'
import css from '../components/main.module.css'

const Navbar = (props) => {
    const navigate= useNavigate();
    return (
        <div className={css.nav}>
            <h3>Nav Bar</h3>
            <ul>
                <li><button onClick={() => navigate('/addProduct')}>Add Product</button></li>
                <li><button>Profile</button></li>
                <li><button>Edit Profile</button></li>
            </ul>
        </div>
    )
}

export default Navbar