import { Card, CardContent, CardHeader, Container, Divider, Grid, CardActions, Button, useMediaQuery, Dialog,  Typography, DialogContent } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from "react";
import {Posts} from './Posts'
import { Comments } from "./Comments";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export const UserPosts = ({ user }) => {
    const [posts, setPosts] = useState([]);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then(response => response.json())
            .then(posts => posts.filter(post => post.userId == user.id))
            .then(posts => { console.log(posts); setPosts(posts) })
    }, []);

    return <>
        <Posts posts={posts}/>
    </>
}