import { CardContent, CardHeader ,Card, Typography,Paper} from "@material-ui/core"
import { useState } from "react";
import {Photos} from './Photos';
export const Album = ({album,user}) =>{
const [show,setShow]=useState(false)
    return (
        <>
     
        <Card>
          <CardHeader title={album.title} onClick={()=>setShow(true)}/>
          {show && 
          <CardContent>
          <Photos user={user} albumId={album.id}/>
          </CardContent>
}
         
       </Card>
       
        </>

    )
}