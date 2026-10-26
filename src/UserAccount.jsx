import { useState } from "react"
import { NavLink } from "react-router-dom"

function UserAccount() {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")

    const handleEmail = (event)=> {
        setEmail(event.target.value)
        setPassword(event.target.value)
    }

    const handleSubmit = () => {
            
            if(email === "" || password === ""){
                alert("please fill all the correct email and passowrd")
            } 
            else{
               alert( "login successfully")
            }
    }
    
    return(
        <>
        <div>
            <h1 className="trend-headline">User Account</h1>

            <form className="form">
                <div className="form-input">
                <h3>ENTER YOUR EMAIL:</h3>
                <input className="font-field" type="text" placeholder="Enter Your Email" onChange={handleEmail} />
                </div>

                <div className="form-input">
                <h3>ENTER PASSWORD:</h3>
                <input className="font-field" type="password" placeholder="Enter Your Password" onChange={handleEmail} />
                </div>

                <div className="form-button">
                <button onClick={handleSubmit}>Login</button>
                <NavLink to="/CreateNew">
                <button>Create a New Account</button>
                </NavLink>
                
                </div>
                
                <NavLink>
                <h4><b>Forgot Password?</b></h4>
                </NavLink>
            </form>
        </div>
        </>
    )
}

export default UserAccount