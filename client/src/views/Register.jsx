import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
return (
    <>
    <h1>Please Register Your Account</h1>
    <form>
        Name:<input></input><br/>
        Email:<input></input><br/>
        Password:<input></input><br/>
        Confirm Password:<input></input><br/>
        <button>Register</button>

    </form>
    </>
)
}

export default Register