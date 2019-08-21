import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utilities/axiosWithAuth';
import AddFriend from './AddFriend'
// import AddFriends from "./AddFriends.js";
import axios from 'axios';
import {FriendsDisplay} from "./FriendsDisplay.js";




const FriendsList = () => {
  const [friends, setFriends] = useState([])
    
  useEffect(() => {
      axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err.response)
        })
  }, [])


  

  return (
    <div>
       <AddFriend />
        
         <div>
            <h4>Friends</h4>
        {friends !== null && friends.map(friend => {return <FriendsDisplay key={friend.id} friend={friend} />})}
        </div>
    </div>
  );
};
export default FriendsList;