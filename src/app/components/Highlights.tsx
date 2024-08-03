import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import { useTheme } from '@mui/material/styles';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Adaptable Performance',
    description:
      'Our service effortlessly adjusts to your needs, boosting efficiency and simplifying the disposal process.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Built to Last',
    description:
      'Experience unmatched reliability with our durable solution, ensuring a long-term commitment to sustainability.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Great User Experience',
    description:
      'Enjoy an intuitive and easy-to-use interface that integrates seamlessly into your routine.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Innovative Functionality',
    description:
      'Stay ahead with features that set new standards in waste management, addressing your evolving needs better than the rest.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Reliable Support',
    description:
      'Count on our responsive customer support, offering assistance that goes beyond initial setup.',
  },
  {
    icon: <ChatBubbleRoundedIcon />,
    title: 'Smart Chatbot Assistance',
    description:
      'Get instant answers to all your questions about our service with our intelligent and responsive chatbot.',
  },
];


export default function Highlights() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 10, sm: 20 },
        pb: { xs: 8, sm: 16 },
        color: isDarkMode ? 'white' : 'black',
        bgcolor: isDarkMode ? 'black' : 'white',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h1" color={isDarkMode ? 'white' : 'black'}>
            EcoFind
          </Typography>
          <Typography variant="body1" sx={{ color: isDarkMode ? 'grey.400' : 'grey.600' }}>
          A service that helps users locate the nearest disposal sites for 3D printing waste. It simplifies the process of finding eco-friendly disposal options, making sustainable practices more accessible.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: isDarkMode ? 'grey.800' : 'grey.400',
                  background: 'transparent',
                  backgroundColor: isDarkMode ? 'grey.900' : 'grey.100',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: isDarkMode ? 'grey.400' : 'grey.800' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
