import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function AppForm(props: React.HTMLAttributes<HTMLDivElement>) {
  const { children } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundImage: 'url(/images/appCurvyLines.png)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ mt: 7, mb: 5, pr: 1, pl: 1 }}>
          {children}
        </Box>
      </Container>
    </Box>
  );
}