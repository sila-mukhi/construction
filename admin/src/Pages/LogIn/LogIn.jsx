import React, { useEffect } from "react";
import './LogIn.css';
import { useNavigate } from "react-router-dom";

const LogIn = ({url}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    //  const url="http://localhost:4300";
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/");
        }
    }, [navigate]);

    const handleLogin = async () => {
        console.log(email, password);
        let result = await fetch(`${url}/api/users/login`, {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
    
        // Ensure you are storing both user and token
        if (result.success) {
            localStorage.setItem("user", JSON.stringify(result.data)); // Storing user data
            localStorage.setItem("token", result.token); // Storing token
            navigate("/");
        } else {
            alert("Please enter correct details");
        }
    }
    

    return (
        <div className="log-in">
            <h1>Log In</h1>            
            <input
                className="inputBox"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="inputBox"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Log In</button>
            {/* <a href="/changePassword">click here to change password</a> */}
        </div>
    );
};

export default LogIn;











