"use client";

import { Typography, Box, Divider } from "@mui/material";

interface CategorySectionHeaderProps {
  id: string;
  category: string;
}

export default function CategorySectionHeader({
  id,
  category,
}: CategorySectionHeaderProps) {
  return (
    <Box data-category id={id} sx={{ py: 2 }}>
      <Typography
        variant="h5"
        component="h2"
        fontWeight="bold"
        gutterBottom
        color="primary"
      >
        {category}
      </Typography>
      <Divider />
    </Box>
  );
}
