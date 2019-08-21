import React, {useState} from 'react'
import {axiosWithAuth} from '../utilities/axiosWithAuth';
import axios from 'axios';


const AddFriend = (props) => {
    const [friend, setFriend] = useState({name: '', age: '', email: ''})

    const handleChange = (e) => {
        setFriend({...friend, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', friend)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err.response)
        })
    }
console.log(friend)
    return (
        <div>
            <h3>Add a friend</h3>
            <form onSubmit={handleSubmit}>
                <label >name:</label>
                <input
                    name='name'
                    placeholder='name'
                    type='text'
                    onChange={handleChange}
                />
                <label>age:</label>
                <input
                    name='age'
                    placeholder='age'
                    type='number'
                    onChange={handleChange}
                />
                 <label>email:</label>
                <input
                    name='email'
                    placeholder='email'
                    type='text'
                    onChange={handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    )
}


export default AddFriend;