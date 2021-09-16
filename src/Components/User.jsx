import { Grid, Typography } from "@material-ui/core"
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { UserInformation } from "./UserInformation";
import {useHistory} from 'react-router-dom';
const style = {
    padding: '10px',
    borderRadius: '20px',
    backgroundImage: 'radial-gradient(circle, #e567af, #d576c5, #c384d5, #ae91e0, #9b9ce6, #89a8f0, #78b4f6, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)'
}


export const User = ({ user ,setUser}) => {
    const history = useHistory();
    return (
        <Grid container  justifyContent='space-between' alignItems='center' style={{ border: '1px solid red', padding: '10px' }}  onClick={()=>{ console.log(user);setUser(user); history.push('user/info')}}>
            <Grid item><PersonOutlineIcon style={style} /></Grid>
            <Grid item style={{ marginRight: 'auto' }}> <Typography>{user.name}</Typography></Grid>
            <Grid item > <Typography>{user.email}</Typography></Grid>
        </Grid>
    )
}