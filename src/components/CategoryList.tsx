import { List, ListItem, Text } from "@chakra-ui/react";
import useCategories from "./hooks/useCategories"

export const CategoryList = () => {
    const {categories, error, isLoading} = useCategories();
  return (
    <>
    {error && <Text>{error}</Text>}
    
    <List marginY='1.5rem' paddingLeft='2rem'>{categories.map( category => <ListItem key={category}>{category}</ListItem>)}</List>
    </>
  )
}