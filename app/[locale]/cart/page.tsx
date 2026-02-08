"use client";

import React from "react";
import { CartState, useCartStore } from "@/app/_store/useCartStore";
import { Box, Card, Typography, Button, IconButton } from "@mui/material";
import CartItem from "@/app/_components/CartItem";
import { CartEntry } from "@/app/_types/cart";
import { ArrowBack } from "@mui/icons-material";

const CartPage = () => {
  const cartItems: Record<string, CartEntry> = useCartStore(
    (state: CartState) => state.items,
  );

  const totalPrice = useCartStore((state: CartState) => state.calculateTotal());

  const updateItemQuantity = useCartStore(
    (state: CartState) => state.updateItemQuantity,
  );

  function sendOrder() {
    // Logic to send order to backend would go here
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <IconButton aria-label="Back" onClick={() => window.history.back()}>
          <ArrowBack sx={{ color: "#000" }} />
        </IconButton>
        <Typography
          variant="h1"
          sx={{ margin: 2, textAlign: "center", flex: 1 }}
        >
          Warenkorb
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          m: 2,
          flex: 1,
          overflowY: "auto",
          minHeight: 0,
        }}
      >
        {cartItems &&
          Object.entries(cartItems).map(([key, item]: [string, CartEntry]) => (
            <Card key={key} sx={{ minHeight: "100px", boxShadow: 3 }}>
              <CartItem
                name={item.menuItem.name}
                imageUrl={item.menuItem.imageUrl}
                price={item.menuItem.price}
                amount={item.orderItem.quantity}
                options={
                  item.orderItem.selectedOptionNames
                    ? Object.values(item.orderItem.selectedOptionNames).flat()
                    : undefined
                }
                updateQuantity={(newAmount) =>
                  updateItemQuantity(key, newAmount)
                }
              />
            </Card>
          ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          p: 2,
          m: 2,
          gap: 2,
          borderTop: "1px solid #ccc",
        }}
      >
        <Box
          width="100%"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Gesamt:
          </Typography>
          <Typography variant="h3" fontWeight="bold" color="primary">
            {totalPrice.toFixed(2)} €
          </Typography>
        </Box>

        <Button
          variant="contained"
          onClick={sendOrder}
          color="primary"
          sx={{ fontWeight: "bold", borderRadius: 2 }}
        >
          Bestellen
        </Button>
      </Box>
    </Box>
  );
};

export default CartPage;
