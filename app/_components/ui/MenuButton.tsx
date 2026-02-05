import React from "react";
import { IconButton, Button, Box } from "@mui/material";

interface MenuButtonProps {
  text: string;
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
}

export default function MenuButton({
  text,
  icon,
  color,
  onClick,
}: MenuButtonProps) {
  return (
    <>
      <Button
        sx={{ color: color, display: { xs: "none", md: "block" } }}
        onClick={onClick}
      >
        {text}
      </Button>
      <IconButton
        sx={{
          color: color,
          display: { xs: "block", md: "none" },
        }}
        aria-label={text}
        onClick={onClick}
      >
        {icon}
      </IconButton>
    </>
  );
}
