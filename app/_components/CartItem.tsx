"use client";

import { Typography, Box, Chip, Button } from "@mui/material";
import Image from "next/image";

interface CartItemProps {
  name: string;
  imageUrl?: string;
  options?: string[];
  amount?: number;
  updateQuantity?: (newAmount: number) => void;
  price: number;
}

export default function CartItem({
  name,
  imageUrl,
  options,
  price,
  updateQuantity,
  amount = 1,
}: CartItemProps) {
  return (
    <Box
      width="100%"
      height="100px"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }}>
        {imageUrl && (
          <Box sx={{ width: 80, height: 80, flexShrink: 0 }}>
            <Image
              src={imageUrl}
              alt={name}
              width={80}
              height={80}
              style={{
                borderRadius: 8,
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        )}
        <Typography
          variant="h2"
          sx={{ fontSize: 18, fontWeight: "bold", ml: 2 }}
        >
          {name}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          flex: 1,
          gap: 1,
        }}
      >
        {options &&
          options.map((option, index) => (
            <Chip
              key={index}
              label={option}
              size="small"
              sx={{
                bgcolor: "#fff",
                color: "#525252",
                border: "1px solid #525252",
                borderRadius: 1,
              }}
            />
          ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
          <Button
            variant="text"
            onClick={() => {
              if (updateQuantity) {
                updateQuantity(amount - 1);
              }
            }}
            sx={{
              padding: 0,
              color: "#525252",
              fontSize: "1rem",
              fontWeight: "bold",
              minWidth: "40px",
            }}
          >
            -
          </Button>
          <Chip
            label={amount}
            size="small"
            sx={{
              bgcolor: "#3e96f3",
              color: "#fff",
              borderRadius: 1,
            }}
          />
          <Button
            variant="text"
            onClick={() => {
              if (updateQuantity) {
                updateQuantity(amount + 1);
              }
            }}
            sx={{
              padding: 0,
              color: "#525252",
              fontSize: "1rem",
              fontWeight: "bold",
              minWidth: "40px",
            }}
          >
            +
          </Button>
        </Box>
        <Typography variant="h6" width="25%" textAlign="right">
          {(price * amount).toFixed(2)} €
        </Typography>
      </Box>
    </Box>
  );
}
