import { Grid, Group, Image, Paper, SimpleGrid, Stack, Text } from "@mantine/core";

export type ProductCardData = { title: string; tagline: string; icon: string; link: string };

export const ProductLinkCard = ({ product }: { product: ProductCardData }) => {
  return (
    <Paper p={10} component="a" href={product.link} withBorder shadow="sm" radius="lg">
      <Group spacing="sm" pr={12}>
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
  <Grid my={20} gutter={8}>
    {products.map((item) => (
      <Grid.Col span={"content"}>
        <ProductLinkCard product={item} />
      </Grid.Col>
    ))}
  </Grid>
);
