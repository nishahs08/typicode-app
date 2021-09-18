import { makeStyles } from "@mui/styles"
import { Grid, Card ,Container, Box} from "@mui/material"
import { styled } from "@material-ui/core"


const TCard = styled(Card)(({theme})=>({
    width: '30%', 
    margin: 'auto',
    [theme.breakpoints.down('md')]:{
        width:'90%'
    }
}))
export const UserInformation = ({ user }) => {

    const getInformation = (key, value) => {
        if (typeof value === 'object') {
            return Object.entries(value).map((k, i) => {
                return getInformation(k[0], k[1])
            })
        } return (
            <Grid container spacing={2} style={{ padding: '5px', margin: 'auto' }}>
                <Grid item xs={6}>{key}</Grid>
                <Grid item xs={6}>{value}</Grid>
            </Grid>
        )
    }
    return (
        <Box style={{marginLeft:'200px'}}>
        <TCard >
            {Object.entries(user).map(k => getInformation(k[0], k[1]))}
        </TCard>
        </Box>
    )
}