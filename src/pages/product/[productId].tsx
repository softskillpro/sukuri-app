import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import ProductHero from '@/components/ProductHero';
import ProductDetail from '@/components/ProductDetail';
import SelectSubscription from '@/components/SelectSubscription';
import ImageCarousel from '@/components/ImageCarousel';
import LikedProducts from '@/components/LikedProducts';
import { ProductContainer } from '@/styles/product';

const Product = ({
  product,
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <ProductContainer>
      <ProductHero product={product} />

      <ProductDetail product={product} />

      <SelectSubscription />

      <ImageCarousel />

      <LikedProducts title='Discover more' products={products} />
    </ProductContainer>
  );
};

export default Product;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = 0;
  const pageSize = 10;
  const { params } = context;

  try {
    const [productTemp, productsTemp] = await Promise.all([
      await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/project/info/${params?.productId}`,
      ),
      await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/project/featured?page=${page}&pageSize=${pageSize}`,
      ),
    ]);
    const product = await productTemp.json();
    const products = await productsTemp.json();

    return { props: { product, products } };
  } catch (err: any) {
    return { props: { product: null, products: [] } };
  }
};
