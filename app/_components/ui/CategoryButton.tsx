'use client';

import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface CategoryButtonProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
  fullWidth?: boolean;
}

export default function CategoryButton({
  text,
  isSelected,
  onClick,
  fullWidth = false,
}: CategoryButtonProps) {
  const theme = useTheme();

  return (
    <Button
      onClick={onClick}
      variant={isSelected ? 'contained' : 'text'}
      fullWidth={fullWidth}
      sx={{
        height: 48,
        borderRadius: 2,
        textTransform: 'none',
        fontWeight: isSelected ? 700 : 400,
        justifyContent: 'flex-start',
        textAlign: 'left',
        boxShadow: isSelected ? theme.shadows[4] : 'none',
        '&:hover': {
          backgroundColor: isSelected
            ? theme.palette.primary.dark
            : theme.palette.action.hover,
        },
      }}
    >
      {text}
    </Button>
  );
}
