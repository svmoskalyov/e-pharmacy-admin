import { Box, Button } from '@mui/material'

interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

function Pagination({ totalPages, currentPage, onPageChange }: PaginationProps) {
  const visiblePages = 5
  const pageNumbers = []

  let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2))
  const endPage = Math.min(totalPages, startPage + visiblePages - 1)

  if (endPage - startPage < visiblePages - 1) {
    startPage = Math.max(1, endPage - visiblePages + 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '20px'
      }}
    >
      {pageNumbers.map((page) => (
        <Button
          key={page}
          variant="text"
          onClick={() => onPageChange(page)}
          sx={{
            padding: '0',
            minWidth: { mobile: '14px', tablet: '19px' },
            height: { mobile: '14px', tablet: '19px' },
            borderRadius: '60px',
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }}
        >
          <Box
            sx={{
              width: '12px',
              height: '12px',
              borderRadius: '60px',
              backgroundColor: currentPage === page ?
                'accent.main' : 'accent.light'
            }}
          ></Box>
        </Button>
      ))}
    </Box>
  )
}

export default Pagination