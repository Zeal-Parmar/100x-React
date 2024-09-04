import React, { useEffect, useState } from 'react'
import UserProfileHeader from '../../Components/UserProfileHeader'
import Tweet from '../../Components/Tweet'
import PlusButton from '../../Components/PlusButton'
import HomePageFooter from '../../Components/HomePageFooter'
import {useParams} from 'react-router-dom';
import { Link  } from 'react-router-dom'


function UserProfile() {
  const [posts, setPosts] = useState([]);
  
  const userId = useParams().id;
  const GetUserInfo = async () => {
  
    const response =  await  fetch(`${import.meta.env.VITE_FETCH_URL}/CurrentUserFeed/${userId}`);
  
   const data = await response.json().then((result) => {
    setPosts(result.posts);
    return result
  
  
  }
  
  
  );
  
  console.log(data);


  }




  useEffect(()=> {  GetUserInfo()

  },[userId])
  


  return (
  <>
    <div className='bg-black '>
    <UserProfileHeader paramId={userId}/>

  
    {

posts.map( (posts)=> (

  <Tweet name={posts.User?posts.User.displayName:'Unknown User'} profilePicUrl={posts.User?posts.User.profilePicUrl:false} userId={posts.User?posts.userId:"10"} username ={posts.User ? posts.User.username : 'noUsername'} createdAt={posts.createdAt} key={posts.id} TweetText={posts.content} PostId={posts.id}  />

) )
}





    <Link to="/compose-tweet"> <PlusButton/></Link>
    <HomePageFooter/>
    </div>
  </>
  )
}

export default UserProfile