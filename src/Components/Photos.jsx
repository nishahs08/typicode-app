import { ImageList, ImageListItem } from '@material-ui/core';
import { Grid, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';

export const Photos = ({ user, albumId }) => {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
		fetch(url)
			.then((photos) => photos.json())
			.then((photos) => {
				const filteredPhotos = user
					? photos.filter((photo) => photo.albumId === albumId)
					: photos;
				setPhotos(filteredPhotos);
			});
	}, [user, albumId]);

	return (
		<>
			{photos.length > 0 ? (
				<ImageList
					variant='masonry'
					cols={6}
					gap={4}
					sx={{ maxHeight: 200, padding: '10px' }}
				>
					{photos.map((photo, index) => (
						<ImageList key={index}>
							<ImageListItem style={{ width: '100%', height: '100%' }}>
								<img src={photo.url} alt={photo.title} loading='lazy'></img>
							</ImageListItem>
						</ImageList>
					))}
				</ImageList>
			) : (
				<Grid container spacing={4}>
					{Array(10)
						.fill(0)
						.map((item, i) => (
							<Grid item key={i}>
								{' '}
								<Skeleton variant='rectangular' width={200} height={100} />
							</Grid>
						))}
				</Grid>
			)}
		</>
	);
};
