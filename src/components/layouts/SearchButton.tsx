import { useDebouncedValue } from '@mantine/hooks'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState, useTransition } from 'react'

import searchProducts from '@/actions/search-products'
import { Button } from '@/components/ui/Button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/Command'
import { Skeleton } from '@/components/ui/Skeleton'
import { cn } from '@/lib/utils'
import { SearchProducts } from '@/types/search-products'

const SearchButton = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('')
  const [debounced] = useDebouncedValue(query, 300)
  const [data, setData] = useState<SearchProducts[] | null>(null)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (debounced.length <= 0) {
      setData(null)
      return
    }

    const fetchProducts = async () => {
      const response = await searchProducts(debounced)
      setData(response)
    }

    startTransition(fetchProducts)

    return () => setData(null)
  }, [debounced])

  useEffect(() => {
    if (!open) {
      setQuery('')
    }
  }, [open])

  const handleSelect = useCallback((callback: () => unknown) => {
    setOpen(false)
    callback()
  }, [])

  return (
    <>
   
    </>
  )
}

export default SearchButton
