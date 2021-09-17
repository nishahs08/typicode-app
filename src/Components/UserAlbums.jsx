import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react"
import { Album } from "./Album";
import { AllAlbums } from "./AllAlbums";

export const UserAlbums = ({ user }) => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/albums`)
        .then(albums => albums.json())
        .then(albums => { console.log('---hfhhhhhhhhhhhhhhh',albums); setAlbums(albums) })},[]);


    return (
        <>
         {albums.map(album=> <Album user={user} album={album}/>)}
        </>
    )
}