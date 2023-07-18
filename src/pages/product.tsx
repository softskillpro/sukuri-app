import Image from 'next/image';
import ProductHeroCard from '@/components/V2/Common/ProductHeroCard';
import SidebarLayout from '@/components/V2/SidebarLayout';
import ProductContentCardGroup from '@/components/V2/ProductContentCardGroup';
import MultiCarousel from '@/components/V2/Common/MultiCarousel';
import { StyledDivider } from '@/components/V2/Common/StyledDivider';
import SubscriptionTiersCard from '@/components/V2/SubscriptionTiersCard';
import DiscoverCreatorsCard from '@/components/V2/Common/DiscoverCreatorsCard';
import TopCategoriesCard from '@/components/V2/Common/TopCategoriesCard';
import { ProductContainer } from '@/styles/product';

const products = ['boat.png', 'project_info.png', 'project_info.png'];

const Product = () => {
  return (
    <ProductContainer>
      <ProductHeroCard />

      <SidebarLayout className='product-layout'>
        <section>
          <DiscoverCreatorsCard />
          <TopCategoriesCard className='top-categories-card' />
        </section>

        <section className='sidebar-layout-body'>
          <ProductContentCardGroup />

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

          <SubscriptionTiersCard />
        </section>
      </SidebarLayout>
    </ProductContainer>
  );
};

export default Product;
