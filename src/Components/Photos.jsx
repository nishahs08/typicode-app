import { ImageList, ImageListItem, Typography } from "@material-ui/core";
import { useEffect, useState } from "react"

export const Photos= ({ user ,albumId}) => {

    const [photos, setPhotos] = useState([]);
    
    useEffect(() => {
        const url = user ? `https://jsonplaceholder.typicode.com/users/${user.id}/photos` : `https://jsonplaceholder.typicode.com/photos`
        fetch(url)
        .then(photos => photos.json())
        .then(photos => { const filteredPhotos = user ? photos.filter(photo=>photo.albumId === albumId) : photos; setPhotos(filteredPhotos) })
    },[]);

    
    return (
        <>
          <ImageList variant="masonry" cols={3} gap={4} sx={{ height: 350 }}>
         {photos.map((photo,index)=>  <ImageList key={index}>
             <ImageListItem style={{width:'100%',height:'100%'}}>
                 <img src={photo.url} alt={photo.title} loading='lazy'></img>
             </ImageListItem>
         </ImageList>)}
         </ImageList>
        </>
    )
}