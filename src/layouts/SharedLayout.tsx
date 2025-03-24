import { useState } from 'react'
import { Outlet } from 'react-router'
import { Box } from '@mui/material'
// import { useMediaQuery, useTheme } from '@mui/material'
import Header from '../components/Header.tsx'
import Sidebar from '../components/Sidebar.tsx'

function SharedLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  // const theme = useTheme()
  // const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState)
  }

  // const handleMenuClick = () => {
  //   setIsSidebarOpen(true)
  // }
  //
  // const handleSidebarClose = () => {
  //   setIsSidebarOpen(false)
  // }

  return (
    <Box>
      <Header onMenuClick={handleSidebarToggle} />
      <Sidebar
        open={isSidebarOpen}
        onClose={handleSidebarToggle}
        // variant={isDesktop ? 'permanent' : 'temporary'}
      />
      <Box
        component="main"
        // sx={{
        //   py: 4,
        //   display: 'flex',
        //   flexDirection: 'column',
        //   alignItems: 'center',
        //   textAlign: 'center'
        // }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}

export default SharedLayout