// components/Navbar.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { DarkMode, LightMode } from "@mui/icons-material";

function Navbar({ toggleTheme, mode }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/projects">Projects</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
        <Button color="inherit" component={Link} to="/dragndrop">DragNDrop</Button>
        <IconButton color="inherit" onClick={toggleTheme}>
          {mode === "light" ? <DarkMode /> : <LightMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;