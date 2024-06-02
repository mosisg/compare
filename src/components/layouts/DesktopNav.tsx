
import Link from 'next/link';
import Image from 'next/image';
import { NavigationMenu } from '../ui/NavigationMenu';
import Themeswitch from '@/components/ui/Themeswitch';
import '@/app/globals.css'; 

const DesktopNav = () => {
  return (
    <nav className='fixed w-full z-20 top-0 start-0'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href="/" className='flex items-center space-x-3 rtl:space-x-reverse'>
          <Image src="/images/comparetelecom.png" alt="logo" width={150} height={75} />
        </Link>

        <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id="navbar-sticky">
          <NavigationMenu>
            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border md:flex-row md:space-x-8 md:mt-0 md:border-0'>
              <li>
                <Link href='/forfait' className='dark:text-white'>
                  Forfait Mobile
                </Link>
              </li>
              <li>
                <Link href='/box'  className='dark:text-white'>
                  Box Internet
                </Link>
              </li>
              <li>
                <Link href='/products?category=shoes' className='dark:text-white'>
                  Energie
                </Link>
              </li>
              <li>
                <Link href='/products?category=accessories' className='dark:text-white'>
                  Blogue
                </Link>
              </li>
              <li>
                <Link href='#' className='dark:text-white'>
                  <Themeswitch />
                </Link>

              </li>
            </ul>
          </NavigationMenu>

        </div>

        <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <button type="button" className='btn_primary'>
            0145243524
          </button>
          <button data-collapse-toggle="navbar-sticky" type="button" className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls="navbar-sticky" aria-expanded="false">
            <span className='sr-only'>Open main menu</span>
            <svg className='w-5 h-5' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
