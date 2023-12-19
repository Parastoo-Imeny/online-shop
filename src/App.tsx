import { Grid, GridItem, Show } from '@chakra-ui/react'
import { NavBar } from './components/NavBar';
import { ProductGrid } from './components/ProductGrid';
import { CategoryList } from './components/CategoryList';
import { useState } from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  return(
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`}}>
      <GridItem area={'nav'}><NavBar /></GridItem>
      <Show above='lg'>
        <GridItem area={'aside'}><CategoryList onSelectCategory={(category) => setSelectedCategory(category)} /></GridItem>
      </Show>
      <GridItem area={'main'}><ProductGrid selectedCategory={selectedCategory} /></GridItem>
    </Grid>
  ) 
  
}

export default App;
