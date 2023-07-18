import { CategorySection } from "./styles"
import Typography from '@mui/material/Typography'
import { StyledHr } from '@/components/V2/Common/Splitter/styles';
import { CategoryTile } from "@/components/V2/Common/CategoryTile";

export type CategoryListProps = {
  categories: {
    name: string,
    image: string,
    count?: number
  }[]
}
const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <CategorySection>
      <Typography variant="h3" className='section-title'>
        Categories
      </Typography>
      <StyledHr />
      <div className="category-tile-grid">
        {
          categories ?
            categories.map(({ name, image, count }, i) => {

              return (
                <CategoryTile key={i}
                  name={name}
                  image={image ? image : ''}
                  count={count ? count : undefined}
                />
              )
            })
            : ''
        }
      </div>
    </CategorySection>
  )
}


export default CategoryList