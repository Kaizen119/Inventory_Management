import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {useState, useEffect } from 'react'
import axios from 'axios'


const ViewProfile = (props) => {
 //grab the url variable
    const {id} = useParams();
    const navigate = useNavigate();

    const [thisUser, setThisUser] = useState(null)

useEffect(() => {
    axios.get(`http://localhost:8000/api/users/${id}`)
    .then(response => {
        console.log(response.data)
        setThisUser(response.data)
    })
    .catch(error => {
        console.log(error)
    })
},[id])

    return (
    <div>
    {thisUser ? (
        <>
        <div>
            <h1>{thisUser.name}</h1>
        </div>
            <div>
                <img src={thisUser.image} alt="not found"  />
            </div>
            <div>
                <h3>About</h3>
                <p>Phone Number:{thisUser.phoneNumber}</p>
                <p>Bio:{thisUser.bio}</p>
                </div>
        </>
        ): ("You are not part of the team...")
    }
    <button onClick={() => navigate('/dashboard')}>Home</button>
    <button onClick={() => navigate('/editprofile')}>Edit Profile</button>
    </div>
    )
}


export default ViewProfile