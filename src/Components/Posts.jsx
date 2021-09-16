import { Container } from "@material-ui/core";
import { useState ,useEffect} from "react";

export const Posts = ({user})=>{
    const [posts,setPosts]=useState([])
    useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
			.then(response => response.json())
			.then(posts => posts.filter(post => post.userId == user.id))
			.then(posts => {console.log(posts); setPosts(posts)})
	}, []);
    return <>
    <Container>
        {posts.map(post=><>
        <div>{post.id}</div>
        <div>{post.title}</div>
        <div>{post.body}</div>
        </>
        )}
    </Container>
    </>
}