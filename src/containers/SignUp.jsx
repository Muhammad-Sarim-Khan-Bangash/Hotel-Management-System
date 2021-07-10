import React from 'react'
import { Link } from "react-router-dom"
import { useState } from 'react'
import { signupUser } from '../store/actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

const Signup = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const history = useHistory();

    const signup_user = () => {
        let user = {
            username,
            email,
            password
        }
        dispatch(signupUser(user, history))
    }

    return (
        <div>
            <div className="Container">
                <div className="wrapper">
                    <div className="title"><span>SignUp Page</span></div>
                    <form action="#">
                        <div className="Row">
                            <i className="fas fa-user" />
                            <input
                                onChange={(e) => setUsername(e.target.value)} value={username}
                                type="text" placeholder="Fullname" required />
                        </div>
                        <div className="Row">
                            <i className="fas fa-envelope" />
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Email" required />
                        </div>
                        <div className="Row">
                            <i className="fas fa-lock" />
                            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required />
                        </div>

                        <div className="row button">
                            <input type="button" onClick={signup_user} value="SignUp" />
                        </div>
                        <div className="signup-link">
                            Already a member? <Link to="/">Login now</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
