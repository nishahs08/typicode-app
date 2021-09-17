import { CardContent, CardHeader ,Card, Typography,Paper} from "@material-ui/core"
import {Photos} from './Photos';
export const Album = ({album,user}) =>{

    return (
        <>
     
        <Card>
          <CardHeader title={album.title}/>
          <CardContent>
          <Photos user={user} albumId={album.id}/>
          </CardContent>
         
       </Card>
       
        </>

    )
}