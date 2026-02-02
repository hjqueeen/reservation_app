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
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        {/* {category && (
          <Chip
            label={category}
            size="small"
            color="secondary"
            sx={{ alignSelf: "flex-start", mb: 1 }}
          />
        )} */}
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
