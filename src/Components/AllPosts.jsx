import { Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { Posts } from './Posts';

export const AllPosts = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts`)
			.then((response) => response.json())
			.then((posts) => setPosts(posts));
	}, []);

	return (
		<Container maxWidth='lg'>
			<Posts posts={posts} setPosts={setPosts} />
		</Container>
	);
};
