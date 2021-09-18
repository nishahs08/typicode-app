import { Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { Album } from "./Album";

export const AllAlbums = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {fetch(`https://jsonplaceholder.typicode.com/albums`)
        .then(albums => albums.json())
        .then(albums => { console.log('---',albums); setAlbums(albums) })},[]);


    return (
        <>
         {albums.map(album=>  <Album album={album}/>)}
        </>
    )
}