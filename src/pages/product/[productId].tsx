import { useEffect } from 'react';
// import NextError from 'next/error';
// import { useRouter } from 'next/router';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import ProductHero from '@/components/ProductHero';
import ProductDetail from '@/components/ProductDetail';
import SelectSubscription from '@/components/SelectSubscription';
import ImageCarousel from '@/components/ImageCarousel';
import LikedProducts from '@/components/LikedProducts';
import { ProductContainer } from '@/styles/product';
import useRuntimeContext from '@/hooks/useRuntimeContext';
import { api } from '@/utils/api';

const Product = ({
  product,
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // const productId = useRouter().query.productId as string;
  // const productQuery = api.project.get.useQuery(productId);

  const { fetchHandler } = useRuntimeContext();

  const subscribed = api.subscribe.subscribed.useQuery({
    id: product.id,
  });

  const tierId = subscribed.data?.tierId;

  useEffect(() => {
    fetchHandler(false);
  }, [fetchHandler]);

  // if (productQuery.error) {
  //   return (
  //     <NextError
  //       title={productQuery.error.message}
  //       statusCode={productQuery.error.data?.httpStatus ?? 500}
  //     />
  //   );
  // }

  // if (productQuery.status === 'loading') {
  //   return <div>Loading...</div>;
  // }

  // const product = productQuery.data;

  // if (!product) {
  //   return <div>Product does not exist</div>;
  // }

  return (
    <ProductContainer>
      <ProductHero tierId={tierId} product={product} />

      <ProductDetail product={product} />

      <SelectSubscription tierId={tierId} product={product} />

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
