
'use client'

import { Category, Product } from '@prisma/client';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import useCart from '@/hooks/useCart';

interface AffiliateUrls {
  [key: string]: string;
}

const affiliateUrls: AffiliateUrls = {
  Orange: 'https://www.orange.fr',
  Bouygues: 'https://www.bouygues.fr',
  Free: 'https://www.free.fr',
  Sfr: 'https://www.sfr.fr',
};


interface ProductCardProps {
  product: Product & {
    Category: Category;
    affiliateProvider?: string; // Nouvelle propriété pour le nom du fournisseur
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const cart = useCart();

  // Redirection vers l'URL d'affiliation si elle est définie
  const href = product.affiliateProvider && affiliateUrls[product.affiliateProvider]
    ? affiliateUrls[product.affiliateProvider]
    : ''; // Laisser vide si aucun fournisseur n'est défini

  return (
    <div className='group/card shadow-lg border hover:shadow-2xl duration-300 transition-all rounded-2xl space-y-2 max-h-80 w-60'>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {/* Images and Actions */}
        <div className='aspect-square m-3 rounded-2xl bg-gray-100 relative w-24 h-24'>
          <Image
            // @ts-ignore
            src={product.images?.[0].url}
            fill
            sizes='200'
            // @ts-ignore
            alt={product.name}
            className='aspect-square object-cover rounded-2xl'
          />
        </div>
        <div className='px-4 space-y-3 pb-6'>
          <div className='space-y-1'>        
            <p className='text-sm text-black dark:text-white'>{product.Category?.name}</p>
            <p className='text-sm text-black dark:text-white'>{product.description}</p>
            <Image alt='Stars' src='/svg/stars.svg' width={100} height={100} />
            <p className='font-semibold text-lg truncate'>{product.description}</p>
            
          </div>
          <div className='flex items-center justify-between'>
            {/* Price */}
            <div style={{ color: '#79CE25' }} className='font-semibold'>
              {parseFloat(product.price.toString()).toFixed(2)} €
            </div>

            <div className='flex justify-center group/icon'>
              <MoveRight size={20} style={{ color: '#79CE25' }} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
