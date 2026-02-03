'use client';

import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
} from '@mui/material';
import { theme, darkTheme } from '../../theme/theme';

interface ColorCardProps {
  label: string;
  color: string;
  hex: string;
  description?: string;
}

const ColorCard = ({ label, color, hex, description }: ColorCardProps) => {
  const isLight = color === '#FFFFFF' || color === '#f5f5f5';
  const textColor = isLight ? '#000000' : '#FFFFFF';

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          height: 120,
          backgroundColor: color,
          border: isLight ? '1px solid #e0e0e0' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: textColor,
            fontWeight: 600,
            textShadow: isLight ? 'none' : '0 1px 3px rgba(0,0,0,0.3)',
          }}
        >
          {label}
        </Typography>
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {label}
        </Typography>
        <Chip
          label={hex}
          size="small"
          sx={{
            backgroundColor: color,
            color: textColor,
            fontFamily: 'monospace',
            fontWeight: 600,
            mb: 1,
          }}
        />
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default function ThemePage() {
  const lightPalette = theme.palette;
  const darkPalette = darkTheme.palette;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        GastroSoftware Theme
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        MUI theme based on the color palette used in the GastroSoftware app.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Light Theme */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Light Mode
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Orange color scheme for restaurant theme
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <ColorCard
              label="Primary"
              color={lightPalette.primary.main}
              hex={lightPalette.primary.main}
              description="Used for primary action buttons, links, etc."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ColorCard
              label="Primary Light"
              color={lightPalette.primary.light}
              hex={lightPalette.primary.light}
              description="Light variant of Primary"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ColorCard
              label="Primary Dark"
              color={lightPalette.primary.dark}
              hex={lightPalette.primary.dark}
              description="Dark variant of Primary"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ColorCard
              label="Secondary"
              color={lightPalette.secondary.main}
              hex={lightPalette.secondary.main}
              description="Used for secondary actions"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ColorCard
              label="Secondary Light"
              color={lightPalette.secondary.light}
              hex={lightPalette.secondary.light}
              description="Light variant of Secondary"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ColorCard
              label="Secondary Dark"
              color={lightPalette.secondary.dark}
              hex={lightPalette.secondary.dark}
              description="Dark variant of Secondary"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ColorCard
              label="Tertiary"
              color={lightPalette.tertiary.main}
              hex={lightPalette.tertiary.main}
              description="Third tier color"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ColorCard
              label="Background Default"
              color={lightPalette.background.default}
              hex={lightPalette.background.default}
              description="Default background color"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ColorCard
              label="Background Paper"
              color={lightPalette.background.paper}
              hex={lightPalette.background.paper}
              description="Card and paper background color"
            />
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Dark Theme */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Dark Mode
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Purple/teal color scheme for dark theme
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <ColorCard
              label="Primary"
              color={darkPalette.primary.main}
              hex={darkPalette.primary.main}
              description="Used for primary action buttons, links, etc."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ColorCard
              label="Primary Light"
              color={darkPalette.primary.light}
              hex={darkPalette.primary.light}
              description="Light variant of Primary"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ColorCard
              label="Primary Dark"
              color={darkPalette.primary.dark}
              hex={darkPalette.primary.dark}
              description="Dark variant of Primary"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ColorCard
              label="Secondary"
              color={darkPalette.secondary.main}
              hex={darkPalette.secondary.main}
              description="Used for secondary actions"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ColorCard
              label="Secondary Light"
              color={darkPalette.secondary.light}
              hex={darkPalette.secondary.light}
              description="Light variant of Secondary"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ColorCard
              label="Secondary Dark"
              color={darkPalette.secondary.dark}
              hex={darkPalette.secondary.dark}
              description="Dark variant of Secondary"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ColorCard
              label="Background Default"
              color={darkPalette.background.default}
              hex={darkPalette.background.default}
              description="Default background color"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ColorCard
              label="Background Paper"
              color={darkPalette.background.paper}
              hex={darkPalette.background.paper}
              description="Card and paper background color"
            />
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Color Values Table */}
      <Box>
        <Typography variant="h4" component="h2" gutterBottom>
          Color Values Summary
        </Typography>
        <Paper sx={{ p: 3, mt: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Light Mode
              </Typography>
              <Box component="pre" sx={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
                {`Primary:     ${lightPalette.primary.main}
Secondary:   ${lightPalette.secondary.main}
Tertiary:    ${lightPalette.tertiary.main}
Background:  ${lightPalette.background.default}
Paper:       ${lightPalette.background.paper}
Text:        ${lightPalette.text.primary}`}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Dark Mode
              </Typography>
              <Box component="pre" sx={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
                {`Primary:     ${darkPalette.primary.main}
Secondary:   ${darkPalette.secondary.main}
Tertiary:    ${darkPalette.tertiary.main}
Background:  ${darkPalette.background.default}
Paper:       ${darkPalette.background.paper}
Text:        ${darkPalette.text.primary}`}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}
