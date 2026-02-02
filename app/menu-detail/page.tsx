'use client';

import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

import MenuDetailDialog from '../_components/ui/MenuDetailDialog';
import { getMockMenuItems } from '../_data/mockMenuData';
import type { MenuItem } from '../_types/menu';

const MenuDetail = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

 // Temporarily use the first mockup menu item
  const restaurantId = 'demo-restaurant';
  const menuItems: MenuItem[] = getMockMenuItems(restaurantId);
  const menuItem = menuItems[3];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button variant="contained" onClick={() => setDialogOpen(true)}>
        View Menu Detail
      </Button>
      {menuItem && (
        <MenuDetailDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          item={menuItem}
        />
      )}
    </Box>
  );
};

export default MenuDetail;