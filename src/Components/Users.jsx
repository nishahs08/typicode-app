import { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { User } from "./User";
export const Users = ({ setUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        setUsers(response);
      });
  }, []);

  return (
    <Container maxWidth="md">
      <Grid container direction="column" spacing={2}>
        {users.map((user) => (
          <Grid key={user.id} item style={{ padding: "5px" }}>
            <User user={user} setUser={setUser} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
