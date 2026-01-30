'use client';

import { Dialog, DialogContent, Box } from '@mui/material';

interface MenuDetailDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function MenuDetailDialog({ open, onClose }: MenuDetailDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', md: '90%' },
          height: { xs: '100%', md: '90%' },
          maxWidth: 'none',
          maxHeight: { xs: 'none', md: '90vh' },
          minHeight: { xs: '100vh', md: 400 },
        },
      }}
    >
      <DialogContent sx={{ p: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            flexShrink: 0,
            p: 2,
            borderBottom: '1px solid',
            borderColor: 'divider',
            fontWeight: 600,
          }}
        >
          Header
        </Box>
        <Box
          sx={{
            flex: 1,
            minHeight: 200,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            p: 2,
            gap: 2,
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Box
            sx={{
              flex: { xs: '0 0 auto', md: '0 0 50%' },
              minHeight: { xs: 200, md: 'auto' },
              border: '1px dashed',
              borderColor: 'divider',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'text.secondary',
            }}
          >
            Image
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              border: '1px dashed',
              borderColor: 'divider',
              p: 2,
            }}
          >
            <Box sx={{ flex: 1, color: 'text.secondary' }}>Description</Box>
            <Box sx={{ flexShrink: 0, color: 'text.secondary' }}>Options</Box>
          </Box>
        </Box>
        <Box
          sx={{
            flexShrink: 0,
            p: 2,
            borderTop: '1px solid',
            borderColor: 'divider',
            fontWeight: 600,
          }}
        >
          Footer
        </Box>
      </DialogContent>
    </Dialog>
  );
}
