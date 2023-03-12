import { Group, Image, Paper, SimpleGrid, Stack, Text } from "@mantine/core";

export type ProductCardData = { title: string; tagline: string; icon: string; link: string };

export const ProductLinkCard = ({ product }: { product: ProductCardData }) => {
  return (
    <Paper p={10} component="a" href={product.link} withBorder shadow="sm" radius="lg">
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
    </Paper>
  );
};

export const ProductShowcaseGrid = ({ products }: { products: ProductCardData[] }) => (
  <SimpleGrid my={20} cols={3} spacing={16}>
    {products.map((item) => (
      <ProductLinkCard product={item} />
    ))}
  </SimpleGrid>
);
