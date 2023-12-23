import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { NavBar } from './components/NavBar';
import { ProductGrid } from './components/ProductGrid';
import { CategoryList } from './components/CategoryList';
import { useState } from 'react';
import { CategorySelector } from './components/CategorySelector';
import { SortSelector } from './components/SortSelector';

export interface ProductQuery {
  category: string | null;
  selector: string | null;
}

function App() {
  const [productQuery, setProductQuery] = useState<ProductQuery>({} as ProductQuery);


  return(
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`}}>
      <GridItem area={'nav'}><NavBar /></GridItem>
      <Show above='lg'>
        <GridItem area={'aside'}><CategoryList selectedCategory={productQuery.category} onSelectCategory={(category) => setProductQuery({...productQuery, category: category})} /></GridItem>
      </Show>
      <GridItem area={'main'}>
        <HStack spacing={5} padding={4} marginBottom={5}>
          <CategorySelector categorySelector={productQuery.selector} onSelect={(category) => setProductQuery({...productQuery, selector: category})} />
          <SortSelector />
        </HStack>
        <ProductGrid productQuery={productQuery} /></GridItem>
    </Grid>
  ) 
  
}

export default App;
