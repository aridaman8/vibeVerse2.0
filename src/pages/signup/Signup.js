import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import "./Signup.scss";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../../components/footer/Footer";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const result = await axiosClient.post("/auth/signup", {
                name,
                email,
                password,
            });

            toast(
                "Please enter the OTP sent on your mail. Check Your Spam Folder",
                {
                  duration: 8000,
                  icon: '🙏',
                  style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                  }
                }
              );
              navigate('/otp');
            // toast.success("Welcome to the Vibe Verse World , Please Login now"); 
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="Signup">
            <div className="signup-box">
                <h2 className="heading">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="name"
                        id="name"
                        placeholder="Dipesh Yadav"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="email"
                        id="email"
                        placeholder="you@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="password"
                        id="password"
                        placeholder="*******"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input type="submit" className="submit" />
                </form>
                <p className="subheading">
                    Already have an account? <Link to="/login">Log In</Link>
                </p>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default Signup;