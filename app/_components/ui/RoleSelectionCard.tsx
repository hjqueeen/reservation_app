'use client';

import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

interface RoleSelectionCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

export default function RoleSelectionCard({
  title,
  description,
  onClick,
}: RoleSelectionCardProps) {
  return (
    <Card
      onClick={onClick}
      sx={{
        height: 120,
        borderRadius: 2,
        cursor: 'pointer',
        boxShadow: 4,
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          boxShadow: 8,
          transform: 'translateY(-2px)',
        },
      }}
    >
      <CardContent
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 3,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
        <IconButton
          sx={{
            color: 'primary.main',
            marginLeft: 2,
          }}
        >
          <ArrowForward />
        </IconButton>
      </CardContent>
    </Card>
  );
}
