import { useState } from 'react'
import { Outlet } from 'react-router'
import { useMediaQuery, useTheme, Box, IconButton } from '@mui/material'
import { Icon } from '@iconify/react'
import Header from '../components/Header.tsx'
import Sidebar from '../components/Sidebar.tsx'
import Drawer from '@mui/material/Drawer'

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
            padding: { mobile: '16px', tablet: '32px', desktop: '20px' }
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
          '& .MuiDrawer-paper': { backgroundColor: 'background.default' }
        }}
      >
        <Box sx={{ width: '80px' }}>
          <IconButton
            sx={{ ml: '32px', mb: '40px', color: 'text.primary' }}
            aria-label="button close sidebar"
            onClick={handleSidebarToggle}
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