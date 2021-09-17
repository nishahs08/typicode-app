import { Checkbox, Grid, Paper } from "@material-ui/core"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
export const Todos = ({ todos }) => {

    return (<>
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry>

        {todos ?
            todos.map(todo => <Paper elevation={1} style={{ margin: '25px',borderTop:todo.completed ? '10px solid #66BB6A' :'10px solid #FFEE58'}}>
                <Grid container style={{ padding: '10px' }}>
                    <Grid item xs={10}>{todo.title}</Grid>
                    <Grid item xs={2}><Checkbox checked={todo.completed}></Checkbox></Grid>
                </Grid>
            </Paper>)
            : null
        }

</Masonry>
            </ResponsiveMasonry>
    </>
    )
}