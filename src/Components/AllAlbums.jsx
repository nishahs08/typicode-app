import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react"

export const AllAlbums = ({ user }) => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {fetch(`https://jsonplaceholder.typicode.com/albums`)
        .then(albums => albums.json())
        .then(albums => { console.log('---',albums); setAlbums(albums) })},[]);


    return (
        <>
         {albums.map(album=>  <Typography>{album.title}</Typography>)}
        </>
    )
}