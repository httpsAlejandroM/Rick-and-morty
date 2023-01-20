import { useState } from "react";
import validation from "./validation";
import App from "../App";

const Form = ({login}) => {

    const [userData, setUserData] = useState({
        username:"",
        password:""
    })

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    })

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData)
  }


    const handleInputChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value
        }))
    }

    


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={userData.username}
            onChange={handleInputChange}/>
            {errors.username && <p >{errors.username}</p>}
            <br />
            <label htmlFor="password" value={userData.password}onChange={handleInputChange}>Password</label>
            <input type="password" name="password"/>
            {errors.password && <p >{errors.password}</p>}
            <button>LOGIN</button>
        </form>
    )
}

export default Form;