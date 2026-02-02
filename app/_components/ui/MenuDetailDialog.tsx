'use client';

import React, { useMemo, useState } from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Stack,
  Chip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

import type { MenuItem } from '../../_types/menu';
import type { SelectedOptions } from '../../_types/cart';
import { useCartStore } from '../../_store/useCartStore';
import Close from '@mui/icons-material/Close';

interface MenuDetailDialogProps {
  open: boolean;
  onClose: () => void;
  item: MenuItem;
}

export default function MenuDetailDialog({ open, onClose, item }: MenuDetailDialogProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [quantity, setQuantity] = useState(1);

  const addItemToOrder = useCartStore((state) => state.addItemToOrder);

  const totalPrice = useMemo(() => {
    return item.price * quantity;
  }, [item.price, quantity]);

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    const selectedOptions: SelectedOptions = {
      menuItemId: item.id,
      selectedOptions: {},
    };

    addItemToOrder(item, selectedOptions, quantity);
    onClose();
  };

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
            {/* Modal header */}
          <Box
            sx={{
              flexShrink: 0,
              p: 2,
              pr: 1,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Box>
              <Typography variant="h5" fontWeight={600}>
                {item.name}
              </Typography>
              <Typography variant="body1" color="primary.main" fontWeight={500}>
                Gesamt: {totalPrice.toFixed(2).replace('.', ',')} €
              </Typography>
            </Box>
            <IconButton
              onClick={onClose}
              aria-label="Schließen"
              sx={{ mt: -0.5, mr: -0.5 }}
            >
              <Close />
            </IconButton>
          </Box>

          {/* Modal body: image left, details right */}
          <Box
            sx={{
              flex: 1,
              minHeight: 0,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              overflow: 'auto',
            }}
          >
            <Box
              sx={{
                flex: { xs: '0 0 280px', md: '0 0 50%' },
                minHeight: { xs: 280, md: 320 },
                position: 'relative',
                bgcolor: 'grey.200',
              }}
            >
              {item.imageUrl ? (
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 900px) 100vw, 450px"
                />
              ) : (
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'text.secondary',
                  }}
                >
                  Kein Bild
                </Box>
              )}
            </Box>
            <Box
              sx={{
                flex: 1,
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                minHeight: 0,
              }}
            >
              <Typography variant="body1" color="text.secondary">
                {item.description}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  alignSelf: 'flex-start',
                  bgcolor: 'grey.200',
                  color: 'text.primary',
                  borderColor: 'grey.400',
                }}
              >
                Optionen auswählen
              </Button>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="body2">Menge:</Typography>
                <Stack direction="row" alignItems="center" spacing={0}>
                  <IconButton
                    size="small"
                    onClick={handleDecrease}
                    disabled={quantity <= 1}
                    sx={{ border: '1px solid', borderColor: 'divider' }}
                  >
                    −
                  </IconButton>
                  <Typography
                    variant="body1"
                    sx={{ minWidth: 32, textAlign: 'center' }}
                  >
                    {quantity}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={handleIncrease}
                    sx={{ border: '1px solid', borderColor: 'divider' }}
                  >
                    +
                  </IconButton>
                </Stack>
              </Stack>
            </Box>
          </Box>

          {/* Modal footer */}
          <Box
            sx={{
              flexShrink: 0,
              p: 2,
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              onClick={handleAddToCart}
              sx={{ py: 1.5 }}
            >
              Zum Warenkorb hinzufügen
            </Button>
          </Box>
      </DialogContent>
    </Dialog>
  );
}
