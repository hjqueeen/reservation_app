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
          id: 'wahl_e74db637-fd76-461c-9a72-58b23115c23e',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 1,
          options: [
            { id: '8d47d003-c626-4013-abf3-37e970829fdc', name: 'Extra Käse', price: 0.0 },
          ],
        },
        {
          id: 'pflicht_e74db637-fd76-461c-9a72-58b23115c23e',
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
          id: 'wahl_ec06ee17-979d-41f2-9536-579b61d38e51',
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
          id: 'pflicht_ec06ee17-979d-41f2-9536-579b61d38e51',
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
          id: 'wahl_1c7ba226-378e-497e-bd7d-3be2c9e68c74',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 1,
          options: [
            { id: 'c53f42ad-4e59-4157-8562-ada8e658de55', name: 'Schärfegrad Mittel', price: 0.0 },
          ],
        },
        {
          id: 'pflicht_1c7ba226-378e-497e-bd7d-3be2c9e68c74',
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
          id: 'wahl_7ba2c5a1-e118-4b87-b243-13df63c9573d',
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
          id: 'pflicht_7ba2c5a1-e118-4b87-b243-13df63c9573d',
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
          id: 'wahl_1583f1f6-3e37-4d32-b8fd-daca0e93451d',
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
          id: 'wahl_a809146f-7b9e-4329-842f-0c97d59b3d52',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 1,
          options: [
            { id: '90157a30-1017-4d07-8560-4c590f2a218b', name: 'Mit Brot', price: 0.0 },
          ],
        },
        {
          id: 'pflicht_a809146f-7b9e-4329-842f-0c97d59b3d52',
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
          id: 'wahl_861d4d5f-c8cd-4224-a9d7-6657f5610923',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 1,
          options: [
            { id: '90157a30-1017-4d07-8560-4c590f2a218b', name: 'Mit Brot', price: 0.0 },
          ],
        },
        {
          id: 'pflicht_861d4d5f-c8cd-4224-a9d7-6657f5610923',
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
          id: 'wahl_7ab4d8a0-a3c1-4be9-a7ee-a38513d5b9b5',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 2,
          options: [
            { id: '2ee3c2d5-eacb-4806-bbaf-7fff8911e149', name: 'Oliven', price: 0.0 },
            { id: '8d47d003-c626-4013-abf3-37e970829fdc', name: 'Extra Käse', price: 0.0 },
          ],
        },
        {
          id: 'pflicht_7ab4d8a0-a3c1-4be9-a7ee-a38513d5b9b5',
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
          id: 'wahl_3bceebe6-49e9-4acf-9302-5e56c8b70c02',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 2,
          options: [
            { id: '605d8a50-021b-44aa-a7ca-ee886184b735', name: 'Ohne Brot', price: 0.0 },
            { id: '4205fb0a-0906-404a-8f7a-d3708c089a36', name: 'Chili-Flocken', price: 0.0 },
          ],
        },
        {
          id: 'pflicht_3bceebe6-49e9-4acf-9302-5e56c8b70c02',
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
          id: 'wahl_1d87316d-9339-4463-b9ad-7dc257a27efa',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 1,
          options: [
            { id: 'c53f42ad-4e59-4157-8562-ada8e658de55', name: 'Schärfegrad Mittel', price: 0.0 },
          ],
        },
        {
          id: 'pflicht_1d87316d-9339-4463-b9ad-7dc257a27efa',
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
    // Additional menu items from template_data.json (12-27)
    {
      id: 'f3c487bf-1169-4ef0-bf79-6d844ffba150',
      name: 'Caesar Salad Italiano',
      description: 'Römersalat mit Caesar-Dressing, Croutons und Parmesan nach italienischer Art.',
      price: 7.0,
      categoryId: '03',
      categoryName: 'Salads',
      imageUrl: 'https://files.pengueen.de/api/download/b1427843-6e83-4c1a-a82d-873fd262d71f.jpg?showFile=true',
      tags: ['glutenfrei', 'klassiker'],
      optionGroups: [
        {
          id: 'wahl_f3c487bf-1169-4ef0-bf79-6d844ffba150',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 1,
          options: [
            { id: 'c53f42ad-4e59-4157-8562-ada8e658de55', name: 'Schärfegrad Mittel', price: 0.0 },
          ],
        },
        {
          id: 'pflicht_f3c487bf-1169-4ef0-bf79-6d844ffba150',
          name: 'Pflichtoptionen',
          required: true,
          maxSelection: 3,
          options: [
            { id: '51ccae0e-c0cc-46bf-8d7f-6c25b6616bda', name: 'Dressing Balsamico', price: 0.0 },
            { id: '38dd324f-8e06-4bec-955a-adea7a77595c', name: 'Dressing Joghurt', price: 0.0 },
            { id: '73901dab-087d-4a47-82db-98b8f3391f69', name: 'Groß', price: 0.0 },
          ],
        },
      ],
      restaurantId,
    },
    // Soups (categoryId: "04")
    {
      id: '9681c4ae-d174-4c99-ae74-825e58ea7baa',
      name: 'Minestrone della Casa',
      description: 'Traditionelle italienische Gemüsesuppe mit saisonalem Gemüse, Bohnen und Kräutern.',
      price: 6.0,
      categoryId: '04',
      categoryName: 'Soups',
      imageUrl: 'https://files.pengueen.de/api/download/b5a6c153-cdcd-4ea4-af7e-335defd8a5f6.jpg?showFile=true',
      tags: ['vegan'],
      optionGroups: [
        {
          id: 'wahl_9681c4ae-d174-4c99-ae74-825e58ea7baa',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 2,
          options: [
            { id: '605d8a50-021b-44aa-a7ca-ee886184b735', name: 'Ohne Brot', price: 0.0 },
            { id: '90157a30-1017-4d07-8560-4c590f2a218b', name: 'Mit Brot', price: 0.0 },
          ],
        },
        {
          id: 'pflicht_9681c4ae-d174-4c99-ae74-825e58ea7baa',
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
      id: 'd2e44755-586b-4243-b5a6-17536f266eb1',
      name: 'Zuppa di Pomodoro',
      description: 'Cremige Tomatensuppe nach italienischer Art, verfeinert mit Basilikum und Sahne.',
      price: 8.0,
      categoryId: '04',
      categoryName: 'Soups',
      imageUrl: 'https://files.pengueen.de/api/download/d781a7dd-4b99-4bb9-952c-adb092dcdb18.jpg?showFile=true',
      tags: ['vegan', 'vegetarisch'],
      optionGroups: [
        {
          id: 'wahl_d2e44755-586b-4243-b5a6-17536f266eb1',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 2,
          options: [
            { id: '90157a30-1017-4d07-8560-4c590f2a218b', name: 'Mit Brot', price: 0.0 },
            { id: '605d8a50-021b-44aa-a7ca-ee886184b735', name: 'Ohne Brot', price: 0.0 },
          ],
        },
        {
          id: 'pflicht_d2e44755-586b-4243-b5a6-17536f266eb1',
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
      id: '98386396-c7e9-4cf2-a0b4-172d106ef015',
      name: 'Zuppa di Lenticchie',
      description: 'Herzhafte Linsensuppe mit italienischen Gewürzen und Gemüse.',
      price: 7.5,
      categoryId: '04',
      categoryName: 'Soups',
      imageUrl: 'https://files.pengueen.de/api/download/b4b0b2f4-dd66-4368-bbb6-72b6dd450367.jpg?showFile=true',
      tags: ['vegan', 'vegetarisch'],
      optionGroups: [
        {
          id: 'wahl_98386396-c7e9-4cf2-a0b4-172d106ef015',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 2,
          options: [
            { id: '605d8a50-021b-44aa-a7ca-ee886184b735', name: 'Ohne Brot', price: 0.0 },
            { id: '90157a30-1017-4d07-8560-4c590f2a218b', name: 'Mit Brot', price: 0.0 },
          ],
        },
        {
          id: 'pflicht_98386396-c7e9-4cf2-a0b4-172d106ef015',
          name: 'Pflichtoptionen',
          required: true,
          maxSelection: 2,
          options: [
            { id: 'da36a360-567c-4818-88e3-07274bbf7668', name: 'Mittel', price: 0.0 },
            { id: 'cd502479-7dd8-4e72-80e3-70dbd27f7068', name: 'Klein', price: 0.0 },
          ],
        },
      ],
      restaurantId,
    },
    // Pizza (categoryId: "05")
    {
      id: '985fa704-88e0-4ac1-8422-f8ad9cf50cb5',
      name: 'Pizza Quattro Stagioni',
      description: 'Tomatensauce, Mozzarella, Schinken, Champignons, Artischocken und Oliven – jede Zutat in ihrem Viertel.',
      price: 13.0,
      categoryId: '05',
      categoryName: 'Pizza',
      imageUrl: 'https://files.pengueen.de/api/download/abade81a-8e9c-4f94-8849-9e5bf5861bc0.jpg?showFile=true',
      tags: ['klassiker'],
      optionGroups: [
        {
          id: 'wahl_985fa704-88e0-4ac1-8422-f8ad9cf50cb5',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 3,
          options: [
            { id: 'cbbf974c-88c4-4ece-8280-8c451e1d23e4', name: 'Rindfleisch', price: 0.0 },
            { id: '8d47d003-c626-4013-abf3-37e970829fdc', name: 'Extra Käse', price: 0.0 },
            { id: '2ee3c2d5-eacb-4806-bbaf-7fff8911e149', name: 'Oliven', price: 0.0 },
          ],
        },
        {
          id: 'pflicht_985fa704-88e0-4ac1-8422-f8ad9cf50cb5',
          name: 'Pflichtoptionen',
          required: true,
          maxSelection: 2,
          options: [
            { id: '73901dab-087d-4a47-82db-98b8f3391f69', name: 'Groß', price: 0.0 },
            { id: 'da36a360-567c-4818-88e3-07274bbf7668', name: 'Mittel', price: 0.0 },
          ],
        },
      ],
      restaurantId,
    },
    {
      id: '2e02dc29-3647-4aa6-9f88-79f0b311801e',
      name: 'Pizza Parma',
      description: 'Tomatensauce, Mozzarella, Parmaschinken, Rucola und Parmesanspäne.',
      price: 15.0,
      categoryId: '05',
      categoryName: 'Pizza',
      imageUrl: 'https://files.pengueen.de/api/download/934819a7-336a-4a39-b4bb-07b07af98e17.jpg?showFile=true',
      tags: ['signature', 'klassiker'],
      optionGroups: [
        {
          id: 'wahl_2e02dc29-3647-4aa6-9f88-79f0b311801e',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 2,
          options: [
            { id: '2ee3c2d5-eacb-4806-bbaf-7fff8911e149', name: 'Oliven', price: 0.0 },
            { id: '8d47d003-c626-4013-abf3-37e970829fdc', name: 'Extra Käse', price: 0.0 },
          ],
        },
        {
          id: 'pflicht_2e02dc29-3647-4aa6-9f88-79f0b311801e',
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
      id: '1793078d-086b-4450-b180-4a21402111f0',
      name: 'Pizza Frutti di Mare',
      description: 'Tomatensauce, Mozzarella und eine Auswahl an Meeresfrüchten mit Knoblauch.',
      price: 17.0,
      categoryId: '05',
      categoryName: 'Pizza',
      imageUrl: 'https://files.pengueen.de/api/download/63baf090-6eb2-4537-919a-a0e80c16a70d.jpg?showFile=true',
      tags: ['klassiker'],
      optionGroups: [
        {
          id: 'wahl_1793078d-086b-4450-b180-4a21402111f0',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 1,
          options: [
            { id: '8d47d003-c626-4013-abf3-37e970829fdc', name: 'Extra Käse', price: 0.0 },
          ],
        },
        {
          id: 'pflicht_1793078d-086b-4450-b180-4a21402111f0',
          name: 'Pflichtoptionen',
          required: true,
          maxSelection: 2,
          options: [
            { id: '73901dab-087d-4a47-82db-98b8f3391f69', name: 'Groß', price: 0.0 },
            { id: 'da36a360-567c-4818-88e3-07274bbf7668', name: 'Mittel', price: 0.0 },
          ],
        },
      ],
      restaurantId,
    },
    // Pasta (categoryId: "06")
    {
      id: 'cff9bf4c-0e95-433b-9b57-ee85e986dfa5',
      name: 'Spaghetti Carbonara',
      description: 'Spaghetti mit cremiger Eiersauce, italienischem Speck und frisch geriebenem Parmesan.',
      price: 15.0,
      categoryId: '06',
      categoryName: 'Pasta',
      imageUrl: 'https://files.pengueen.de/api/download/d1b11b2c-4077-43cb-9204-4d0efd73ec33.jpg?showFile=true',
      tags: ['signature', 'klassiker'],
      optionGroups: [
        {
          id: 'wahl_cff9bf4c-0e95-433b-9b57-ee85e986dfa5',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 2,
          options: [
            { id: '8d47d003-c626-4013-abf3-37e970829fdc', name: 'Extra Käse', price: 0.0 },
            { id: '2ee3c2d5-eacb-4806-bbaf-7fff8911e149', name: 'Oliven', price: 0.0 },
          ],
        },
        {
          id: 'pflicht_cff9bf4c-0e95-433b-9b57-ee85e986dfa5',
          name: 'Pflichtoptionen',
          required: true,
          maxSelection: 2,
          options: [
            { id: '73901dab-087d-4a47-82db-98b8f3391f69', name: 'Groß', price: 0.0 },
            { id: 'da36a360-567c-4818-88e3-07274bbf7668', name: 'Mittel', price: 0.0 },
          ],
        },
      ],
      restaurantId,
    },
    {
      id: '41a48d18-4d07-4430-a387-21bf9d9cf9e8',
      name: 'Penne Arrabbiata',
      description: 'Penne in scharfer Tomatensauce mit Knoblauch und Chili.',
      price: 14.0,
      categoryId: '06',
      categoryName: 'Pasta',
      imageUrl: 'https://files.pengueen.de/api/download/122ba8b4-9476-429e-bbb5-360b5efd2793.jpg?showFile=true',
      tags: ['scharf', 'signature'],
      optionGroups: [
        {
          id: 'wahl_41a48d18-4d07-4430-a387-21bf9d9cf9e8',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 2,
          options: [
            { id: '2ee3c2d5-eacb-4806-bbaf-7fff8911e149', name: 'Oliven', price: 0.0 },
            { id: 'c7634293-35be-43bc-83e0-18403397169a', name: 'Ei', price: 0.0 },
          ],
        },
        {
          id: 'pflicht_41a48d18-4d07-4430-a387-21bf9d9cf9e8',
          name: 'Pflichtoptionen',
          required: true,
          maxSelection: 3,
          options: [
            { id: '73901dab-087d-4a47-82db-98b8f3391f69', name: 'Groß', price: 0.0 },
            { id: '4f40935a-4947-4d0a-bbff-6b4acb2135eb', name: 'Pastasorte Spaghetti', price: 0.0 },
            { id: 'f67e1a4e-009f-4ae3-9515-bdc6cabf3686', name: 'Pastasorte Penne', price: 0.0 },
          ],
        },
      ],
      restaurantId,
    },
    {
      id: '247b078e-5878-49a7-9976-524f74973518',
      name: 'Tagliatelle al Salmone',
      description: 'Bandnudeln in feiner Sahnesauce mit Lachs und einem Hauch Zitrone.',
      price: 17.0,
      categoryId: '06',
      categoryName: 'Pasta',
      imageUrl: 'https://files.pengueen.de/api/download/ad4dc4f9-19a5-4053-8028-cd7b709ab6a6.jpg?showFile=true',
      tags: ['glutenfrei', 'klassiker'],
      optionGroups: [
        {
          id: 'wahl_247b078e-5878-49a7-9976-524f74973518',
          name: 'Wahloptionen',
          required: false,
          maxSelection: 3,
          options: [
            { id: '2ee3c2d5-eacb-4806-bbaf-7fff8911e149', name: 'Oliven', price: 0.0 },
            { id: '8d47d003-c626-4013-abf3-37e970829fdc', name: 'Extra Käse', price: 0.0 },
            { id: 'cbbf974c-88c4-4ece-8280-8c451e1d23e4', name: 'Rindfleisch', price: 0.0 },
          ],
        },
        {
          id: 'pflicht_247b078e-5878-49a7-9976-524f74973518',
          name: 'Pflichtoptionen',
          required: true,
          maxSelection: 4,
          options: [
            { id: 'cd502479-7dd8-4e72-80e3-70dbd27f7068', name: 'Klein', price: 0.0 },
            { id: 'da36a360-567c-4818-88e3-07274bbf7668', name: 'Mittel', price: 0.0 },
            { id: '73901dab-087d-4a47-82db-98b8f3391f69', name: 'Groß', price: 0.0 },
            { id: '6b74eace-e719-4faa-a3a6-a84ec8a97247', name: 'Pastasorte Fusilli', price: 0.0 },
          ],
        },
      ],
      restaurantId,
    },
    // Drinks (categoryId: "08")
    {
      id: '62650105-3bc3-4d6b-bb50-d0e140191647',
      name: 'Hausgemachte Zitronenlimonade',
      description: 'Erfrischende Zitronenlimonade nach Hausrezept, leicht gesüßt.',
      price: 9.0,
      categoryId: '08',
      categoryName: 'Drinks',
      imageUrl: 'https://files.pengueen.de/api/download/6ec058c1-1855-43cb-84db-0d0ee7e89f79.jpg?showFile=true',
      tags: ['kalt'],
      optionGroups: [
        {
          id: 'pflicht_62650105-3bc3-4d6b-bb50-d0e140191647',
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
      id: 'f864e39c-e9b0-4372-866d-b03f46b961aa',
      name: 'San Pellegrino Aranciata 0,33l',
      description: 'Italienische Orangenlimonade mit natürlichem Fruchtgeschmack.',
      price: 5.0,
      categoryId: '08',
      categoryName: 'Drinks',
      imageUrl: 'https://files.pengueen.de/api/download/f5f3601e-8714-4e52-acbe-b6dfa306f8f3.jpg?showFile=true',
      tags: ['kalt'],
      optionGroups: [],
      restaurantId,
    },
    {
      id: '26ad946e-dcd5-4901-853b-6710b4b7fa45',
      name: 'Espresso Doppio',
      description: 'Doppelter italienischer Espresso, kräftig und aromatisch.',
      price: 6.0,
      categoryId: '08',
      categoryName: 'Drinks',
      imageUrl: 'https://files.pengueen.de/api/download/6cdb8621-beea-4af7-a9e6-334b0af03f79.jpg?showFile=true',
      tags: [],
      optionGroups: [],
      restaurantId,
    },
    // Desserts (categoryId: "09")
    {
      id: 'a373e034-f0fb-4cc6-9671-0179c27e066f',
      name: 'Tiramisu della Casa',
      description: 'Hausgemachtes Tiramisu mit Mascarpone, Espresso und Kakao.',
      price: 9.0,
      categoryId: '09',
      categoryName: 'Desserts',
      imageUrl: 'https://files.pengueen.de/api/download/0ca09870-7906-4dec-af05-e8fdde8a2a9e.jpg?showFile=true',
      tags: [],
      optionGroups: [],
      restaurantId,
    },
    {
      id: 'c26aac25-dafd-49b6-96f6-73870eab23a9',
      name: 'Panna Cotta Vaniglia',
      description: 'Cremige Vanille-Panna-Cotta mit fruchtigem Beerenspiegel.',
      price: 9.0,
      categoryId: '09',
      categoryName: 'Desserts',
      imageUrl: 'https://files.pengueen.de/api/download/2f14ee6a-74ee-4522-b601-c266420efee7.jpg?showFile=true',
      tags: [],
      optionGroups: [],
      restaurantId,
    },
    {
      id: '6f6bd83b-2879-4945-a3fb-976560493e65',
      name: 'Gelato Misto (2 Kugeln)',
      description: 'Zwei Kugeln italienisches Eis nach Wahl.',
      price: 8.0,
      categoryId: '09',
      categoryName: 'Desserts',
      imageUrl: 'https://files.pengueen.de/api/download/af37ae3b-9517-4485-b951-415fe9c4bb13.jpg?showFile=true',
      tags: [],
      optionGroups: [],
      restaurantId,
    },
  ];
}
