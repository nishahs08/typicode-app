import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  styled,
  makeStyles,
  Hidden,
  Drawer,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
const Gap = styled(`div`)({
  flex: 1,
});

const Menu = styled(Typography)({
  menu: {
    padding: "10px",
  },
});

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#84DCCF",
  },
  menu: {
    padding: "10px",
  },
}));

const menuItems = [
  {
    component: "Users",
    path: "/",
  },
  {
    component: "Blogs",
    path: "/blogs",
  },
  {
    component: "Albums",
    path: "/albums",
  },
  {
    component: "Todos",
    path: "/todos",
  },
];

const NavItems = () => {
  const classes = useStyles();
  return menuItems.map((item) => (
    <Link to={item.path} style={{ textDecoration: "none", color: "#fff" }}>
      <Menu className={classes.menu}>{item.component}</Menu>
    </Link>
  ));
};
export const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Menu variant="h6" className={classes.menu}>
            JSON Typicode Explorer
          </Menu>
          <Gap />
          <Hidden smDown>
            <NavItems />
          </Hidden>
          <Hidden mdUp>
            <Gap />
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon></MenuIcon>
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <NavItems />
      </Drawer>
    </>
  );
};
