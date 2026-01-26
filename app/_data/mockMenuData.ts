/**
 * Mock menu data based on template_data.json structure.
 * These categories and menu items are extracted from template.sections[0].elements[0].value (categories)
 * and template.sections[0].elements[1].value (menu items), processed using toMenuData conversion logic.
 * 
 * Prices are in EUR (Euro).
 */

import { Category, MenuItem } from '../_types/menu';

/**
 * Provides mock categories based on template_data.json structure.
 * These categories are extracted from template.sections[0].elements[0].value.
 */
export function getMockCategories(restaurantId: string): Category[] {
  return [
    { id: '01', name: 'Specials', restaurantId, displayOrder: 1 },
    { id: '02', name: 'Appetizer', restaurantId, displayOrder: 2 },
    { id: '03', name: 'Salads', restaurantId, displayOrder: 3 },
    { id: '04', name: 'Soups', restaurantId, displayOrder: 4 },
    { id: '05', name: 'Pizza', restaurantId, displayOrder: 5 },
    { id: '06', name: 'Pasta', restaurantId, displayOrder: 6 },
    { id: '07', name: 'Snacks', restaurantId, displayOrder: 7 },
    { id: '08', name: 'Drinks', restaurantId, displayOrder: 8 },
    { id: '09', name: 'Desserts', restaurantId, displayOrder: 9 },
  ];
}

/**
 * Provides mock menu items based on template_data.json structure.
 * These menu items are extracted from template.sections[0].elements[1].value
 * and processed using toMenuData conversion logic.
 * Prices are in EUR (Euro).
 */
export function getMockMenuItems(restaurantId: string): MenuItem[] {
  return [
    // Snacks (categoryId: "07")
    {
      id: 'e74db637-fd76-461c-9a72-58b23115c23e',
      name: 'Garlic Bread',
      description: 'Knusprig gebackenes Knoblauchbrot mit Olivenöl und italienischen Kräutern.',
      price: 4.8,
      categoryId: '07',
      categoryName: 'Snacks',
      imageUrl: 'https://files.pengueen.de/api/download/0f71f58c-9831-4b84-954e-e4c3821ee8d5.jpg?showFile=true',
      tags: ['vegan', 'klassiker'],
      optionGroups: [
        {
          id: 'wahloptionen_e74db637-fd76-461c-9a72-58b23115c23e',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 1,
          options: [
            { id: '8d47d003-c626-4013-abf3-37e970829fdc', name: 'Extra Käse', price: 0.0 },
          ],
        },
        {
          id: 'pflichtoptionen_e74db637-fd76-461c-9a72-58b23115c23e',
          name: 'Pflichtoptionen',
          required: true,
          maxSelection: 2,
          options: [
            { id: 'cd502479-7dd8-4e72-80e3-70dbd27f7068', name: 'Klein', price: 0.0 },
            { id: 'da36a360-567c-4818-88e3-07274bbf7668', name: 'Mittel', price: 0.0 },
          ],
        },
      ],
      restaurantId,
    },
    {
      id: 'ab414325-8119-4634-a2e8-97032dfd1480',
      name: 'Bruschetta Classica',
      description: 'Geröstetes Ciabatta mit frischen Tomaten, Knoblauch, Basilikum und Olivenöl.',
      price: 6.2,
      categoryId: '07',
      categoryName: 'Snacks',
      imageUrl: 'https://files.pengueen.de/api/download/926ea95d-aec8-4455-bbe3-4939d5f02d55.jpg?showFile=true',
      tags: ['scharf', 'vegan'],
      optionGroups: [],
      restaurantId,
    },
    {
      id: 'ec06ee17-979d-41f2-9536-579b61d38e51',
      name: 'Chicken Wings',
      description: 'Sechs knusprige Hähnchenflügel, serviert mit Dip nach Wahl.',
      price: 8.9,
      categoryId: '07',
      categoryName: 'Snacks',
      imageUrl: 'https://files.pengueen.de/api/download/30eae854-93ad-4aee-b141-babbe78b5282.jpg?showFile=true',
      tags: ['scharf'],
      optionGroups: [
        {
          id: 'wahloptionen_ec06ee17-979d-41f2-9536-579b61d38e51',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 4,
          options: [
            { id: '8d47d003-c626-4013-abf3-37e970829fdc', name: 'Extra Käse', price: 0.0 },
            { id: '440f7e87-2e49-44b1-83a9-b09cc6af8ee2', name: 'Schärfegrad Mild', price: 0.0 },
            { id: 'c53f42ad-4e59-4157-8562-ada8e658de55', name: 'Schärfegrad Mittel', price: 0.0 },
            { id: '4b311b8a-2133-4a42-bc5e-1c5ff55020ba', name: 'Schärfegrad Scharf', price: 0.0 },
          ],
        },
        {
          id: 'pflichtoptionen_ec06ee17-979d-41f2-9536-579b61d38e51',
          name: 'Pflichtoptionen',
          required: true,
          maxSelection: 3,
          options: [
            { id: '38dd324f-8e06-4bec-955a-adea7a77595c', name: 'Dressing Joghurt', price: 0.0 },
            { id: '51ccae0e-c0cc-46bf-8d7f-6c25b6616bda', name: 'Dressing Balsamico', price: 0.0 },
            { id: '5c3a70a7-f20c-46c7-a81d-f2187f0e4e77', name: 'Dressing Caesar', price: 0.0 },
          ],
        },
      ],
      restaurantId,
    },
    // Specials (categoryId: "01")
    {
      id: '1c7ba226-378e-497e-bd7d-3be2c9e68c74',
      name: 'Antipasti Italiano',
      description: 'Auswahl an gegrilltem Gemüse, italienischen Käsesorten, Oliven und luftgetrocknetem Schinken.',
      price: 12.9,
      categoryId: '01',
      categoryName: 'Specials',
      imageUrl: 'https://files.pengueen.de/api/download/804f8e1f-d5b9-49c4-86ed-429ab6113631.jpg?showFile=true',
      tags: ['klassiker'],
      optionGroups: [
        {
          id: 'wahloptionen_1c7ba226-378e-497e-bd7d-3be2c9e68c74',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 1,
          options: [
            { id: 'c53f42ad-4e59-4157-8562-ada8e658de55', name: 'Schärfegrad Mittel', price: 0.0 },
          ],
        },
        {
          id: 'pflichtoptionen_1c7ba226-378e-497e-bd7d-3be2c9e68c74',
          name: 'Pflichtoptionen',
          required: true,
          maxSelection: 1,
          options: [
            { id: '5c3a70a7-f20c-46c7-a81d-f2187f0e4e77', name: 'Dressing Caesar', price: 0.0 },
          ],
        },
      ],
      restaurantId,
    },
    {
      id: '7ba2c5a1-e118-4b87-b243-13df63c9573d',
      name: 'Arancini Siciliani (4 Stück)',
      description: 'Frittierte Reisbällchen aus Sizilien, gefüllt mit Mozzarella und serviert mit Tomatendip.',
      price: 7.5,
      categoryId: '01',
      categoryName: 'Specials',
      imageUrl: 'https://files.pengueen.de/api/download/478bd5e9-3edc-49b2-859f-2b869152ab02.png?showFile=true',
      tags: ['klassiker', 'kalt'],
      optionGroups: [
        {
          id: 'wahloptionen_7ba2c5a1-e118-4b87-b243-13df63c9573d',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 3,
          options: [
            { id: 'c53f42ad-4e59-4157-8562-ada8e658de55', name: 'Schärfegrad Mittel', price: 0.0 },
            { id: '4b311b8a-2133-4a42-bc5e-1c5ff55020ba', name: 'Schärfegrad Scharf', price: 0.0 },
            { id: '440f7e87-2e49-44b1-83a9-b09cc6af8ee2', name: 'Schärfegrad Mild', price: 0.0 },
          ],
        },
        {
          id: 'pflichtoptionen_7ba2c5a1-e118-4b87-b243-13df63c9573d',
          name: 'Pflichtoptionen',
          required: true,
          maxSelection: 1,
          options: [
            { id: '38dd324f-8e06-4bec-955a-adea7a77595c', name: 'Dressing Joghurt', price: 0.0 },
          ],
        },
      ],
      restaurantId,
    },
    {
      id: '1583f1f6-3e37-4d32-b8fd-daca0e93451d',
      name: 'Burrata mit Kirschtomaten',
      description: 'Cremige Burrata auf marinierten Kirschtomaten, verfeinert mit Basilikum und Olivenöl.',
      price: 9.8,
      categoryId: '01',
      categoryName: 'Specials',
      imageUrl: 'https://files.pengueen.de/api/download/f301b61e-119e-4249-8cd0-f6e64da80354.jpg?showFile=true',
      tags: ['kalt', 'klassiker'],
      optionGroups: [
        {
          id: 'wahloptionen_1583f1f6-3e37-4d32-b8fd-daca0e93451d',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 2,
          options: [
            { id: '90157a30-1017-4d07-8560-4c590f2a218b', name: 'Mit Brot', price: 0.0 },
            { id: '605d8a50-021b-44aa-a7ca-ee886184b735', name: 'Ohne Brot', price: 0.0 },
          ],
        },
      ],
      restaurantId,
    },
    // Appetizer (categoryId: "02")
    {
      id: 'a809146f-7b9e-4329-842f-0c97d59b3d52',
      name: 'Prosciutto e Melone',
      description: 'Luftgetrockneter italienischer Schinken mit frischer Honigmelone.',
      price: 8.0,
      categoryId: '02',
      categoryName: 'Appetizer',
      imageUrl: 'https://files.pengueen.de/api/download/822a9fdc-ca03-4de9-8032-e548c63d60c4.png?showFile=true',
      tags: ['klassiker', 'kalt'],
      optionGroups: [
        {
          id: 'wahloptionen_a809146f-7b9e-4329-842f-0c97d59b3d52',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 1,
          options: [
            { id: '90157a30-1017-4d07-8560-4c590f2a218b', name: 'Mit Brot', price: 0.0 },
          ],
        },
        {
          id: 'pflichtoptionen_a809146f-7b9e-4329-842f-0c97d59b3d52',
          name: 'Pflichtoptionen',
          required: true,
          maxSelection: 1,
          options: [
            { id: '5c3a70a7-f20c-46c7-a81d-f2187f0e4e77', name: 'Dressing Caesar', price: 0.0 },
          ],
        },
      ],
      restaurantId,
    },
    {
      id: '861d4d5f-c8cd-4224-a9d7-6657f5610923',
      name: 'Vitello Tonnato',
      description: 'Zartes Kalbfleisch in feiner Thunfischsauce, garniert mit Kapern.',
      price: 12.0,
      categoryId: '02',
      categoryName: 'Appetizer',
      imageUrl: 'https://files.pengueen.de/api/download/f89cbb15-b13e-436b-99dd-3b1188c9a4c3.jpg?showFile=true',
      tags: ['kalt', 'klassiker'],
      optionGroups: [
        {
          id: 'wahloptionen_861d4d5f-c8cd-4224-a9d7-6657f5610923',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 1,
          options: [
            { id: '90157a30-1017-4d07-8560-4c590f2a218b', name: 'Mit Brot', price: 0.0 },
          ],
        },
        {
          id: 'pflichtoptionen_861d4d5f-c8cd-4224-a9d7-6657f5610923',
          name: 'Pflichtoptionen',
          required: true,
          maxSelection: 1,
          options: [
            { id: 'da36a360-567c-4818-88e3-07274bbf7668', name: 'Mittel', price: 0.0 },
          ],
        },
      ],
      restaurantId,
    },
    {
      id: '7ab4d8a0-a3c1-4be9-a7ee-a38513d5b9b5',
      name: 'Focaccia Rosmarino',
      description: 'Hausgemachte Focaccia mit Rosmarin, Meersalz und Olivenöl.',
      price: 5.8,
      categoryId: '02',
      categoryName: 'Appetizer',
      imageUrl: 'https://files.pengueen.de/api/download/4ef2f271-03b6-470f-82ed-b677c6702e98.png?showFile=true',
      tags: ['vegan', 'vegetarisch'],
      optionGroups: [
        {
          id: 'wahloptionen_7ab4d8a0-a3c1-4be9-a7ee-a38513d5b9b5',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 2,
          options: [
            { id: '2ee3c2d5-eacb-4806-bbaf-7fff8911e149', name: 'Oliven', price: 0.0 },
            { id: '8d47d003-c626-4013-abf3-37e970829fdc', name: 'Extra Käse', price: 0.0 },
          ],
        },
        {
          id: 'pflichtoptionen_7ab4d8a0-a3c1-4be9-a7ee-a38513d5b9b5',
          name: 'Pflichtoptionen',
          required: true,
          maxSelection: 1,
          options: [
            { id: '38dd324f-8e06-4bec-955a-adea7a77595c', name: 'Dressing Joghurt', price: 0.0 },
          ],
        },
      ],
      restaurantId,
    },
    // Salads (categoryId: "03")
    {
      id: '3bceebe6-49e9-4acf-9302-5e56c8b70c02',
      name: 'Insalata Mista',
      description: 'Frischer gemischter Salat mit Tomaten, Gurken, roten Zwiebeln und Hausdressing.',
      price: 7.0,
      categoryId: '03',
      categoryName: 'Salads',
      imageUrl: 'https://files.pengueen.de/api/download/0f0d4eaf-96e4-4bd1-9bd3-48e4f6527851.jpeg?showFile=true',
      tags: ['glutenfrei', 'klassiker'],
      optionGroups: [
        {
          id: 'wahloptionen_3bceebe6-49e9-4acf-9302-5e56c8b70c02',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 2,
          options: [
            { id: '605d8a50-021b-44aa-a7ca-ee886184b735', name: 'Ohne Brot', price: 0.0 },
            { id: '4205fb0a-0906-404a-8f7a-d3708c089a36', name: 'Chili-Flocken', price: 0.0 },
          ],
        },
        {
          id: 'pflichtoptionen_3bceebe6-49e9-4acf-9302-5e56c8b70c02',
          name: 'Pflichtoptionen',
          required: true,
          maxSelection: 2,
          options: [
            { id: 'da36a360-567c-4818-88e3-07274bbf7668', name: 'Mittel', price: 0.0 },
            { id: '73901dab-087d-4a47-82db-98b8f3391f69', name: 'Groß', price: 0.0 },
          ],
        },
      ],
      restaurantId,
    },
    {
      id: '1d87316d-9339-4463-b9ad-7dc257a27efa',
      name: 'Rucola Parmesan',
      description: 'Rucolasalat mit Kirschtomaten, Parmesanspänen und Balsamico-Creme.',
      price: 8.0,
      categoryId: '03',
      categoryName: 'Salads',
      imageUrl: 'https://files.pengueen.de/api/download/3c6290c4-1d9e-46fb-98e4-5e67fdf6eb82.jpg?showFile=true',
      tags: ['glutenfrei', 'signature'],
      optionGroups: [
        {
          id: 'wahloptionen_1d87316d-9339-4463-b9ad-7dc257a27efa',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 1,
          options: [
            { id: 'c53f42ad-4e59-4157-8562-ada8e658de55', name: 'Schärfegrad Mittel', price: 0.0 },
          ],
        },
        {
          id: 'pflichtoptionen_1d87316d-9339-4463-b9ad-7dc257a27efa',
          name: 'Pflichtoptionen',
          required: true,
          maxSelection: 2,
          options: [
            { id: '51ccae0e-c0cc-46bf-8d7f-6c25b6616bda', name: 'Dressing Balsamico', price: 0.0 },
            { id: '38dd324f-8e06-4bec-955a-adea7a77595c', name: 'Dressing Joghurt', price: 0.0 },
          ],
        },
      ],
      restaurantId,
    },
  ];
}
