import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleHome = () => {
    navigate("/");
  };
  const handleAbout = () => {
    navigate("/about");
  };
  const handleContact = () => {
    navigate("/contact");
  };
  return (
    <AppBar position="sticky">
      <StyledToolbar
        sx={{
          display: "flex",
          justifyContent: { xs: "flex-start", sm: "center" },
        }}
      >
        <MenuIcon
          onClick={(e) => {
            setOpen(true);
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            cursor: "pointer",
            width: 30,
            height: 30,
          }}
        />
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => {
            setOpen(false);
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleHome}>Home</MenuItem>
          <MenuItem onClick={handleAbout}>About us</MenuItem>
          <MenuItem onClick={handleContact}>Contact</MenuItem>
        </Menu>{" "}
        <Typography
          onClick={handleHome}
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}
        >
          Home
        </Typography>
        <Typography
          onClick={handleAbout}
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
            mr: 10,
            ml: 10,
            cursor: "pointer",
          }}
        >
          About us
        </Typography>
        <Typography
          onClick={handleContact}
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}
        >
          Contact
        </Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
