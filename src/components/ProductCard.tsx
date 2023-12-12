import { Card, CardBody, Text, Heading, Img, Button, Link } from "@chakra-ui/react";
import { Product } from "./hooks/useProducts";
import { useState } from "react";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
    const[setup, isSetup] = useState(false);
  return (
    <Card
      display="flex"
      align="center"
      borderRadius="10px"
      boxShadow="3px 3px 3px 3px rgba(0, 0, 0, 0.1),1px 1px 2px 2px rgba(0, 0, 0, 0.06)"
    >
      <Img
        src={product.image}
        width="18rem"
        height="27rem"
        borderRadius="6px"
      />
      <CardBody>
        <Heading size="3rem">{product.title}</Heading>
        <Text>
            {setup ?  product.description : product.description.slice(0, 36) + '...'}
            <Button padding={0.5} size={'sm'} variant={'Link'} onClick={() => isSetup(!setup)}>{setup ? 'Less' : 'More'}</Button>
            </Text>
      </CardBody>
    </Card>
  );
};
