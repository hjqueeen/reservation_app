"use client";

import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { Home, Info, Palette, Login, Settings, Widgets } from "@mui/icons-material";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "../_hooks/useLocale";

const drawerWidth = 240;

const menuItems = [
  { text: "Home", icon: <Home />, path: "/" },
  { text: "Theme", icon: <Palette />, path: "/theme" },
  { text: "UI Components", icon: <Widgets />, path: "/ui-components" },
  { text: "Login", icon: <Login />, path: "/login" },
  { text: "Select Mode", icon: <Settings />, path: "/select-mode" },
  { text: "Menu Screen", icon: <Widgets />, path: "/menu-screen" },
  { text: "Menu Detail", icon: <Widgets />, path: "/menu-detail" },
  { text: "Home", icon: <Info />, path: "/home" },
  { text: "Cart", icon: <Info/>,path:"/cart" },
  { text: "Staff Kitchen", icon: <Info/>,path:"/staff-kitchen" }
];

function pathWithLocale(locale: string, path: string): string {
  const base = path === "/" ? "" : path;
  return `/${locale}${base}`;
}

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
        display: { xs: "none", md: "block" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuItems.map((item) => {
            const fullPath = pathWithLocale(locale, item.path);
            return (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                selected={pathname === fullPath}
                onClick={() => router.push(fullPath)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
          })}
        </List>
      </Box>
    </Drawer>
  );
}
