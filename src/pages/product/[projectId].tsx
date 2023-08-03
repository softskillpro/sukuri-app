import Image from 'next/image';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import ProductHeroCard from '@/components/v2/Common/ProductHeroCard';
import SidebarLayout from '@/components/v2/SidebarLayout';
import ProductContentCardGroup from '@/components/v2/ProductContentCardGroup';
import MultiCarousel from '@/components/v2/Common/MultiCarousel';
import { StyledDivider } from '@/components/v2/Common/StyledDivider';
import SubscriptionTiersCard from '@/components/v2/SubscriptionTiersCard';
import DiscoverCreatorsCard from '@/components/v2/Common/DiscoverCreatorsCard';
import TopCategoriesCard from '@/components/v2/Common/TopCategoriesCard';
import { ProductContainer, SidebarComboContainer } from '@/styles/product';

const products = ['boat.png', 'project_info.png', 'project_info.png'];

const Product = ({
  project,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <ProductContainer>
      <ProductHeroCard
        name={project.name}
        description={project.short_description}
      />

      <SidebarLayout className='product-layout'>
        <SidebarComboContainer>
          <DiscoverCreatorsCard />
          <TopCategoriesCard className='top-categories-card' />
        </SidebarComboContainer>

        <section className='sidebar-layout-body'>
          <ProductContentCardGroup description={project.long_description} />

          <StyledDivider className='product-divider' sx={{ mb: 2 }} />

          <MultiCarousel>
            {products.map((product, id) => (
              <div
                key={`product-${id}`}
                className='product-carousel-img-container'
              >
                <Image
                  src={`/images/v2/${product}`}
                  width={300}
                  height={300}
                  alt='Product'
                  className='product-carousel-img'
                />
                <div className='carousel-mask' />
              </div>
            ))}
          </MultiCarousel>

          <StyledDivider className='product-divider' sx={{ mt: 2 }} />

          <SubscriptionTiersCard tiers={project.tiers} />
        </section>
      </SidebarLayout>
    </ProductContainer>
  );
};

export default Product;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/project/info/${params?.projectId}`,
    );

    const data = await res.json();

    return { props: { project: data } };
  } catch (err: any) {
    return { props: { project: null } };
  }
};
