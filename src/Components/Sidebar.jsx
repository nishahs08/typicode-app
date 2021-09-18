import {
  Avatar,
  Drawer,
  Toolbar,
  Typography,
  Box,
  Divider,
  Container,
  Grid,
  Button,
} from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { Link } from "react-router-dom";
import img from "../images/profile.jpg";

const useStyles = makeStyles((theme) => ({
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    width: "200px",
  },
}));

const TLink = styled(Link)({
  textDecoration: "none",
  padding: "10px",
  marginBottom: "10px",
});
const Menu = styled(Button)({
  margin: "5px",
});
export const Sidebar = ({ user }) => {
  const classes = useStyles();
  return (
    <Drawer variant="permanent" anchor="left">
      <Toolbar />

      <Box className={classes.infoContainer}>
        <Avatar
          to="/user/info"
          src={img}
          variant="rounded"
          style={{ width: "100px", height: "100px" }}
        />
        <Typography color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.email}
        </Typography>
      </Box>
      <Divider />
      <Container>
        <Grid Container direction="column">
          <Grid item>
            <TLink to="/user/posts">
              <Menu> Posts</Menu>
            </TLink>
          </Grid>
          <Grid item>
            {" "}
            <TLink to="/user/albums">
              <Menu> Albums</Menu>
            </TLink>
          </Grid>
          <Grid item>
            <TLink to="/user/todos">
              <Menu> Todos</Menu>
            </TLink>
          </Grid>
        </Grid>
      </Container>
    </Drawer>
  );
};
