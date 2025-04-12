"use client"
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppAppBar from './components/AppAppBar';
import FAQ from './components/FAQ';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // Check if tokens exist to determine if the user is logged in
    const accessToken = localStorage.getItem('accessToken');
    setIsLoggedIn(!!accessToken);
  }, []);

  const handleLogout = () => {
    // Clear tokens and user info from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('idToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userType');
    setIsLoggedIn(false);
  };

  return (
    <>
      <AppAppBar
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Highlights />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />     
      </Box>
    </>
  );
}
