import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Posts';
import {db} from "./firebase";
import 'firebase/compat/firestore';
import { serverTimestamp } from 'firebase/firestore';


function Feed() {
  
  const [input,setInput] = useState('');  
  const [posts,setPosts] = useState([]);
  
  useEffect(() => {
    
    db.collection("posts")
      .orderBy("timestamp","desc")
      .onSnapshot((snapshot) =>
        {
            setPosts(
                snapshot.docs.map((doc)=>({
                        id:doc.id,
                        data:doc.data()
                }))
            )
        }    
    )
    },[]);

  let submitPost = (e) => {
    e.preventDefault();

    db.collection("posts")
      .add({
        name:'Jeet',
        description:"This is test",
        messages:input,
        photoUrl:'',
        //timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        timestamp: serverTimestamp(),
        });

        setInput("");
  }
  
  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon/>
                <form>
                    <input  value={input} onChange={(e) =>{setInput(e.target.value)}} type='text'/>
                    <button onClick={submitPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption  title={"Photo"} Icon={ImageIcon} 
                              color={"#70B5F9"}/>
                <InputOption  title={"Video"} Icon={SubscriptionsIcon} 
                              color={"#E7A33E"}/>
                <InputOption  title={"Event"} Icon={EventNoteIcon} 
                              color={"#C0CBCD"}/>
                <InputOption  title={"Write article"} Icon={CalendarViewDayIcon} 
                              color={"#7FC15E"}/>
            </div>
        </div>
        { posts.map(({id,data:{name,description,messages,photoUrl,timestamp}})=>{
            return(
                <Post   
                key={id}
                name={name} 
                description={description}
                messages={messages}
                photoURL={photoUrl}
                />
            )
        })}
        
    </div>
  )
}

export default Feed