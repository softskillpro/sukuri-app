import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import ProductHero from '@/components/ProductHero';
import ProductDetail from '@/components/ProductDetail';
import SelectSubscription from '@/components/SelectSubscription';
import ImageCarousel from '@/components/ImageCarousel';
import { ProductContainer } from '@/styles/product';

const Product = ({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(product);
  return (
    <ProductContainer>
      <ProductHero product={product} />

      <ProductDetail product={product} />

      <SelectSubscription />

      <ImageCarousel />
    </ProductContainer>
  );
};

export default Product;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/project/info/${params?.productId}`,
    );

    const data = await res.json();

    return { props: { product: data } };
  } catch (err: any) {
    return { props: { product: null } };
  }
};
