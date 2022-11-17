import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = (props) => {
    const navigate= useNavigate();
    return (
        <div>
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