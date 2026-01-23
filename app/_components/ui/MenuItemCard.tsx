'use client';

import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';

interface MenuItemCardProps {
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  category?: string;
  onClick?: () => void;
}

export default function MenuItemCard({
  name,
  description,
  price,
  imageUrl,
  category,
  onClick,
}: MenuItemCardProps) {
  return (
    <Card
      onClick={onClick}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.2s ease-in-out',
        '&:hover': onClick
          ? {
              boxShadow: 8,
              transform: 'translateY(-4px)',
            }
          : {},
      }}
    >
      {imageUrl && (
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={name}
          sx={{ objectFit: 'cover' }}
        />
      )}
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {category && (
          <Chip
            label={category}
            size="small"
            color="secondary"
            sx={{ alignSelf: 'flex-start', mb: 1 }}
          />
        )}
        <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
          {name}
        </Typography>
        {description && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, flexGrow: 1 }}
          >
            {description}
          </Typography>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" color="primary" fontWeight="bold">
            ${price.toFixed(2)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
