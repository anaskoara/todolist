import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import authService from "../services/authservice";
import postService from "../services/postservice";


const Private=()=>{
    const [posts,setPosts]=useState({});
    const navigate=useNavigate();

    useEffect(()=>{
        postService.getAllPrivatePosts()
        .then(
            (response)=>{
                setPosts(response.data)
            }
        ).catch(error=>{
            console.log("private page",error.response)
            if(error.response && error.response.status===403){
                authService.logout();
                navigate("/login");
                window.location.reload();
            }
        });
    },[]);

    return (
        <div>
            <h1>Public posts</h1>
            
             {posts.map(post=>(
                <div>
                <h2>{post.title}</h2>
                <div>{post.content}</div>
                </div>
             ))}
        </div>
    );
}

export default Private;