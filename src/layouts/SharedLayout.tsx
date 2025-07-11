import { useState } from 'react'
import { Outlet } from 'react-router'
import {
  useMediaQuery, useTheme, Drawer, Box, IconButton
} from '@mui/material'
import { Icon } from '@iconify/react'
import Header from '../components/Header.tsx'
import Sidebar from '../components/Sidebar.tsx'

function SharedLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState)
  }

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { mobile: '0px 1fr', desktop: '80px 1fr' },
          gridTemplateRows: 'auto',
          gridTemplateAreas: `
        "header header"
        "sidebar main"`
        }}
      >
        <Header onMenuClick={handleSidebarToggle} />
        {isDesktop && <Sidebar />}
        <Box
          component="main"
          sx={{
            gridArea: 'main',
            padding: {
              mobile: '20px',
              tablet: '20px 32px 32px',
              desktop: '20px 40px 40px'
            },
          }}
        >
          <Outlet />
        </Box>
      </Box>

      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={handleSidebarToggle}
        sx={{
          '& .MuiDrawer-paper':
            {
              padding: '20px',
              backgroundColor: 'background.default'
            }
        }}
      >
        <Box sx={{ width: '40px' }}>
          <IconButton
            aria-label="button close sidebar"
            onClick={handleSidebarToggle}
            sx={[
              {
                ml: '20px',
                padding: '0',
                color: 'text.primary'
              },
              {
                '&:hover': {
                  backgroundColor: 'transparent'
                }
              }
            ]}
          >
            <Icon icon="majesticons:close" width="32" height="32" />
          </IconButton>
          <Sidebar onClose={handleSidebarToggle} />
        </Box>
      </Drawer>
    </>
  )
}

export default SharedLayout