
import Filter from '@/components/Filter'
import { Heading } from '@/components/Heading'
import ProductsList from '@/components/ProductsList'
import { INFINITE_SCROLL_LIMIT, categories } from '@/config'
import prisma from '@/lib/db'

const Products = async ({
  searchParams,
}: {
  searchParams: { category: string }
}) => {
  let products
  let totalProducts

  if (searchParams.category) {
    const productsWithCategory = await prisma.product.findMany({
      where: {
        categoryId: searchParams.category,
      },
    
      include: {
        Category: true,
      },
      take: INFINITE_SCROLL_LIMIT,
    })

    const totalProductsWithCategory = await prisma.product.count({
      where: {
        categoryId: searchParams.category,
      },
    })

    products = productsWithCategory
    totalProducts = totalProductsWithCategory
  } else {
    const productsWithoutCategory = await prisma.product.findMany({
  
      include: {
        Category: true,
      },
      take: INFINITE_SCROLL_LIMIT,
    })

    const totalProductsWithoutCategory = await prisma.product.count()

    products = productsWithoutCategory
    totalProducts = totalProductsWithoutCategory
  }

  return (
    <div className='flex flex-col py-6 sm:py-10 px-4 sm:px-6 lg:px-8'>
      <Heading
        title={`Products (${totalProducts})`}
        description='Explore all products from around the world'
      />
      <Filter categories={categories} className='mt-8 sm:mt-10 mb-4 sm:mb-6' />
      <ProductsList initialProducts={products} totalData={totalProducts} />
    </div>
  )
}

export default Products