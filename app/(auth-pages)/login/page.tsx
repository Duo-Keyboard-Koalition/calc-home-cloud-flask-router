"use client"
import * as React from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';
import ToggleColorMode from '../../components/ToggleColorMode';
import ThemeRegistry from '../../components/ThemeRegistry';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function Copyright(props: any) {
  const theme = useTheme();
  const color = theme.palette.mode === 'light' ? 'text.secondary' : 'text.primary';
  
  return (
    <Typography variant="body2" color={color} align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        EcoFind
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function AuthPage() {
  const router = useRouter();
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  
  React.useEffect(() => {
    if (authStatus === 'authenticated') {
      router.push('/');
    }
  }, [authStatus, router]);
  
  return (
    <ThemeRegistry>
      <Container component="main" maxWidth="xs">
        <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
          <ToggleColorMode />
        </Box>
        <Paper 
          elevation={6} 
          sx={{ 
            p: 4, 
            mt: 8, 
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Authenticator
            initialState="signIn"
            signUpAttributes={['email']}
            socialProviders={[]}
            loginMechanisms={['email']}
          >
            {({ signOut }) => (
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  width: '100%'
                }}
              >
                <Typography component="h1" variant="h5">
                  You are signed in!
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => router.push('/')}
                    sx={{ mr: 2 }}
                  >
                    Go to Home
                  </Link>
                </Box>
              </Box>
            )}
          </Authenticator>
        </Paper>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeRegistry>
  );
}