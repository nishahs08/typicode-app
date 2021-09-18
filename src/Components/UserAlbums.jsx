import { Typography,Container } from "@material-ui/core";
import { useEffect, useState } from "react"
import { Album } from "./Album";
import { AllAlbums } from "./AllAlbums";

export const UserAlbums = ({ user }) => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/albums`)
        .then(albums => albums.json())
        .then(albums => { console.log('---hfhhhhhhhhhhhhhhh',albums); setAlbums(albums) })},[]);


    return (
        <Container style={{marginLeft:'200px'}}>
         {albums.map((album,i)=> <Album key={i} user={user} album={album}/>)}
        </Container>
    )
}