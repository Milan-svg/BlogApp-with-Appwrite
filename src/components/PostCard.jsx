import React from 'react'
import dbService from '../Appwrite/appwriteConfig'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredimage}) {
  return (
    <Link to={`/post/${$id}`}>
    <div>
        <div>
        <img src={dbService.getFilePreview(featuredimage)} alt={title} className='rounded-lg shadow-md'/>
        </div>
        <h2>{title}</h2>
    </div>
    </Link>
  )
}

export default PostCard

// so $id, title, aur featuredimage isiliye hai cause, we'll use the postcard component in pages (like Home.jsx) jaha we'll use getPost/getAllPost etc to fetch certain post/all posts to perform operations, jinke output "post" object ke form me aate hai. 
//$id, title,featuredimage etc are from that "post" object.


// for eg, Home.jsx me we've used <Postcard {...post}/> where we used getPost/getAllPosts method from our appwriteCongig to fetch a post/posts.