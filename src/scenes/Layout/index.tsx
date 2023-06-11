import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Box, useMediaQuery } from "@mui/material";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  return (
    <>
      <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
        <Sidebar />
        <Navbar />
      </Box>
      <Box
        marginTop={"70px"}
        marginLeft={isNonMobile ? "240px" : "0px"}
        width={isNonMobile ? `calc(100% - ${240}px)` : "100%"}
        height="100%"
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
