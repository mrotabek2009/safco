'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MobileMenu = () => {
	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'Winter Collection', href: '/category/winter' },
		{ name: 'Summer Collection', href: '/category/summer' },
		{ name: 'Contact', href: '/contact' },
	]

	const pathname = usePathname()

	return (
		<Sheet>
			<SheetTrigger asChild className='flex lg:hidden'>
				<Button
					className='flex flex-col gap-y-1.5 h-10 w-10 sm:h-12 sm:w-12 md:h-18 md:w-18'
					variant={'outline'}
				>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side={'left'}>
				<nav className='gap-3 flex flex-col 2xl:ml-16'>
					<Link href={'/'}>
						<h1 className='text-2xl md:text-4xl font-bold'>
							<span className='text-primary'>Safe</span>Collection
						</h1>
					</Link>
					<Separator className='my-3' />
					{links.map((link, idx) => (
						<div key={idx}>
							{link.href === pathname ? (
								<Link
									className='text-lg font-medium text-primary'
									href={link.href}
								>
									{link.name}
								</Link>
							) : (
								<Link
									className='text-lg font-medium transition duration-300 hover:text-primary'
									href={link.href}
								>
									{link.name}
								</Link>
							)}
						</div>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	)
}

export default MobileMenu
