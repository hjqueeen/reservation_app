"use client";

import React, { useState, useEffect, useRef } from "react";
import { getMockCategories, getMockMenuItems } from "../_data/mockMenuData";
import MenuItemCard from "../_components/ui/MenuItemCard";
import CategoryButton from "../_components/ui/CategoryButton";
import CategorySectionHeader from "../_components/ui/CategorySectionHeader";
import { useCartStore } from "../_store/useCartStore";

import {
  Grid,
  Stack,
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
} from "@mui/material";
import Receipt from "@mui/icons-material/Receipt";

const MenuScreen = () => {
  var categories = getMockCategories("1").sort(
    (a, b) => a.displayOrder - b.displayOrder,
  );
  var menuItems = getMockMenuItems("1");
  var menuItemsByCategory = Object.groupBy(
    menuItems,
    (item) => item.categoryId,
  );

  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [selectedLanguage, setSelectedLanguage] = useState("de");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = useState(false);

  const cartItemAmount = useCartStore((state) => state.getCartItemCount());
  var selectedTable = 12;

  function selectCategory(categoryId: string) {
    setSelectedCategory(categoryId);
    document
      .getElementById("category-" + categoryId)
      ?.scrollIntoView({ behavior: "smooth" });
    setScrolling(true);
  }

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScrollEnd = () => {
      setScrolling(false);
    };

    container.addEventListener("scrollend", handleScrollEnd);

    return () => {
      container.removeEventListener("scrollend", handleScrollEnd);
    };
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || scrolling) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryId = entry.target.id.replace("category-", "");
            setSelectedCategory(categoryId);
          }
        });
      },
      {
        root: container,
        rootMargin: "-10px 0px -90% 0px",
        threshold: 0,
      },
    );

    categories.forEach((category) => {
      const element = document.getElementById("category-" + category.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [categories, scrolling]);

  function navigateToCart() {
    // Navigation logic to cart screen
  }

  function navigateToOrders() {
    // Navigation logic to orders screen
  }

  function navigateToReceipt() {
    // Navigation logic to receipt screen
  }

  function openDetailMenu(id: string) {
    // Logic to open detail menu for a specific item
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <AppBar component="nav" sx={{ width: "100%", position: "inherit" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            sx={{ display: { xs: "none", sm: "block", fontWeight: "bold" } }}
          >
            HWR
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              sx={{ color: selectedLanguage === "de" ? "white" : "#fad49e" }}
              onClick={() => setSelectedLanguage("de")}
            >
              Deutsch
            </Button>
            <Button
              sx={{ color: selectedLanguage === "en" ? "white" : "#fad49e" }}
              onClick={() => setSelectedLanguage("en")}
            >
              English
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button sx={{ color: "#fff" }} onClick={navigateToOrders}>
              Bestellung
            </Button>
            <Button sx={{ color: "#fff" }} onClick={navigateToCart}>
              Warenkorb ({cartItemAmount})
            </Button>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontSize: "0.7rem" }}>Tisch</Typography>
              <Typography sx={{ fontSize: "1.4rem" }} fontWeight="bold">
                {selectedTable}
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container rows={1} sx={{ mt: 4 }}>
        <Box
          width="18%"
          height="100%"
          sx={{
            mr: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Stack spacing={2} sx={{ width: "100%" }}>
            {categories.map((category, index) => (
              <CategoryButton
                text={category.name}
                isSelected={category.id === selectedCategory}
                onClick={() => selectCategory(category.id)}
                fullWidth
              />
            ))}
          </Stack>
          <Button
            variant="outlined"
            sx={{
              color: "red",
              borderColor: "red",
              borderRadius: 2,
              borderWidth: 2,
              position: "relative",
              bottom: 16,
              "&:hover": { color: "red", borderColor: "red", borderWidth: 2 },
            }}
            startIcon={<Receipt />}
            onClick={navigateToReceipt}
          >
            Rechnung
          </Button>
        </Box>
        <Grid
          ref={scrollContainerRef}
          container
          spacing={3}
          width="78%"
          sx={{ overflowY: "scroll", maxHeight: "90vh", ml: 2 }}
        >
          {categories.map((category) => {
            const items = menuItemsByCategory[category.id];
            return (
              <Box width="100%" key={category.id} sx={{ mb: 4 }}>
                <CategorySectionHeader
                  id={"category-" + category.id}
                  category={category.name}
                />
                <Grid container spacing={3} width="78%">
                  {items &&
                    items.map((item) => (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={item.id}
                        height="400px"
                        width="100%"
                      >
                        <MenuItemCard
                          name={item.name}
                          description={item.description}
                          price={item.price}
                          imageUrl={item.imageUrl}
                          tags={item.tags}
                          onClick={() => openDetailMenu(item.id)}
                        />
                      </Grid>
                    ))}
                </Grid>
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuScreen;
