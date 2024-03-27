import { Button } from '@/components/ui/button'
import { Home, Star, Truck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '../../constants/products'

export const  ProductPage({ params }: { params: { slug: string } }) {
	const product = products.find(product => product.slug === params.slug)

	return (
		<div>
			<div className='mx-auto my-10 max-w-screen-xl px-4 md:px-8'>
				<div>
					{product ? (
						<div className='flex flex-col md:flex-row justify-between gap-7'>
							<div className='relative overflow-hidden aspect-square cursor-pointer dark:bg-gray-500 bg-gray-200 rounded-xl group md:h-[30rem] md:w-[30rem]'>
								<Image
									className='object-cover aspect-square group-hover:scale-110 transition duration-300 ease-in-out'
									priority
									width={500}
									height={500}
									src={product.images}
									alt={product.name}
								/>
							</div>
							<div className='flex flex-col gap-5 md:w-1/2'>
								<span className='mb-0.5 inline-block dark:text-gray-300 text-gray-600'>
									{product.category}
								</span>
								<h1 className='text-3xl font-medium mt-0'>
									<b>Title: </b> {product.name}
								</h1>
								<div className='mb-6 flex items-center gap-3'>
									<Button aria-label='button' className='rounded-full gap-x-2'>
										<span className='text-sm'>4.2</span>
										<Star className='h-5 w-5' />
									</Button>
									<span className='text-sm transition duration-300'>
										56 ratings
									</span>
								</div>
								<hr className='w-full' />
								<span className='text-lg md:text-2xl font-medium'>
									<b>Description: </b>
									{product.description}
								</span>
								<div className='flex items-center gap-3'>
									<span className='text-lg md:text-2xl font-medium'>
										<b>Price: </b>
										<del className='text-md md:text-2xl text-red-500 font-medium mr-5'>
											{product.price + 30}.000 UZS
										</del>
										{product.price}.000 UZS
									</span>
								</div>

								<span className='text-md text-gray-700 dark:text-gray-200'>
									Free Shipping
								</span>
								<div className='mb-6 flex items-center gap-2 text-gray-500 dark:text-gray-200'>
									<Truck className='w-6 h-6' />
									<span className='text-sm'>2-4 Day Shipping</span>
								</div>

								<div className='flex md:justify-normal justify-between gap-2 mb-20'>
									<Button
										aria-label='button'
										variant={'outline'}
										className='p-7'
									>
										Checkout now
									</Button>
								</div>
							</div>
						</div>
					) : (
						<div className='flex items-center justify-center flex-col gap-10 mt-48'>
							<h1 className='text-5xl m-auto font-extrabold'>
								Product not found
							</h1>
							<Button aria-label='button'>
								<Link href={'/'} className='flex items-center gap-1'>
									Back to Home <Home />
								</Link>
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
export async function generateMetadata({
	params,
}: {
	params: { slug: string }
}) {
	const product = products.find(product => product.slug === params.slug)

	return {
		title: product?.name,
	}
}
