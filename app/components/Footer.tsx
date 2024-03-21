import { Separator } from '@/components/ui/separator'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
	const date = new Date()
	const year = date.getFullYear()
	return (
		<footer>
			<div className='flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
				<div className='w-full flex justify-between mb-4'>
					<Link href={'/'}>
						<h1 className='text-2xl md:text-4xl font-bold'>
							<span className='text-primary'>Safe</span>Collection
						</h1>
					</Link>
					<div className='flex items-center gap-3'>
						<Link href='/'>
							<Twitter />
						</Link>
						<Link href='/'>
							<Facebook />
						</Link>
						<Link href='/'>
							<Instagram />
						</Link>
						<Link href='/'>
							<Youtube />
						</Link>
					</div>
				</div>
			</div>
			<Separator className='w-[95%] mx-auto' />
			<p className='text-center py-3'>{year} &copy; All rights reserved</p>
		</footer>
	)
}

export default Footer
