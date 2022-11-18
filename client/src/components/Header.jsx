 import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import React from 'react'
import css from '../components/main.module.css'

const Header = (props) => {

    const [users,setUsers] = useState('');
    const navigate = useNavigate();

    // trigger when the component has finished loading
    useEffect(() => {
        //get all the users from server
        axios.get(`http://localhost:8000/api/users`, {withCredentials: true})
            .then(res => {
                console.log(res.data)
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const logout = () => {
        axios.get('http://localhost:8000/api/logout',{withCredentials: true})
        .then(res => {
            navigate('/')
        })
        .catch(err => console.log(err))
        }
    return (
        <div className={css.header}>
            <h2>Welcome user </h2>



            <button className={css.btn} onClick={() => navigate('/viewprofile')}>Profile</button>
            <button className={css.btn} onClick={() => navigate('/addProduct')}>Add Product</button>
            <button className={css.btn} onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default Header