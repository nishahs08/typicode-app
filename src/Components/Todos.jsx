import { Checkbox, Grid, Paper ,Skeleton} from "@mui/material"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
export const Todos = ({ todos ,editTodosStatus}) => {

    return (<>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry>
                {todos ?
                    todos.map(todo => <Paper elevation={1} style={{ margin: '25px', textDecorationLine: todo.completed ? 'line-through' : 'none' }}>
                        <Grid container style={{ padding: '10px' }}>
                            <Grid item xs={10}>{todo.title}</Grid>
                            <Grid item xs={2}><Checkbox checked={todo.completed} onClick={()=>{editTodosStatus(todo.id)}}></Checkbox></Grid>
                        </Grid>
                    </Paper>)
                    : Array(15).fill(0).map((item,i) => <Skeleton key={i} width={200} height={200}></Skeleton>)
                }
            </Masonry>
        </ResponsiveMasonry>
    </>
    )
}