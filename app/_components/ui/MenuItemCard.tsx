"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
} from "@mui/material";

interface MenuItemCardProps {
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  tags?: string[];
  onClick?: () => void;
}

export default function MenuItemCard({
  name,
  description,
  price,
  imageUrl,
  tags,
  onClick,
}: MenuItemCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        boxShadow: 6,
        transition: "all 0.2s ease-in-out",
      }}
    >
      {tags && (
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            zIndex: 1,
          }}
        >
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              sx={{ bgcolor: "#3e96f3", color: "#fff" }}
            />
          ))}
        </Box>
      )}
      {imageUrl && (
        <CardMedia
          component="img"
          sx={{ height: "50%", objectFit: "cover", overflow: "hidden" }}
          image={imageUrl}
          alt={name}
        />
      )}
      <CardContent
        sx={{
          maxHeight: "50%",
          p: 1,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          component="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem" },
          }}
        >
          {name}
        </Typography>
        {description && (
          <Typography
            color="text.secondary"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              mb: { xs: 1, sm: 2 },
              flexGrow: 1,
              overflow: "hidden",
            }}
          >
            {description}
          </Typography>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" color="primary" fontWeight="bold">
            ${price.toFixed(2)}
          </Typography>

          <Button
            onClick={onClick}
            variant="contained"
            size="small"
            sx={{ borderRadius: 2 }}
          >
            +
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
