import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import css from '../components/main.module.css'


const LogIn = () => {

      //for redirect
        const navigate = useNavigate()

      // forms submit variables 
        const[email, setEmail] = useState("")
        const[password, setPassword] = useState("")


      //DB error array
        const [errors,setErrors] = useState([]);

        const loginUser = (e) => {
            e.preventDefault();
            const tempObjToSendToDB = {
                email,
                password,

            }
            axios.post('http://localhost:8000/api/login', tempObjToSendToDB , {withCredentials: true})
            .then(response => {
                console.log("Client Success")
                console.log(response.data)
                navigate('/dashboard')
            })
            .catch(error => {
                console.log("Something Went Wrong")
                console.log(error)
              const errorResponse = error.response.data.errors; // Get the errors from err.response.data
                  const errorArr = []; // Define a temp error array to push the messages in
                  for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                        errorArr.push(errorResponse[key].message)
                    }
                  // Set Errors
                    setErrors(errorArr);
            }) 
        }
return (

    <>
    <div className={css.background}>
    <div className={css.blur}>
    <div className={css.container}>
      <h1>Login</h1>
        {errors.map((error,index) => <p key ={index}>{error}</p>)}
    <form className='btn' onSubmit={loginUser} ><br/>
        Email: <input onChange={(e) => setEmail(e.target.value)} value={email}/><br/>
        Password: <input onChange={(e) => setPassword(e.target.value)} value={password}/><br/>
        <button className={css.btn}>Log In</button>
    </form>
    </div>
    </div>
    </div>
    </>

)
}

export default LogIn