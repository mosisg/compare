'use client'

import type { User } from 'next-auth'
import Link from 'next/link'

import SearchButton from '@/components/layouts/SearchButton'
import CartButton from '@/components/cart/CartButton'
import DesktopNav from '@/components/layouts/DesktopNav'
import MobileNav from '@/components/layouts/MobileNav'
import { buttonVariants } from '@/components/ui/Button'

interface NavbarProps {
  user?: User & {
    id: string
  }
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  return (
    <header>
      
        {/* Left */}
        <MobileNav />
        <DesktopNav />

      
      
    </header>
  )
}

export default Navbar
