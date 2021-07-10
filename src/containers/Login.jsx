import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { loginUser } from '../store/actions';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const history = useHistory()
   
    const login = () => {
        let user = {
            email,
            password
        }
        dispatch(loginUser(user,history))
    }
    return (
        <div>
            <div className="Container">
                <div className="wrapper">
                    <div className="title"><span>Login Page</span></div>
                    <form action="#">
                        <div className="Row">
                            <i className="fas fa-envelope" />
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" required />
                        </div>
                        <div className="Row">
                            <i className="fas fa-lock" />
                            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required />
                        </div>
                        <div className="pass"><a href="#">Forgot password?</a></div>
                        <div className="row button">
                            <input type="button" value="Login" onClick={login} />
                        </div>
                        <div className="signup-link">
                            Not a member? <Link to="/signup">Signup now</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
