import React, {useContext} from 'react'
import userContext from "../context/UserContext.js";
function Login() {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const {setUser} = useContext(userContext)

    const handleSubmit = (e => {
       e.preventDefault()
        setUser({username, password})
    })

    return (
        <div>
            <h2>Login</h2>
            <input
                type='text'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder='Username'
            />
            {' '}
            <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='Password'/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
