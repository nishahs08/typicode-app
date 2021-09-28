import { Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Album } from './Album';

export const UserAlbums = ({ user }) => {
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/albums`)
			.then((albums) => albums.json())
			.then((albums) => {
				setAlbums(albums);
			});
	}, [user.id]);

	return (
		<Container style={{ marginLeft: '230px' }}>
			{albums.map((album, i) => (
				<Album key={i} user={user} album={album} />
			))}
		</Container>
	);
};
