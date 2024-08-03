"use client"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        EcoFind
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

interface UserDetails {
    email: FormDataEntryValue | null;
    password: FormDataEntryValue | null;
    userType: string;
    longitude?: number;
    latitude?: number;
    trashTypes?: string[];
    companyName?: string;
  }

export default function SignUp() {
  const [userType, setUserType] = React.useState('consumer');
  const [longitude, setLongitude] = React.useState('');
  const [latitude, setLatitude] = React.useState('');
  const [trashTypes, setTrashTypes] = React.useState<string[]>([]);
  const [companyName, setCompanyName] = React.useState('');
  const router = useRouter();

  const handleUserTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserType((event.target as HTMLInputElement).value);
  };

  const handleTrashTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTrashTypes(prevState =>
      prevState.includes(value)
        ? prevState.filter(type => type !== value)
        : [...prevState, value]
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userDetails: UserDetails = {
        email: data.get('email'),
        password: data.get('password'),
        userType: userType,
      };
  

    if (userType === 'consumer') {
      userDetails.longitude = parseFloat(longitude);
      userDetails.latitude = parseFloat(latitude);
      userDetails.trashTypes = trashTypes;
      userDetails.companyName = companyName;
    }

    const apiUrl = userType === 'producer' 
      ? 'https://otn6zi7itj.execute-api.us-east-2.amazonaws.com/Stage1/sign-up/producer' 
      : 'https://otn6zi7itj.execute-api.us-east-2.amazonaws.com/Stage1/sign-up/consumer';

    try {
      const response = await axios.post(apiUrl, { body: JSON.stringify(userDetails) });
      const responseData = JSON.parse(response.data.body);
      const { accessToken, refreshToken, idToken } = responseData;
      console.log(accessToken);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('idToken', idToken);
      console.log('Sign-up successful!');
      router.push("http://localhost:3000/")
    } catch (error) {
      console.error('Error during sign-up:', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="text.primary">
                  I am a:
                </Typography>
                <RadioGroup
                  name="userType"
                  value={userType}
                  onChange={handleUserTypeChange}
                  row
                >
                  <FormControlLabel
                    value="consumer"
                    control={<Radio />}
                    label="Consumer"
                  />
                  <FormControlLabel
                    value="producer"
                    control={<Radio />}
                    label="Producer"
                  />
                </RadioGroup>
              </Grid>
              {userType === 'consumer' && (
                <>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="longitude"
                      label="Longitude"
                      type="number"
                      value={longitude}
                      onChange={(e) => setLongitude(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="latitude"
                      label="Latitude"
                      type="number"
                      value={latitude}
                      onChange={(e) => setLatitude(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.primary">
                      Trash Types:
                    </Typography>
                    <FormControlLabel
                      control={<Checkbox value="TPU" onChange={handleTrashTypeChange} />}
                      label="TPU"
                    />
                    <FormControlLabel
                      control={<Checkbox value="PLA" onChange={handleTrashTypeChange} />}
                      label="PLA"
                    />
                    <FormControlLabel
                      control={<Checkbox value="PETG" onChange={handleTrashTypeChange} />}
                      label="PETG"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="companyName"
                      label="Company Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </Grid>
                </>
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="http://localhost:3000/sign-in" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
