import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Home", link: "#" },
    { text: "About", link: "#about" },
    { text: "All Events", link: "#events" },
    { text: "Add Event", link: "/addevent" },
  ];

  // Drawer for mobile navigation
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontWeight: "bold",
          fontFamily: "'Poppins', sans-serif",
          color: "white",
        }}
      >
        <EventAvailableIcon sx={{ mr: 1, color: "#00c6ff" }} /> Event Manager
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component="a"
              href={item.link}
              sx={{
                textAlign: "center",
              }}
            >
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "medium",
                  color: "white",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(90deg, #000428 0%, #004e92 100%)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              fontFamily: "'Poppins', sans-serif",
              color: "#00c6ff",
            }}
          >
            <EventAvailableIcon sx={{ mr: 1 }} /> Event Manager
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                href={item.link}
                sx={{
                  color: "white",
                  fontWeight: "medium",
                  mx: 1,
                  fontFamily: "'Poppins', sans-serif",
                  "&:hover": { color: "#00c6ff" },
                }}
              >
                {item.text}
              </Button>
            ))}
            {/* Login and Signup Buttons */}
            <Button
              variant="outlined"
              sx={{
                color: "#00c6ff",
                borderColor: "#00c6ff",
                mx: 1,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "medium",
                "&:hover": { bgcolor: "#00c6ff", color: "#000428" },
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#00c6ff",
                color: "#000428",
                mx: 1,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "medium",
                "&:hover": { bgcolor: "#004e92" },
              }}
            >
              Signup
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            edge="start"
            sx={{ display: { sm: "none" }, color: "#00c6ff" }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            bgcolor: "#000428",
            color: "white",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
