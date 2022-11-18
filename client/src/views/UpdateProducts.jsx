import React, {useState, useEffect } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'






const UpdateProduct = (props) => {

    const navigate = useNavigate()
    const [product,setProduct] = useState();

    //grab the url variable :id
    const {id} = useParams()

    // forms submit variables 
    const[name, setName] = useState("")
    const[image, setImage] = useState("")
    const[catagory, setCatagory] = useState("")
    const[price, setPrice] = useState("")
    const[quantity, setQuantity] = useState(0)

    
    //DB error array
    const [errors,setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response => {
            console.log(response.data)
            setProduct(response.data.product)
            setName(response.data.name)
            setImage(response.data.image)
            setCatagory(response.data.catagory)
            setPrice(response.data.price)
            setQuantity(response.data.quantity)
        })
        .catch(error => {
            console.log(error)
        })
    },[id])

    const updateProduct = (e) => {
        e.preventDefault();
        const tempObjToSendToDB = {
            name,
            image,
            catagory,
            price,
            quantity

        }
        axios.put(`http://localhost:8000/api/products/update/${id}`, tempObjToSendToDB)
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
                console.log("Something went wrong")
        }) 
        }
    


return (
    <>
    <div>
        <div>
            <h1>Update You Product</h1>
            <button onClick={() => navigate('/dashboard')}>Inventory Dashboard</button>
        </div>
        
            {errors.map((error,index) => <p key ={index}>{error}</p>)}
        
        <form onSubmit={updateProduct}>
            Name:<input onChange={(e) => setName(e.target.value)} value={name}/><br/>
        
            Image Url:<input onChange={(e) => setImage(e.target.value)} value={image}/><br/>
        
            Catagory:<input onChange={(e) => setCatagory(e.target.value)} value={catagory}/><br/>
        
            Price:<input type="number" onChange={(e) => setPrice(e.target.value)} value={price}/><br/>
        
            Quantity:<input type="number" onChange={(e) => setQuantity(e.target.value)} value={quantity}/><br/>
        
            <button>Add Product</button>
        </form>
    </div>
    </>
)
}

export default UpdateProduct