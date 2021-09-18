import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { Posts } from "./Posts";


export const AllPosts = ({ user }) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(posts => { console.log("sjhfkjhfsjkfh====",posts); setPosts(posts) })
    }, []);
    return <>
        
           
                <Posts posts={posts}/>
        
     
     
    </>
}