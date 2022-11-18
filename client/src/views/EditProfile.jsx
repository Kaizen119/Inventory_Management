import React, {useState, useEffect } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'






const UpdateProfile = (props) => {

    const navigate = useNavigate()
    const [user,setUser] = useState();

    //grab the url variable :id
    const {id} = useParams()

    // forms submit variables 
    const[name, setName] = useState("")
    const[image, setImage] = useState("")
    const[phoneNumber, setPhoneNumber] = useState("")
    const[bio, setBio] = useState("")

    
    //DB error array
    const [errors,setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
        .then(response => {
            console.log(response.data)
            setUser(response.data.product)
            setName(response.data.name)
            setImage(response.data.image)
            setPhoneNumber(response.data.phoneNumber)
            setBio(response.data.bio)
        })
        .catch(error => {
            console.log(error)
        })
    },[id])

    const updateUser = (e) => {
        e.preventDefault();
        const tempObjToSendToDB = {
            name,
            image,
            phoneNumber,
            bio,

        }
        axios.put(`http://localhost:8000/api/users/update/${id}`, tempObjToSendToDB)
        .then(response => {
            console.log("Client Success")
            console.log(response.data)
            navigate('/viewprofile')

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
                console.log("Something went wrong")
        }) 
        }
    


return (
    <>
    <div>
        <div>
            <h1>Update Your Profile</h1>
            <button onClick={() => navigate('/dashboard')}>Inventory Dashboard</button>
        </div>
        
            {errors.map((error,index) => <p key ={index}>{error}</p>)}
        
        <form onSubmit={updateUser}>
            Name:<input onChange={(e) => setName(e.target.value)} value={name}/><br/>
        
            Image Url:<input onChange={(e) => setImage(e.target.value)} value={image}/><br/>

            Phone Number:<input  type="number" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}/><br/>
            
            Bio:<input onChange={(e) => setBio(e.target.value)} value={bio}/><br/>
        
            <button>Update Profile</button>
        </form>
    </div>
    </>
)
}

export default UpdateProfile