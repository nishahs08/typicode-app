import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Album } from "./Album";

export const AllAlbums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then((albums) => albums.json())
      .then((albums) => {setAlbums(albums);  });
  }, []);
  return (
    <Container maxWidth="lg">
      {albums.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </Container>
  );
};
