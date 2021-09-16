import { makeStyles } from "@material-ui/core"
import { Grid, Card } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
   root:{
    width: '30%', 
    margin: 'auto',
    [theme.breakpoints.down('md')]:{
        width:'90%'
    }
   }
}))
export const UserInformation = ({ user }) => {
const classes = useStyles();
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
        <Card className={classes.root}>
            {Object.entries(user).map(k => getInformation(k[0], k[1]))}
        </Card>
    )
}