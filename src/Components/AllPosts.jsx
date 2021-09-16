import { Container } from "@material-ui/core";
import { useState, useEffect } from "react";

export const AllPosts = ({ user }) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(posts => { console.log(posts); setPosts(posts) })
    }, []);
    return <>
        <Container>
            {posts.map(post => <>
                <div>{post.id}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
            </>
            )}
        </Container>
    </>
}