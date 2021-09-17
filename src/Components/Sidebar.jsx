import { Avatar, Drawer, Toolbar, Typography, Box, Divider , Container,Grid} from "@mui/material";
import { makeStyles } from "@mui/styles"
import {Link} from 'react-router-dom'
import img from '../images/profile.jpg';

const useStyles = makeStyles((theme)=>({
    infoContainer:{
        display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          padding:'5px'
    }
}))
export const Sidebar = ({ user }) => {
    const classes=useStyles();
    return (
        <Drawer variant='permanent' anchor='left'>
            <Toolbar />
            
            <Box className={classes.infoContainer}>
                <Avatar to='/user/info' src={img} variant="rounded" style={{ width: '100px', height: '100px' }} />
                <Typography color="textPrimary" variant="h5">{user.name}</Typography>
                <Typography color="textSecondary"
                    variant="body2">{user.email}</Typography>
            </Box>
            <Divider />
            <Container>
                <Grid Container direction='column' >
                    <Grid item><Link to='/user/posts'>Posts</Link></Grid>
                    <Grid item> <Link to='/user/albums'>albums</Link></Grid>
                    <Grid item><Link to='/user/todos'>todos</Link></Grid>
                </Grid>
            </Container>
        </Drawer>
    )
}