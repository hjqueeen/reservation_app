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
    sx={{
      bgcolor: "#FFF8F0",
      borderRadius: 4,
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
      transition: "transform 0.2s, box-shadow 0.2s",
      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)",
      },
    }}
    onClick={onClick}
  >
    <CardContent
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 3,
        px: 4,
      }}
    >
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: "#000000",
            mb: 0.5,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000000",
            opacity: 0.8,
          }}
        >
          {description}
        </Typography>
      </Box>
      <IconButton
        sx={{
          color: "#FF8C00",
          "&:hover": {
            bgcolor: "rgba(255, 140, 0, 0.1)",
          },
        }}
      >
        <ArrowForward sx={{ fontSize: 28 }} />
      </IconButton>
    </CardContent>
  </Card>
  );
}
