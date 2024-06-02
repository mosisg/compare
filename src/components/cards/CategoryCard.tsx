

import { Category } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import prisma from '@/lib/db'

interface CategoryCardProps {
  category: Category
}

const CategoryCard: React.FC<CategoryCardProps> = async ({ category }) => {
  const products = await prisma.product.count({
    where: {
      categoryId: category.slug,
    },
  })

  return (
    <Link href={`/products?category=${category.slug}`}>
      <Card className='relative overflow-hidden rounded-lg bg-white transition-transform transform group hover:bg-[#f1ffe2] hover:scale-105 '>
        <CardHeader className='flex justify-center items-center'>
          <Image
            src={`/svg/${category.slug}.png`}
            alt='test'
            width={100}
            height={75}
          />
        </CardHeader>
        <CardContent />

        <CardDescription />

        <CardTitle />

      </Card>
    </Link>
  )
}

export default CategoryCard
