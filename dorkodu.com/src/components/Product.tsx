import { Group, Image, SimpleGrid, Stack, Text } from "@mantine/core";

export type ProductCardData = { title: string; tagline: string; icon: string };

export const ProductCard = ({ product }: { product: ProductCardData }) => {
  return (
    <Group spacing="sm">
      <Image src={product.icon} width={60} height={60} fit="contain" alt={product.title} withPlaceholder />
      <Stack spacing={0}>
        <Text weight={800} size={24}>
          {product.title}
        </Text>
        <Text weight={500} color="dimmed" size="md">
          {product.tagline}
        </Text>
      </Stack>
    </Group>
  );
};

export const ProductShowcaseGrid = ({ products }: { products: ProductCardData[] }) => (
  <SimpleGrid my={20} cols={3} spacing={16}>
    {products.map((item) => (
      <ProductCard product={item} />
    ))}
  </SimpleGrid>
);
