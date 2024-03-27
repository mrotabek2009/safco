'use client'

import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileMenu from './MobileNav'
import ModeToggle from './ModeToggle'

const links = [
	{ name: 'Home', href: '/' },
	{ name: 'Winter Collection', href: '/category/winter' },
	{ name: 'Summer Collection', href: '/category/summer' },
	{ name: 'Contact', href: '/contact' },
]

export const Navbar = () => {
	const pathname = usePathname()

	return (
		<header className='mb-8 py-4 border-b'>
			<div className='flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
				<Link href={'/'}>
					<h1 className='text-2xl md:text-4xl font-bold'>
						<span className='text-primary'>Safe</span>Collection
					</h1>
				</Link>

				<nav className='hidden gap-12 lg:flex 2xl:ml-16'>
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

				<div className='flex gap-2'>
					<Button
						aria-label='button'
						className='flex flex-col gap-y-1.5 h-10 w-10 sm:h-12 sm:w-12 md:h-18 md:w-18'
						variant={'outline'}
					>
						<ShoppingBag />
					</Button>
					<ModeToggle />
					<MobileMenu />
				</div>
			</div>
		</header>
	)
}
