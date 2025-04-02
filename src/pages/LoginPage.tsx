import { useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useAuthStore } from '../stores/authStore.ts'
import logo from '../assets/icons/logo.svg'
import pill from '../assets/images/pill-w1x.png'
import LoginForm from '../components/LoginForm.tsx'
import DecorLines from '../components/ui/DecorLines.tsx'

function LoginPage() {
  const error = useAuthStore((state) => state.error)

  const createErrorMessage = (error: string) => {
    if (`${error}` === 'Firebase: Error (auth/too-many-requests).') {
      console.log('Too many requests.')
    } else if (
      `${error}` === 'Firebase: Error (auth/network-request-failed).'
    ) {
      console.log('Problem with network')
    } else if (
      `${error}` === 'Firebase: Error (auth/invalid-login-credentials).'
    ) {
      console.log('Email or password is not correct')
    } else if (`${error}` === 'Firebase: Error (auth/invalid-credential).') {
      console.log('User not found')
    } else {
      console.log(error)
    }
    return error
  }

  useEffect(() => {
    if (error) {
      createErrorMessage(error)
    }
  }, [error])

  return (
    <Box
      sx={{
        position: 'relative',
        pt: { mobile: '24px', desktop: '28px' },
        px: { mobile: '20px', tablet: '32px', desktop: '100px' },
        height: '100vh',
        overflow: 'hidden'
      }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          marginBottom: { mobile: '148px', tablet: '204px', desktop: '226px' }
        }}
      >
        <img src={logo} alt="logo" width="44px" height="44px" />
        <Typography
          component="span"
          sx={{ fontSize: '20px', fontWeight: '600', lineHeight: '20px' }}
        >
          E-Pharmacy
        </Typography>
      </Box>

      <Box sx={{ display: { desktop: 'flex', gap: '150px' } }}>
        <Box
          sx={{
            position: 'relative',
            marginBottom: { mobile: '40px', tablet: '50px', desktop: '0px' },
            width: { mobile: '335px', tablet: '614px' }
          }}
        >
          <Typography
            sx={{
              fontSize: { mobile: '28px', tablet: '54px' },
              fontWeight: '600',
              lineHeight: { mobile: '34px', tablet: '60px' }
            }}
          >
            Your medication, delivered Say goodbye to all
            <Typography
              component="span"
              sx={{
                fontSize: { mobile: '28px', tablet: '54px' },
                fontWeight: '600',
                lineHeight: { mobile: '34px', tablet: '60px' },
                color: 'accent.main'
              }}
            >
              {' '}your healthcare{' '}
            </Typography>
            worries with us
          </Typography>
          <Box
            sx={{
              position: 'absolute',
              top: { mobile: '-60px', tablet: '-104px' },
              right: { mobile: '24px', tablet: '24px' }
            }}
          >
            <Box sx={{ display: { mobile: 'block', tablet: 'none' } }}>
              <img src={pill} alt="pill" height="95" width="95" />
            </Box>
            <Box sx={{ display: { mobile: 'none', tablet: 'block' } }}>
              <img src={pill} alt="pill" height="175" width="175" />
            </Box>
          </Box>
        </Box>
        <LoginForm />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: { mobile: '-130px', tablet: '-20px' },
          right: { mobile: '-160px', tablet: '-148px' },
          zIndex: -3,
        }}
      >
        <DecorLines />
      </Box>
    </Box>
  )
}

export default LoginPage