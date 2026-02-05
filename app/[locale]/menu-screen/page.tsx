"use client";

import React, { useState, useEffect, useRef } from "react";

import {
  Grid,
  Stack,
  Box,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Drawer,
} from "@mui/material";

import Receipt from "@mui/icons-material/Receipt";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { getMockCategories, getMockMenuItems } from "@/app/_data/mockMenuData";
import { MenuItem } from "@/app/_types/menu";
import CategorySectionHeader from "@/app/_components/ui/CategorySectionHeader";
import MenuItemCard from "@/app/_components/ui/MenuItemCard";
import CategoryButton from "@/app/_components/ui/CategoryButton";
import MenuButton from "@/app/_components/ui/MenuButton";
import { CartState, useCartStore } from "@/app/_store/useCartStore";

const MenuScreen = () => {
  var categories = getMockCategories("1").sort(
    (a, b) => a.displayOrder - b.displayOrder,
  );
  var menuItems = getMockMenuItems("1");
  var menuItemsByCategory: Record<string, MenuItem[]> = menuItems.reduce(
    (categoryGroups, item) => {
      const categoryId = item.categoryId;
      if (!categoryGroups[categoryId]) {
        categoryGroups[categoryId] = [];
      }
      categoryGroups[categoryId].push(item);
      return categoryGroups;
    },
    {} as Record<string, MenuItem[]>,
  );

  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [selectedLanguage, setSelectedLanguage] = useState("de");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = useState(false);

  const cartItemAmount = useCartStore((state: CartState) =>
    state.getCartItemCount(),
  );
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

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState: boolean) => !prevState);
  };

  const sidebar = (
    <Box
      height="100%"
      sx={{
        m: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Stack
        spacing={2}
        sx={{ width: "100%", overflowY: "auto", maxHeight: "80%" }}
      >
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
  );

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
          <IconButton
            sx={{
              color: "#fff",
              display: { xs: "block", md: "none" },
            }}
            aria-label="show sidebar"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1, md: 2 },
              alignItems: "center",
            }}
          >
            <MenuButton
              text="Deutsch"
              icon={
                <img loading="lazy" src={`https://flagcdn.com/w20/de.png`} />
              }
              color={selectedLanguage === "de" ? "white" : "#fad49e"}
              onClick={() => setSelectedLanguage("de")}
            />
            <MenuButton
              text="English"
              icon={
                <img loading="lazy" src={`https://flagcdn.com/w20/gb.png`} />
              }
              color={selectedLanguage === "en" ? "white" : "#fad49e"}
              onClick={() => setSelectedLanguage("en")}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, md: 3 },
            }}
          >
            <MenuButton
              text="Bestellung"
              icon={<Receipt />}
              color="#fff"
              onClick={navigateToOrders}
            />
            <MenuButton
              text={`Warenkorb (${cartItemAmount})`}
              icon={<ShoppingCart />}
              color="#fff"
              onClick={navigateToCart}
            />
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
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "80%",
          },
        }}
        onClick={handleDrawerToggle}
      >
        {sidebar}
      </Drawer>

      <Box sx={{ display: "flex", mt: 4 }}>
        <Box width="18%" sx={{ display: { xs: "none", sm: "block" } }}>
          {sidebar}
        </Box>
        <Grid
          ref={scrollContainerRef}
          container
          spacing={3}
          width="100%"
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
                <Grid container spacing={3} width="100%">
                  {items &&
                    items.map((item) => (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={item.id}
                        maxHeight="400px"
                        maxWidth={{ xs: "50%", sm: "100%" }}
                        minWidth={{ sm: "250px" }}
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
      </Box>
    </Box>
  );
};

export default MenuScreen;
