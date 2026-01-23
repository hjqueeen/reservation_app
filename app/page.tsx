"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Chip,
  Stack,
  TextField,
  Switch,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Slider,
  Rating,
  Alert,
  AlertTitle,
  LinearProgress,
  CircularProgress,
  Avatar,
  Badge,
  IconButton,
  Divider,
  Paper,
  Grid,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  Fab,
} from "@mui/material";
import {
  Favorite,
  Share,
  Delete,
  Add,
  Home as MuiHome,
  Settings,
  Notifications,
  Search,
} from "@mui/icons-material";
import { useState } from "react";
// import { useUiStore } from "./store/useUiStore";

export default function Home() {
  const [tabValue, setTabValue] = useState(0);
  const [sliderValue, setSliderValue] = useState(30);
  const [ratingValue, setRatingValue] = useState(3);
  const [checked, setChecked] = useState(true);
  // const { globalCount, increment, reset } = useUiStore();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", py: 4 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography variant="h1" component="h1" gutterBottom>
            Material-UI Components Showcase
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mt: 2 }}>
            Explore various MUI components, variants, and presets
          </Typography>
        </Box>

        {/* Buttons Section */}
        <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h3" gutterBottom>
            Buttons
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Different button variants: contained, outlined, text, and sizes
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" disabled>
              Disabled
            </Button>
            <Button variant="contained" size="small">
              Small
            </Button>
            <Button variant="contained" size="large">
              Large
            </Button>
            <Button variant="contained" startIcon={<Add />}>
              With Icon
            </Button>
          </Stack>
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle2" gutterBottom>
              Button Group
            </Typography>
            <ButtonGroup variant="contained" aria-label="outlined button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Box>
        </Paper>

        {/* Global State with Zustand */}
        {/* <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h3" gutterBottom>
            Global State (Zustand)
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Example of global state management using Zustand.
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h6">Global Count: {globalCount}</Typography>
            <Button variant="contained" onClick={increment}>
              Increment
            </Button>
            <Button variant="outlined" color="secondary" onClick={reset}>
              Reset
            </Button>
          </Stack>
        </Paper> */}

        {/* Cards Section */}
        <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h3" gutterBottom>
            Cards
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Card component with media, content, and actions
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  alt="Card image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Card Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is a card with media, content, and action buttons.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Outlined Card
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This card uses the outlined variant.
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton aria-label="add to favorites">
                    <Favorite />
                  </IconButton>
                  <IconButton aria-label="share">
                    <Share />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <Delete />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Simple Card
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A simple card with just content.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>

        {/* Form Controls Section */}
        <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h3" gutterBottom>
            Form Controls
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Text fields, switches, checkboxes, radio buttons, and sliders
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Standard"
                variant="standard"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Outlined"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Filled"
                variant="filled"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Multiline"
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={checked}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
                  />
                }
                label="Switch"
                sx={{ mb: 2, display: "block" }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Checkbox"
                sx={{ mb: 2, display: "block" }}
              />
              <FormControl component="fieldset" sx={{ mb: 2 }}>
                <FormLabel component="legend">Radio Group</FormLabel>
                <RadioGroup defaultValue="option1" name="radio-buttons-group">
                  <FormControlLabel
                    value="option1"
                    control={<Radio />}
                    label="Option 1"
                  />
                  <FormControlLabel
                    value="option2"
                    control={<Radio />}
                    label="Option 2"
                  />
                  <FormControlLabel
                    value="option3"
                    control={<Radio />}
                    label="Option 3"
                  />
                </RadioGroup>
              </FormControl>
              <Typography gutterBottom>Slider: {sliderValue}</Typography>
              <Slider
                value={sliderValue}
                onChange={(e: Event, newValue: number | number[]) => setSliderValue(newValue as number)}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Grid>
          </Grid>
        </Paper>

        {/* Feedback Components Section */}
        <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h3" gutterBottom>
            Feedback Components
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Alerts, progress indicators, and ratings
          </Typography>
          <Stack spacing={2} sx={{ mb: 3 }}>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              This is an error alert.
            </Alert>
            <Alert severity="warning">
              <AlertTitle>Warning</AlertTitle>
              This is a warning alert.
            </Alert>
            <Alert severity="info">
              <AlertTitle>Info</AlertTitle>
              This is an info alert.
            </Alert>
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              This is a success alert.
            </Alert>
          </Stack>
          <Box sx={{ mb: 3 }}>
            <Typography gutterBottom>Linear Progress</Typography>
            <LinearProgress sx={{ mb: 2 }} />
            <LinearProgress variant="determinate" value={60} sx={{ mb: 2 }} />
            <LinearProgress color="secondary" />
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography gutterBottom>Circular Progress</Typography>
            <Stack direction="row" spacing={2}>
              <CircularProgress />
              <CircularProgress color="secondary" />
              <CircularProgress variant="determinate" value={75} />
            </Stack>
          </Box>
          <Box>
            <Typography gutterBottom>Rating: {ratingValue}</Typography>
            <Rating
              value={ratingValue}
              onChange={(e: React.SyntheticEvent, newValue: number | null) => setRatingValue(newValue || 0)}
              size="large"
            />
          </Box>
        </Paper>

        {/* Data Display Section */}
        <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h3" gutterBottom>
            Data Display
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Avatars, badges, chips, and dividers
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }} flexWrap="wrap" useFlexGap>
            <Avatar>H</Avatar>
            <Avatar sx={{ bgcolor: "primary.main" }}>M</Avatar>
            <Avatar sx={{ bgcolor: "secondary.main" }}>U</Avatar>
            <Avatar sx={{ bgcolor: "success.main" }}>I</Avatar>
            <Badge badgeContent={4} color="primary">
              <Avatar sx={{ bgcolor: "primary.main" }}>N</Avatar>
            </Badge>
            <Badge badgeContent={99} color="error">
              <Avatar sx={{ bgcolor: "error.main" }}>B</Avatar>
            </Badge>
          </Stack>
          <Box sx={{ mb: 3 }}>
            <Typography gutterBottom>Chips</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip label="Default" />
              <Chip label="Primary" color="primary" />
              <Chip label="Secondary" color="secondary" />
              <Chip label="Success" color="success" />
              <Chip label="Error" color="error" />
              <Chip label="Outlined" variant="outlined" />
              <Chip label="Deletable" onDelete={() => {}} />
            </Stack>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color="text.secondary">
            This is a divider above this text.
          </Typography>
        </Paper>

        {/* Navigation Components Section */}
        <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h3" gutterBottom>
            Navigation Components
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Tabs and app bar examples
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Tabs
              value={tabValue}
              onChange={(e: React.SyntheticEvent, newValue: number) => setTabValue(newValue)}
              aria-label="basic tabs example"
            >
              <Tab label="Tab One" />
              <Tab label="Tab Two" />
              <Tab label="Tab Three" />
            </Tabs>
            <Box sx={{ p: 3, border: 1, borderColor: "divider" }}>
              {tabValue === 0 && <Typography>Content for Tab One</Typography>}
              {tabValue === 1 && <Typography>Content for Tab Two</Typography>}
              {tabValue === 2 && <Typography>Content for Tab Three</Typography>}
            </Box>
          </Box>
          <AppBar position="static" sx={{ mb: 2 }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MuiHome />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                App Bar
              </Typography>
              <IconButton color="inherit">
                <Search />
              </IconButton>
              <IconButton color="inherit">
                <Notifications />
              </IconButton>
              <IconButton color="inherit">
                <Settings />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Paper>

        {/* Floating Action Button */}
        <Box sx={{ position: "fixed", bottom: 24, right: 24 }}>
          <Fab color="primary" aria-label="add">
            <Add />
          </Fab>
        </Box>
      </Container>
    </Box>
  );
}
