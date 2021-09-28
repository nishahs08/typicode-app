import { useState } from 'react';
import { useEffect } from 'react';
import ProfileIcon from '@material-ui/icons/PersonOutline';
import { Skeleton, Stack, Typography, Avatar, Grid } from '@mui/material';

export const Comments = ({ postId }) => {
	const [comments, setComments] = useState([]);
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
			.then((response) => response.json())
			.then((commentRes) => {
				setComments(commentRes);
			});
	}, [postId]);
	return (
		<>
			{comments.length > 0
				? comments.map((comment) => (
						<Grid
							container
							key={comment.id}
							style={{ backgroundColor: '#e3dac9', margin: '5px' }}
						>
							<Grid item xs={11}>
								<Grid container alignItems='center'>
									<Grid item>
										{' '}
										<Avatar>
											<ProfileIcon />
										</Avatar>
									</Grid>
									<Grid item>
										{' '}
										<Typography>{comment.email}</Typography>{' '}
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={11}>
								<Typography variant='body1'>{comment.name}</Typography>
							</Grid>
							<Grid item xs={11}>
								<Typography variant='body2'>{comment.body}</Typography>
							</Grid>
						</Grid>
				  ))
				: Array(4)
						.fill(0)
						.map((s, i) => (
							<Stack
								key={i}
								style={{
									display: 'flex',
									flexDirection: 'row',
									margin: '10px',
								}}
							>
								<Skeleton variant='circular' width={40} height={40} />
								<Skeleton variant='rectangular' width={400} height={80} />
							</Stack>
						))}
		</>
	);
};
