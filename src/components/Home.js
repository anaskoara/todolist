import React, { useEffect, useState } from "react";
import postService from "../services/postservice";


const Home=()=>{
    const [posts,setPosts]=useState({});

    useEffect(()=>{
        postService.getAllPublicPosts()
        .then(
            (response)=>{
                setPosts(response.data)
            }
        ).catch(error=>{console.log(error)})
    },[]);

    return (
        <div>
            <h1>Public posts</h1>
            
             {posts.map((post,index)=>(
                <div key={"pblc${index}"}>
                <h2>{post.title}</h2>
                <div>{post.content}</div>
                </div>
             ))}
        </div>
    );
}

export default Home;