'use client';

import React, { useState, useMemo } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
  useTheme,
} from '@mui/material';
import Close from '@mui/icons-material/Close';
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { getMockMenuItems } from '../_data/mockMenuData';
import { useCartStore } from '../_store/useCartStore';
import type { MenuItem, MenuOptionGroup, MenuOption } from '../_types/menu';
import type { SelectedOptions } from '../_types/cart';
import type { CartState } from '../_store/useCartStore';

const RESTAURANT_ID = 'restaurant-1';

// Optional main ingredients text per item (MenuItem has no mainIngredients in type)
const MAIN_INGREDIENTS: Record<string, string> = {
  '1c7ba226-378e-497e-bd7d-3be2c9e68c74':
    'Reis, Rindfleisch, verschiedene Gemüsesorten (Karotten, Zwiebeln, Pilze, Zucchini, Kohl, Salat), -Sauce, Ei, Sesamöl',
};

function getMainIngredients(item: MenuItem): string {
  return MAIN_INGREDIENTS[item.id] ?? item.description ?? '';
}

function buildDefaultSelectedOptions(item: MenuItem): SelectedOptions {
  const selectedOptions: Record<string, string[]> = {};
  for (const group of item.optionGroups) {
    if (group.required && group.options.length) {
      const take = Math.min(group.maxSelection, group.options.length);
      selectedOptions[group.id] = group.options.slice(0, take).map((o) => o.id);
    }
  }
  return { menuItemId: item.id, selectedOptions };
}

export default function MenuDetailPage() {
  const theme = useTheme();
  const router = useRouter();
  const searchParams = useSearchParams();
  const itemId = searchParams.get('id');
  const items = useMemo(() => getMockMenuItems(RESTAURANT_ID), []);
  const item = useMemo(
    () =>
      items.find((i: MenuItem) => i.id === itemId) ??
      items.find((i: MenuItem) => i.name === 'Antipasti Italiano') ??
      items[0],
    [items, itemId]
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>(() =>
    item ? buildDefaultSelectedOptions(item) : { menuItemId: '', selectedOptions: {} }
  );
  const addItemToOrder = useCartStore((s: CartState) => s.addItemToOrder);

  const totalPrice = useMemo(() => {
    if (!item) return 0;
    let total = item.price;
    for (const [groupId, optionIds] of Object.entries(selectedOptions.selectedOptions)) {
      const ids = optionIds as string[];
      const group = item.optionGroups.find((g: MenuOptionGroup) => g.id === groupId);
      if (!group) continue;
      for (const optionId of ids) {
        const opt = group.options.find((o: MenuOption) => o.id === optionId);
        if (opt) total += opt.price;
      }
    }
    return total * quantity;
  }, [item, selectedOptions, quantity]);

  const handleAddToCart = () => {
    if (item) {
      addItemToOrder(item, selectedOptions, quantity);
      router.back();
    }
  };

  if (!item) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography>Artikel nicht gefunden.</Typography>
      </Box>
    );
  }

  const mainIngredients = getMainIngredients(item);
  const categories = [
    'spe',
    'app',
    'sala',
    'sou',
    'pizz',
    'pas',
    'sna',
    'drin',
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Background layout: header + sidebar (dimmed) */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        {/* Top bar */}
        <Box
          sx={{
            height: 56,
            px: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            bgcolor: 'rgba(0,0,0,0.6)',
          }}
        >
          <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
            PENCHEER
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.primary.main }}>
            Tisch 1
          </Typography>
        </Box>
        {/* Sidebar */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 56,
            bottom: 0,
            width: 72,
            bgcolor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 2,
            gap: 1,
          }}
        >
          {categories.map((cat, idx) => (
            <Typography
              key={cat}
              variant="caption"
              sx={{
                color: idx === 0 ? theme.palette.primary.main : 'rgba(255,255,255,0.7)',
              }}
            >
              {cat}
            </Typography>
          ))}
          <Box sx={{ flex: 1 }} />
          <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.8)' }}>
            <NotificationsOutlined />
          </IconButton>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
            Rechnung
          </Typography>
        </Box>
      </Box>

      {/* Centered modal */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 900,
            bgcolor: '#fff',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 24,
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '90vh',
          }}
        >
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
              onClick={() => router.back()}
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
              {mainIngredients && (
                <>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Hauptzutaten:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {mainIngredients}
                  </Typography>
                </>
              )}
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
                    onClick={() => setQuantity((q: number) => Math.max(1, q - 1))}
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
                    onClick={() => setQuantity((q: number) => q + 1)}
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
        </Box>
      </Box>
    </Box>
  );
}
