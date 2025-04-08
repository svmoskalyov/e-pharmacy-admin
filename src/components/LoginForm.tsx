import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, styled, TextField } from '@mui/material'
import { useAuthStore } from '../stores/authStore.ts'

interface LoginFormValues {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('invalid format')
    .min(3)
    .max(64)
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'invalid format')
    .required('email is required'),
  password: yup
    .string()
    .min(8, 'password must contain at least 8 characters')
    .required('password is required')
})

const AuthTextField = styled(TextField)(({ theme }) => ({
    marginBottom: '14px',
    '& .MuiOutlinedInput-root': {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.bg.white,
      borderRadius: '60px',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.accent2.gray,
        borderWidth: '1px'
      },
      '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.accent.main,
          borderWidth: '1px'
        },
        '&.Mui-error .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.error.main
        }
      },
      '&:hover:not(.Mui-focused)': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.accent.main
        }
      }
    },
    '& .MuiInputLabel-outlined': {
      color: theme.palette.text.secondary,
      '&.Mui-focused': {
        color: theme.palette.accent.main,
        '&.Mui-error': {
          color: theme.palette.error.main
        }
      }
    }
  }
))

function LoginForm() {
  const {
    register, handleSubmit, formState: { errors }
  } = useForm<LoginFormValues>({ resolver: yupResolver(schema) })
  const signIn = useAuthStore((state) => state.signIn)
  const isLoading = useAuthStore((state) => state.isLoading)

  const onSubmit: SubmitHandler<LoginFormValues> = data => {
    signIn(data)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: { mobile: '335px', tablet: '323px' }
      }}
    >
      <AuthTextField
        label="Email address"
        variant="outlined"
        fullWidth
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <AuthTextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        {...register('password')}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <Button
        type="submit"
        variant="contained"
        loading={isLoading}
        sx={{
          width: '100%',
          height: '44px',
          color: 'bg.white',
          backgroundColor: 'accent.main',
          borderRadius: '60px',
          boxShadow: 'none',
          textTransform: 'none',
          '&:hover, &:focus': {
            backgroundColor: 'accent.dark'
          },
          '&.Mui-disabled': {
            backgroundColor: 'accent.main'
          },
          '& .MuiButton-loadingIndicator': {
            color: 'bg.white'
          }
        }}
      >
        Log in
      </Button>
    </Box>
  )
}

export default LoginForm