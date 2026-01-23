'use client';

import { Typography, Box, Divider } from '@mui/material';

interface CategorySectionHeaderProps {
  category: string;
}

export default function CategorySectionHeader({ category }: CategorySectionHeaderProps) {
  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
        {category}
      </Typography>
      <Divider />
    </Box>
  );
}
