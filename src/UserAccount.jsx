import { NavLink } from "react-router-dom"

function UserAccount() {
    return(
        <>
        <div>
            <h1 className="trend-headline">User Account</h1>

            <form className="form">
                <div className="form-input">
                <h3>ENTER YOUR EMAIL:</h3>
                <input className="font-field" type="text" placeholder="Enter Your Email" />
                </div>

                <div className="form-input">
                <h3>ENTER PASSWORD:</h3>
                <input className="font-field" type="password" placeholder="Enter Your Password" />
                </div>

                <div className="form-button">
                <button>Login</button>
                <NavLink to="/CreateNew">
                <button>Create a New Account</button>
                </NavLink>
                
                </div>

                <h4><b>Forgot Password?</b></h4>
            </form>
        </div>
        </>
    )
}

export default UserAccount