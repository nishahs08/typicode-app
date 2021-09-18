import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  styled,
  Hidden,
  Drawer,
  Box,
  useTheme
} from "@mui/material";
import { makeStyles } from "@mui/styles"
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

const TAppBar = styled(AppBar) (({ theme })=>({

    background: "#84DCCF",
    zIndex: 1201,
    color:'#000'

}))



const menuItems = [
  {
    component: "Users",
    path: "/",
  },
  {
    component: "Blogs",
    path: "/posts",
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

const NavItems = ({setUser}) => {

  return menuItems.map((item) => (
    <Link to={item.path} style={{ textDecoration: "none",padding:'10px'}} onClick={()=>setUser(null)}>
      <Menu >{item.component}</Menu>
    </Link>
  ));
};
export const Navbar = ({setUser}) => {


  const [open, setOpen] = useState(false);
  return (
    <>
      <TAppBar >
        <Toolbar>
          <Menu variant="h6" >
            JSON Typicode Explorer
          </Menu>
          <Gap />
          <Hidden smDown>
            <NavItems setUser={setUser}/>
          </Hidden>
          <Hidden mdUp>
            <Gap />
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon></MenuIcon>
            </IconButton>
          </Hidden>
        </Toolbar>
      </TAppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <NavItems />
      </Drawer>
    </>
  );
};
