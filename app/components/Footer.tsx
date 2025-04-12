import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material/styles';

function Copyright() {
  const theme = useTheme();
  const color = theme.palette.mode === 'light' ? 'black' : 'white';
  
  return (
    <Typography variant="body2" color={color} mt={1}>
      {'Copyright © '}
      <Link color={color}>EcoFind&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const theme = useTheme();
  const color = theme.palette.mode === 'light' ? 'black' : 'white';

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 4, sm: 6 }, // Reduced padding
        textAlign: { sm: 'center', md: 'left' },
        color: color,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          gap: 2,
          color: color,
        }}
      >
        <Typography variant="h6" fontWeight={600} color={color}>
          Project Creators
        </Typography>
        <Stack direction="row" spacing={3}>
          <Box sx={{ textAlign: 'center' }}>
            <Link href="https://www.linkedin.com/in/william-edwardo-gunawan/" target="_blank" color={color}>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Link>
            <Typography variant="body2" color={color}>William Gunawan</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Link href="https://www.linkedin.com/in/devansh-nagpal/" target="_blank" color={color}>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Link>
            <Typography variant="body2" color={color}>Darcy Liu</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Link href="https://www.linkedin.com/in/devansh-nagpal/" target="_blank" color={color}>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Link>
            <Typography variant="body2" color={color}>Devansh Nagpal</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Link href="https://www.linkedin.com/in/amr-radwan1/" target="_blank" color={color}>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Link>
            <Typography variant="body2" color={color}>Amr Radwan</Typography>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pt: { xs: 2, sm: 4 }, // Reduced padding-top
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Copyright />
      </Box>
    </Container>
  );
}
