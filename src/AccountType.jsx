import { NavLink } from "react-router-dom";

function AccountType() {
    return(
        <>
        <div>
            <h1 className="trend-headline">Welcome to Urban Raja</h1>
            <div>
                <h3>Choose how you want to continue</h3>
            </div>

            <div className="account-type-container">

                <NavLink className="account-link" to="/UserAccount">
                <div className="account-type">
                    <h2 className="account-name">👤 User Account</h2>
                    <p className="account-p">Explore fashion, learn styling, get personalized recommendations and shop your favorite looks.</p>
                </div>
                </NavLink>

                <NavLink className="account-link">
                <div className="account-type">
                    <h2 className="account-name">🛡️ Admin Account</h2>
                    <p className="account-p">Manage products, users, courses, orders and other platform activities.</p>
                </div>
                </NavLink>

            </div>
        </div>
        </>
    )
}

export default AccountType;