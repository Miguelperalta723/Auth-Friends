import React, {useState} from 'react';
import axios from 'axios'


const LoginForm = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({username: '', password: ''})

    const handleLogin = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', user)
            .then(res => {
                const token = res.data.payload;
                localStorage.setItem('token',token)
                props.history.push('/protected');
            })
            .catch(err => {
                console.log(err.response)
            })

       
    }

    console.log(props.history)
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label>Username:</label>
                <input
                    name='username'
                    placeholder='username'
                    type='text'
                    onChange={handleChange}
                />
                <label>Password:</label>
                <input
                    name='password'
                    placeholder='password'
                    type='password'
                    onChange={handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;