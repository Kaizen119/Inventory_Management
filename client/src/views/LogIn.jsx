import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
return (
    <>
    <h1>Please Log In</h1>
    <form>
        Email:<input></input><br/>
        Password:<input></input><br/>
        <button>Log In</button>

    </form>
    </>
)
}

export default LogIn