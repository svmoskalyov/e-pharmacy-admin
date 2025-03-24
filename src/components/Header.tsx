import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { Icon } from '@iconify/react'

interface HeaderProps {
  onMenuClick: () => void;
}

function Header({ onMenuClick }: HeaderProps) {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            // size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            // sx={{ mr: 2 }}
            // sx={{ mr: 2, display: { sm: 'none' } }}
            onClick={onMenuClick}
          >
            <Icon icon="majesticons:menu" width="24" height="24" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            // sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            AppBar
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header