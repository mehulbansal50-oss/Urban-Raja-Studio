import { useState } from "react";
import VerifyEmail from "./VerifyEmail";

function CreateNew() {

  const [showVerification, setShowVerification] = useState(false);
const [userId, setUserId] = useState(null);

    const [formData, setFormData] = useState({
        contact: "",
        password: "",
        confirmPassword: "",
        birth_month: "",
        birth_day: "",
        birth_year: "",
        name: "",
        username: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

   const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.error);
            return;
        }

        setUserId(data.userId);
        setShowVerification(true);

    } catch (error) {
        console.log("Registration error:", error);
        alert("Something went wrong.");
    }
};

    return (
        <>
            <div>
                <h1 className="trend-headline">Create New Account</h1>

                <div>
                    <form
                        className="createnewfrom"
                        onSubmit={handleSubmit}
                    >

                        <h3>Mobile Number or Email:</h3>

                        <input
                            className="input-field"
                            type="text"
                            name="contact"
                            placeholder="mobile number or email"
                            value={formData.contact}
                            onChange={handleChange}
                        />

                        <h3>Create Your Password:</h3>

                        <input
                            className="input-field"
                            type="password"
                            name="password"
                            placeholder="Enter Your Password"
                            value={formData.password}
                            onChange={handleChange}
                        />

                        <h3>Re-enter Your Password:</h3>

                        <input
                            className="input-field"
                            type="password"
                            name="confirmPassword"
                            placeholder="Re-enter Your Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />

                        <h3>Birthday</h3>

                        <div className="birthday-drop-parent">

                            <select
                                className="birthday-drop"
                                name="birth_month"
                                value={formData.birth_month}
                                onChange={handleChange}
                            >
                                <option value="">Month</option>
                                <option value="Jan.">Jan.</option>
                                <option value="Feb.">Feb.</option>
                                <option value="Mar.">Mar.</option>
                                <option value="Apr.">Apr.</option>
                                <option value="May">May</option>
                                <option value="Jun.">Jun.</option>
                                <option value="July">July</option>
                                <option value="Aug.">Aug.</option>
                                <option value="Sep.">Sep.</option>
                                <option value="Oct.">Oct.</option>
                                <option value="Nov.">Nov.</option>
                                <option value="Dec.">Dec.</option>
                            </select>

                            <select
                                className="birthday-drop"
                                name="birth_day"
                                value={formData.birth_day}
                                onChange={handleChange}
                            >
                                <option value="">Day</option>

                                {Array.from({ length: 31 }, (_, index) => (
                                    <option
                                        key={index + 1}
                                        value={index + 1}
                                    >
                                        {index + 1}
                                    </option>
                                ))}
                            </select>

                            <select
                                className="birthday-drop"
                                name="birth_year"
                                value={formData.birth_year}
                                onChange={handleChange}
                            >
                                <option value="">Year</option>

                                {Array.from(
                                    { length: new Date().getFullYear() - 1920 + 1 },
                                    (_, index) => {
                                        const year =
                                            new Date().getFullYear() - index;

                                        return (
                                            <option
                                                key={year}
                                                value={year}
                                            >
                                                {year}
                                            </option>
                                        );
                                    }
                                )}
                            </select>

                        </div>

                        <div>
                            <h3>Name:</h3>

                            <input
                                className="input-field"
                                type="text"
                                name="name"
                                placeholder="Enter Your Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <h3>Username:</h3>

                            <input
                                className="input-field"
                                type="text"
                                name="username"
                                placeholder="Enter Your Username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            className="createbutton"
                            type="submit"
                        >
                            Submit
                        </button>

                    </form>
                </div>

                {showVerification && (
    <VerifyEmail
        userId={userId}
        onClose={() => setShowVerification(false)}
    />
)}

            </div>
        </>
    );
}

export default CreateNew;