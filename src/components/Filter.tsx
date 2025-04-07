import { useState, ChangeEvent } from 'react'
import { Stack, Button, OutlinedInput } from '@mui/material'
import { Icon } from '@iconify/react'

interface FilterProps<T> {
  data: T[];
  keysToSearch: (keyof T)[];
  onFilter: (filteredData: T[]) => void;
  placeholder?: string;
}

function Filter<T>({
                     data,
                     keysToSearch,
                     onFilter,
                     placeholder = 'Enter search term'
                   }: FilterProps<T>) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleSearchClick = () => {
    if (searchTerm.trim() === '') return
    filterData(searchTerm)
  }

  const filterData = (term: string) => {
    const lowerCaseTerm = term.toLowerCase()
    const filtered = data.filter((item) =>
      keysToSearch.some((key) => {
        const value = item[key]
        if (value === null || value === undefined) {
          return false
        }
        const stringValue = String(value).toLowerCase()
        return stringValue.includes(lowerCaseTerm)
      })
    )
    onFilter(filtered)
  }

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      marginBottom="40px"
      sx={{ gap: { mobile: '8px', tablet: '16px' } }}
    >
      <OutlinedInput
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{
          width: { mobile: '215px', tablet: '224px' },
          height: '44px',
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: '18px',
          color: 'text.primary',
          backgroundColor: 'bg.white',
          borderRadius: '60px',
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'accent.main',
              borderWidth: '1px'
            }
          },
          '&:hover:not(.Mui-focused)': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'accent.main'
            }
          }
        }}
      />
      <Button
        variant="contained"
        startIcon={<Icon icon="majesticons:filter-line" width="14" height="14" />}
        onClick={handleSearchClick}
        sx={{
          width: { mobile: '112px', tablet: '116px' },
          height: '44px',
          fontSize: { mobile: '12px', tablet: '14px' },
          fontWeight: 400,
          lineHeight: { mobile: '18px', tablet: '18px' },
          color: 'bg.white',
          backgroundColor: 'accent.main',
          borderRadius: '60px',
          boxShadow: 'none',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'accent.dark',
            boxShadow: 'none'
          }
        }}
      >
        Filter
      </Button>
    </Stack>
  )
}

export default Filter