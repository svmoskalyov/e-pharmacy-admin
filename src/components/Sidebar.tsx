import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Box, List, ListItem, ListItemButton, Tooltip } from '@mui/material'
import { Icon } from '@iconify/react'
import ButtonLogout from './ui/ButtonLogout.tsx'

interface SidebarProps {
  onClose?: () => void;
}

const data = [
  { icon: 'ic:round-dashboard', label: 'dashboard' },
  { icon: 'ic:round-shopping-cart', label: 'orders' },
  { icon: 'mingcute:flask-fill', label: 'products' },
  { icon: 'mdi:local-pharmacy', label: 'suppliers' },
  { icon: 'mdi:users', label: 'customers' }
]

function Sidebar({ onClose }: SidebarProps) {
  const [selectedValue, setSelectedValue] = useState<string>('')
  const { pathname } = useLocation()
  const location = pathname.split('/')[1]

  const handleListItemClick = (choiced: string) => {
    setSelectedValue(choiced)
    if (onClose) {
      onClose()
    }
  }

  useEffect(() => {
    setSelectedValue(location)
  }, [location])

  return (
    <Box
      sx={{
        gridArea: 'sidebar',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '88vh',
        borderRight: { desktop: '1px solid rgba(29, 30, 33, 0.1)' }
      }}
    >
      <List disablePadding sx={{ marginTop: '40px' }}>
        {data.map((item) => (
          <ListItem
            key={item.label}
            disablePadding
            sx={{ justifyContent: 'center', marginBottom: '14px' }}
          >
            <Tooltip title={item.label} placement="right" arrow>
              <ListItemButton
                component={Link}
                to={item.label}
                selected={selectedValue === item.label}
                onClick={() => handleListItemClick(item.label)}
                sx={[
                  {
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0',
                    width: '40px',
                    height: '40px',
                    color: 'bg.gray',
                    backgroundColor: 'bg.white',
                    borderRadius: '50px',
                    dropShadow: '0px -1px 7px 0px rgba(71, 71, 71, 0.05)'
                  },
                  {
                    '&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover': {
                      color: 'accent.main',
                      backgroundColor: 'bg.white'
                    }
                  }
                ]}
              >
                <Icon icon={item.icon} width="14" height="14" />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: { mobile: 'block', desktop: 'none' } }}>
        <ButtonLogout />
      </Box>
    </Box>
  )
}

export default Sidebar