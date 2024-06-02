'use client'

import type { User } from 'next-auth'
import Link from 'next/link'

import SearchButton from '@/components/layouts/SearchButton'
import UserAccountNav from '@/components/auth/UserAccountNav'
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

        {/* Right */}
        <div className='items-center gap-x-2 hidden'>
        
          {user ? (
            <UserAccountNav user={user} />
          ) : (
            <Link
              href='/sign-in'
              className={buttonVariants({
                size: 'sm',
              })}
            >
              Sign In
              <span className='sr-only'>Sign In</span>
            </Link>
          )}
        </div>
      
    </header>
  )
}

export default Navbar
