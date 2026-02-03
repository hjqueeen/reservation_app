'use client';

import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Divider,
  Stack,
} from '@mui/material';
import { useState } from 'react';
import CategoryButton from '../../_components/ui/CategoryButton';
import RoleSelectionCard from '../../_components/ui/RoleSelectionCard';
import MenuItemCard from '../../_components/ui/MenuItemCard';
import CategorySectionHeader from '../../_components/ui/CategorySectionHeader';

export default function UIComponentsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Appetizers');

  const categories = ['Appetizers', 'Main Courses', 'Desserts', 'Beverages', 'Specials'];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        GastroSoftware UI Components
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Reusable UI components inspired by the GastroSoftware mobile app, built with Material-UI.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* CategoryButton Section */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          CategoryButton
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Button component for category selection with selected state.
        </Typography>
        <Stack spacing={2} sx={{ maxWidth: 300 }}>
          {categories.map((category, index) => (
            <CategoryButton
              key={`category-${index}`}
              text={category}
              isSelected={category === selectedCategory}
              onClick={() => setSelectedCategory(category)}
              fullWidth
            />
          ))}
        </Stack>
      </Paper>

      {/* RoleSelectionCard Section */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          RoleSelectionCard
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Card component for role/mode selection with title, description, and arrow icon.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <RoleSelectionCard
              title="Customer"
              description="Order food and view menu"
              onClick={() => console.log('Customer selected')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RoleSelectionCard
              title="Staff"
              description="Manage orders and kitchen"
              onClick={() => console.log('Staff selected')}
            />
          </Grid>
        </Grid>
      </Paper>

      {/* MenuItemCard Section */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          MenuItemCard
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Card component for displaying menu items with image, name, description, and price.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <MenuItemCard
              name="Grilled Salmon"
              description="Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables"
              price={24.99}
              imageUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"
              onClick={() => console.log('Grilled Salmon clicked')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MenuItemCard
              name="Caesar Salad"
              description="Crisp romaine lettuce with Caesar dressing, croutons, and parmesan"
              price={12.99}
              imageUrl="https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400"
              onClick={() => console.log('Caesar Salad clicked')}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MenuItemCard
              name="Chocolate Cake"
              description="Rich chocolate layer cake with vanilla frosting"
              price={8.99}
              imageUrl="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400"
              onClick={() => console.log('Chocolate Cake clicked')}
            />
          </Grid>
        </Grid>
      </Paper>

      {/* CategorySectionHeader Section */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          CategorySectionHeader
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Header component for category sections with divider.
        </Typography>
        <Box>
          <CategorySectionHeader category="Appetizers" />
          <CategorySectionHeader category="Main Courses" />
          <CategorySectionHeader category="Desserts" />
        </Box>
      </Paper>

      {/* Combined Example */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Combined Example
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Example of components working together in a menu layout.
        </Typography>
        <Box>
          <CategorySectionHeader category={selectedCategory} />
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6} md={4}>
              <MenuItemCard
                name="Sample Item 1"
                description="This is a sample menu item"
                price={15.99}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <MenuItemCard
                name="Sample Item 2"
                description="Another sample menu item"
                price={18.99}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <MenuItemCard
                name="Sample Item 3"
                description="Yet another sample menu item"
                price={22.99}
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
