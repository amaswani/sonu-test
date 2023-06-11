import React from "react";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./NavBar.css";

const Navbar = () => {
  const drawerWidth = 240;
  const Navigate = useNavigate();

  const handleDrawerToggle = () => {
    console.log("first");
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    localStorage.clear();
    Navigate("/login");
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#FFFFFF",
          height: "68px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF",
            color: "black",
            height: "68px",
          }}
        >
          <Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "125%",
                letterSpacing: "0.2px",
              }}
            >
              DashBoard
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid grey",
                borderRadius: "15px",
                height: "40px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SearchIcon sx={{ ml: "10px" }} />
              <TextField
                id="outlined-basic"
                label="Search....."
                variant="outlined"
              />
            </Box>
            <NotificationsOutlinedIcon
              sx={{ marginLeft: "20px", fontWeight: "100" }}
            />
            <Avatar
              sx={{ marginLeft: "20px" }}
              alt="Sonu"
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcSjWKNT_CqZLRfmepOyVrU_c-Lp5Qu5FzBv6Zd2jx2Q5aOow-t-9u-oUZk9vfyjz6Eibv0z-P77Y1bIElQ&psig=AOvVaw0UnRaQrV8A-601PqFoDgHX&ust=1685380515867000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPiT6t_BmP8CFQAAAAAdAAAAABAE"
            />
            <Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "125%",
                  letterSpacing: "0.2px",
                  marginLeft: "10px",
                }}
              >
                Sonu Bhuhadiya
              </Typography>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{
                  fontWeight: "100",
                  fontSize: "12px",
                  lineHeight: "125%",
                  letterSpacing: "0.2px",
                  marginLeft: "10px",
                }}
              >
                Software Developer
              </Typography>
            </Box>
            <Typography
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ marginLeft: "20px" }}
            >
              <KeyboardArrowDownIcon />
            </Typography>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
