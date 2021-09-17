import { Card, CardContent, CardHeader, Container, Divider, Grid, CardActions, Button, useMediaQuery, Dialog, Typography, DialogContent, Skeleton, Stack, Avatar } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from "react";
import { Comments } from "./Comments";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { styled } from "@material-ui/core";
export const Posts = ({ posts }) => {
    const [showPost, setShowPost] = useState(false);
    const [post, setPost] = useState({})
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    
   const ProfileIcon = styled(PersonOutlineIcon)(({theme})=>({
    padding: '10px',
    borderRadius: '20px',
    backgroundImage: 'radial-gradient(circle, #ffffff, #deddde, #bfbcbe, #a29c9d, #857d7d)',
    marginBottom: 'auto'
   }))

    return <>
     
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry>

                {posts.length > 0 ?
                 posts.map(post => (
                        <Card style={{ margin: '10px', borderTop: '10px solid #84DCCF' }}>
                            <CardHeader title={post.title} >
                            </CardHeader>

                            <CardContent>
                                {post.body}
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => { setShowPost(true); setPost(post) }}>See Full post</Button>
                            </CardActions>
                        </Card>

                    ))
               
                  :
                  Array(10).fill(0).map(s => (
                      <Stack  style={{ margin: '10px',padding:'5px'}}>
                          <Skeleton variant="rectangular" width={250} height={30} style={{ margin: '8px'}} />
      
                          <Skeleton variant="rectangular" width={250} height={250} style={{ margin: '8px'}} />
                          <Skeleton variant="rectangular" width={80} height={30} style={{ margin: '8px'}}/>
                      </Stack>
                  ))
          }
   


            </Masonry>
            </ResponsiveMasonry>
     
        <Dialog fullScreen={fullScreen} open={showPost} onClose={() => setShowPost(false)}  >
            <DialogContent>
                <Grid container direction='column' spacing={2} >
                    <Grid item >
                        <Button onClick={() => setShowPost(false)}>Close</Button>
                    </Grid>

                    <Grid item><Typography variant='h4'>{post.title}</Typography></Grid>
                    <Grid item><Typography>{post.body}</Typography></Grid>
                    <Grid item style={{paddingLeft:'30px'}}> <Comments postId={post.id} /> </Grid>
                </Grid>
            </DialogContent>

        </Dialog>

    </>
}