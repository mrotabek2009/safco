import { testimonials } from '@/src/app/constants/testimonials'
import { HoverEffect } from './ui/card-hover-effect'

export function Testimonials() {
	return (
		<div className='mx-auto max-w-2xl px-10 sm:px-6 lg:max-w-7xl'>
			<h1 className='my-10 text-center text-4xl font-bold'>
				What our customers say about us
			</h1>
			<HoverEffect items={testimonials} />
		</div>
	)
}
