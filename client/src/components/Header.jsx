 import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import React from 'react'
import css from '../components/main.module.css'

const Header = (props) => {

    const [users,setUsers] = useState('');
    const navigate = useNavigate();

    // trigger when the component has finished loading
    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/users/getloggedinuser",{withCredentials: true})
    //         .then(res => {
    //             console.log("cookie data",res)
    //             setUsers(res.data.results)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [])

    const [loggedInUser, setLoggedInUser] = useState({})
    useEffect(()=>{
        axios.get("http://localhost:8000/api/users/getloggedinuser", {withCredentials:true})
            .then(res=>{
                console.log("res when getting logged in user", res)
                if(res.data.results){
                    //this means the user is logged in and can accees this page
                    setLoggedInUser(res.data.results)
                }
            })
            .catch(err=>{
                //this means someone who is not logged in tried to access the dashboard
                console.log("err when gettign logged in user", err)

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
            <h2>Welcome {loggedInUser.name} </h2>



            <button className={css.btn} onClick={() => navigate('/viewprofile')}>Profile</button>
            <img src="/imgs/GBI2.png" alt=""/>

            <button className={css.btn} onClick={() => navigate('/addProduct')}>Add Product</button>
            <button className={css.btn} onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default Header