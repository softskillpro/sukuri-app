import { useCallback, useEffect, useState } from 'react';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import ProductHero from '@/components/ProductHero';
import ProductDetail from '@/components/ProductDetail';
import SelectSubscription from '@/components/SelectSubscription';
import ImageCarousel from '@/components/ImageCarousel';
import LikedProducts from '@/components/LikedProducts';
import { ProductContainer } from '@/styles/product';
import useRuntimeContext from '@/hooks/useRuntimeContext';
import { api } from '@/utils/api';
import { currencies } from '@/constants';

const Product = ({
  product,
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { fetchHandler } = useRuntimeContext();

  const { data: likedProducts }: any = api.project.get.useQuery({
    asc: true,
  });

  const subscribed = api.subscribe.subscribed.useQuery({
    id: product.id,
  });

  const tierId = subscribed.data?.tierId;

  const [currency, setCurrency] = useState(currencies[0] || 'USD');

  useEffect(() => {
    fetchHandler(false);
  }, [fetchHandler]);

  const handleCurrencyChange = useCallback((_currency: string) => {
    setCurrency(_currency);
  }, []);

  return (
    <ProductContainer>
      <ProductHero
        tierId={tierId}
        product={product}
        currency={currency}
        handleCurrencyChange={handleCurrencyChange}
      />

      <ProductDetail product={product} />

      <SelectSubscription tierId={tierId} product={product} />

      <ImageCarousel />

      <LikedProducts
        title='Discover more'
        currency={likedProducts}
        products={products}
      />
    </ProductContainer>
  );
};

export default Product;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = 0;
  const pageSize = 20;
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
