import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Box, useMediaQuery } from "@mui/material";

const Layout = () => {

    const isNonMobile = useMediaQuery("(min-width: 600px)")
    return (
        <>
            <Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%">
                <Sidebar />
                <Navbar />
            </Box>
            <Box paddingLeft={isNonMobile ? '250px' : ''} width="100%">
                <Outlet />
            </Box>
        </>
    )
}

export default Layout