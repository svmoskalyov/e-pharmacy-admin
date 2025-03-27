import {
  useMediaQuery, useTheme,
  Box, AppBar, Toolbar, Typography, IconButton, Divider
} from '@mui/material'
import { Icon } from '@iconify/react'
import ButtonLogout from './ui/ButtonLogout.tsx'
import Logo from './ui/Logo.tsx'

interface HeaderProps {
  onMenuClick: () => void;
}

function Header({ onMenuClick }: HeaderProps) {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))

  return (
    <Box sx={{ gridArea: 'header' }}>
      <AppBar
        position="static"
        sx={{
          background: 'inherit',
          color: 'text.primary',
          boxShadow: 0,
          borderBottom: '1px solid rgba(29, 30, 33, 0.1)'
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: { mobile: '16px', tablet: '32px', desktop: '20px' },
            paddingRight: { mobile: '16px', tablet: '32px', desktop: '20px' },
            height: '80px'
          }}
        >
          {!isDesktop &&
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { desktop: 'none' } }}
              onClick={onMenuClick}
            >
              <Icon icon="iconamoon:menu-burger-horizontal-duotone" width="32" height="32" />
            </IconButton>
          }
          <Logo />
          <Box sx={{ flexGrow: 1, ml: 1 }}>
            <Typography
              variant="h6"
              component="div"
              fontWeight="600"
              lineHeight="24px"
            >
              Medicine store
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography
                variant="caption"
                component="div"
                lineHeight="18px"
                color="text.secondary"
              >
                Dasboard
              </Typography>
              <Divider orientation="vertical" sx={{ height: '12px' }} />
              <Typography
                variant="caption"
                component="div"
                lineHeight="18px"
                color="text.secondary"
              >
                vendor@email.com
              </Typography>
            </Box>
          </Box>

          {isDesktop && <ButtonLogout />}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header