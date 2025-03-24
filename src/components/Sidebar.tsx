import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { Link } from 'react-router'
import { Icon } from '@iconify/react'
import pageIcon from '@iconify-icons/majesticons/document-line'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import {
  AppProvider,
  type Router,
  type Navigation
} from '@toolpad/core/AppProvider'
import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import Typography from '@mui/material/Typography'
import { useMemo, useState } from 'react'

function PageContent({ pathname }: { pathname: string }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  )
}

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  // variant: 'permanent' | 'temporary';
}

const NAVIGATION: Navigation = [
  {
    segment: 'dashboard',
    title: 'Dashboard'
    // icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders'
    // icon: <ShoppingCartIcon />,
  },
  {
    segment: 'products',
    title: 'Products'
    // icon: <BarChartIcon />,
  }
]

function Sidebar({ open, onClose }: SidebarProps) {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const drawerWidth = 240

  const [pathname, setPathname] = useState('/dashboard')

  const router = useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path))
    }
  }, [pathname])

  return (
    <Drawer
      // anchor="left"
      open={open}
      onClose={onClose}
      variant={isDesktop ? 'permanent' : 'temporary'}
      // variant={variant}
      // ModalProps={{
      //   keepMounted: true
      // }}
      // sx={{
      //   display: { xs: 'block', sm: 'none' },
      //   '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
      // }}
    >

      {/*<AppProvider*/}
      {/*  navigation={NAVIGATION}*/}
      {/*  router={router}*/}
      {/*  // branding={{*/}
      {/*  //   logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,*/}
      {/*  //   title: 'MUI',*/}
      {/*  //   homeUrl: '/toolpad/core/introduction',*/}
      {/*  // }}*/}
      {/*>*/}
      {/*  <DashboardLayout*/}
      {/*    defaultSidebarCollapsed*/}
      {/*    // hideNavigation*/}
      {/*  >*/}
      {/*    <PageContent pathname={pathname} />*/}
      {/*  </DashboardLayout>*/}
      {/*</AppProvider>*/}

      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard" onClick={onClose}>
            <Icon icon={pageIcon} style={{ marginRight: '8px' }} />
            <ListItemText primary="dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/orders" onClick={onClose}>
            <Icon icon={pageIcon} style={{ marginRight: '8px' }} />
            <ListItemText primary="orders" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/products" onClick={onClose}>
            <Icon icon={pageIcon} style={{ marginRight: '8px' }} />
            <ListItemText primary="products" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Sidebar
