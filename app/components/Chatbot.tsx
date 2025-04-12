"use client";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const theme = useTheme();

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');

      // Simulate a bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is a bot response!', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100vh',
        p: 2,
        mt: 12,
        px: 2,
        bgcolor: 'background.default',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: 600,
          height: '70vh',
          overflowY: 'auto',
          mb: 1, // Reduced margin-bottom value
          p: 2,
          bgcolor: theme.palette.mode === 'dark' ? 'white' : 'background.paper',
        }}
      >
        {messages.map((message, index) => (
          <Typography
            key={index}
            align={message.sender === 'user' ? 'right' : 'left'}
            sx={{
              bgcolor: message.sender === 'user' ? 'primary.light' : 'secondary.light',
              color: 'text.primary',
              p: 1,
              borderRadius: 1,
              mb: 1,
            }}
          >
            {message.text}
          </Typography>
        ))}
      </Paper>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          maxWidth: 600,
          mb: 27, // Reduced margin-bottom value for input box
        }}
      >
        <TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
          sx={{
            mr: 1, // Added margin-right value for spacing between input and button
          }}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </Box>
    </Box>
  );
}
