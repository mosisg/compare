import Alerte from '@/components/Alerte'
import Categories from '@/components/Categories'
import Cookies from '@/components/Cookies'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Review from '@/components/Review'

export default function Lobby() {
  return (
    <main>
      <Hero />
      <div className='max-w-7xl mx-auto'>
        <Categories />
        <Products />
        <Alerte />
        <Cookies />
        <Review />
      </div>
    </main>
  )
}
