import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '../constants/products'

export const Newest = () => {
	return (
		<div className='flex flex-col justify-center mx-auto'>
			<div className='mx-auto max-w-2xl px-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8'>
				<div className='flex justify-between gap-10 md:gap-0 mt-20 md:mt-0 items-center'>
					<h2 className='text-2xl font-bold tracking-tight'>
						Our newest products
					</h2>
					<Link
						href='/all'
						className='hover:translate-x-2 hover:text-primary transition duration-300 flex items-center gap-x-1 '
					>
						<span>See all</span>
						<span>
							<ArrowRight />
						</span>
					</Link>
				</div>

				<div className='mt-6 grid w-[18rem] h-[18rem] md:w-auto md:h-auto grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
					{products.slice(0, 4).map(product => (
						<div key={product.slug} className='group'>
							<Link href={`/product/${product.slug}`}>
								<div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 transition lg:h-80'>
									<Image
										src={product.images}
										alt={product.name}
										priority
										width={300}
										height={300}
										className='h-full w-full object-cover object-center lg:h-full lg:w-full'
									/>
								</div>
								<div className='mt-4 flex justify-between'>
									<div>
										<h3 className='text-sm line-clamp-1'>{product.name}</h3>
										<div className='flex items-center justify-between'>
											<p className='mt-1 text-sm text-white dark:text-gray-600 bg-slate-500 dark:bg-white w-fit p-1.5 cursor-auto rounded-md'>
												{product.category}
											</p>
											<p>{product.price}.000 UZS</p>
										</div>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
