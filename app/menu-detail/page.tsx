'use client';

import React, { useState } from 'react';
import { Button } from '@mui/material';
import MenuDetailDialog from '../_components/ui/MenuDetailDialog';

const MenuDetail = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div
      style={{
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
      <MenuDetailDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </div>
  );
}

export default MenuDetail