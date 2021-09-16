import { useEffect } from "react"
import {Container, Grid} from '@material-ui/core'
import { User } from "./User"
export const Users = ({users,setUser}) =>{
 
    return (
        <Container maxWidth='md'>
        <Grid container direction='column' spacing={2}>
            {users.map(user=><Grid item style={{padding:'5px'}} ><User user={user} setUser={setUser}/></Grid>)}
        </Grid>
        </Container>
    )
}