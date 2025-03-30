import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Register.css"; // Import CSS for styling

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");

        // Validate password match
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            console.log(email, password);
            const response = await axios.post("http://localhost:9090/auth/register", { email, password });

            console.log("Registration successful:", response.data);
            setSuccess("Registration successful! Redirecting to homepage...");

            // Navigate to homepage after successful registration
            setTimeout(() => {
                navigate("/");
            }, 2000); // Delay for user experience
        } catch (error) {
            setError(error.response?.data?.message || "Error registering user");
            console.error("Error registering user:", error.response?.data || error.message);
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                />

                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter a password"
                />

                <label>Confirm Password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Re-enter your password"
                />

                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
