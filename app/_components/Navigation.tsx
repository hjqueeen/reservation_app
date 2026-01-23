"use client";

import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { Home, Info, ContactMail, Palette, Login, Settings, Widgets } from "@mui/icons-material";
import { useRouter, usePathname } from "next/navigation";

const drawerWidth = 240;

const menuItems = [
  { text: "Home", icon: <Home />, path: "/" },
  { text: "Theme", icon: <Palette />, path: "/theme" },
  { text: "UI Components", icon: <Widgets />, path: "/ui-components" },
  { text: "Login", icon: <Login />, path: "/login" },
  { text: "Select Mode", icon: <Settings />, path: "/select-mode" },
];

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

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
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                selected={pathname === item.path}
                onClick={() => router.push(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
