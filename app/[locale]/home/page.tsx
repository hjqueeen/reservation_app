'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';

const BACKGROUND_IMAGES = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
];

const CROSSFADE_MS = 800;
const INTERVAL_MS = 2500;

function getRandomOtherIndex(current: number, max: number): number {
  if (max <= 1) return 0;
  const next = Math.floor(Math.random() * max);
  return next === current ? (current + 1) % max : next;
}

const HomePage = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [incomingIndex, setIncomingIndex] = useState(0);
  const [phase, setPhase] = useState<'idle' | 'transitioning'>('idle');

  const advanceSlide = useCallback(() => {
    if (phase === 'transitioning') return;
    const next = getRandomOtherIndex(currentIndex, BACKGROUND_IMAGES.length);
    setIncomingIndex(next);
    setPhase('transitioning');
    const t = setTimeout(() => {
      setCurrentIndex(next);
      setPhase('idle');
    }, CROSSFADE_MS);
    return () => clearTimeout(t);
  }, [currentIndex, phase]);

  useEffect(() => {
    const id = setInterval(advanceSlide, INTERVAL_MS);
    return () => clearInterval(id);
  }, [advanceSlide]);

  const handleDeutsch = () => router.push('/de/login?lang=de');
  const handleEnglish = () => router.push('/en/login?lang=en');

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Two full-screen layers for crossfade */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${BACKGROUND_IMAGES[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: phase === 'transitioning' ? 0 : 1,
          transition: `opacity ${CROSSFADE_MS}ms ease-in-out`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${BACKGROUND_IMAGES[phase === 'transitioning' ? incomingIndex : currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: phase === 'transitioning' ? 1 : 0,
          transition: `opacity ${CROSSFADE_MS}ms ease-in-out`,
        }}
      />

      {/* Center title block */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 2,
          zIndex: 1,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            color: 'white',
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
            fontSize: { xs: '2.5rem', sm: '3.5rem' },
          }}
        >
          MENU
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: 'white',
            textShadow: '0 2px 6px rgba(0,0,0,0.5)',
            mt: 1,
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
          }}
        >
          La Cucina di Marco
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: 'white',
            textShadow: '0 2px 6px rgba(0,0,0,0.5)',
            letterSpacing: '0.25em',
            mt: 0.5,
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
          }}
        >
          ITALIAN RESTAURANT
        </Typography>
      </Box>

      {/* Bottom scrim + language prompt + buttons */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.45)',
            py: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: 'white', textAlign: 'center', fontWeight: 500 }}
          >
            Select Language / Sprache wählen
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ width: '100%', maxWidth: 360, px: 2 }}
          >
            <Button
              fullWidth
              variant="contained"
              disableElevation
              onClick={handleDeutsch}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                fontWeight: 600,
                borderRadius: '9999px',
                py: 1.5,
                '&:hover': { bgcolor: 'grey.100' },
              }}
            >
              Deutsch
            </Button>
            <Button
              fullWidth
              variant="contained"
              disableElevation
              onClick={handleEnglish}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                fontWeight: 600,
                borderRadius: '9999px',
                py: 1.5,
                '&:hover': { bgcolor: 'grey.100' },
              }}
            >
              English
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
