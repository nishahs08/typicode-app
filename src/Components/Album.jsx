import { Typography, Paper } from "@material-ui/core"
import { useState } from "react";
import { Photos } from './Photos';
export const Album = ({ album, user }) => {
    const [show, setShow] = useState(false)
    return (
        <>
            <Paper style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', margin: '10px' }}>
                <Typography >{album.title} </Typography>
                <Typography onClick={() => setShow(!show)} color='primary'>{show ? 'hide photos' : 'show photos'}</Typography>
            </Paper>
            {show &&
                <Paper style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', margin: '10px' }}>
                    <Photos user={user} albumId={album.id} />
                </Paper>
            }
        </>

    )
}