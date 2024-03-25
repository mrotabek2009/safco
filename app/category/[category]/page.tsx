import Image from 'next/image'
import Link from 'next/link'
import { products } from '../../constants/products'

export default function CategoryPage({
	params,
}: {
	params: { category: string }
}) {
	const product = products.filter(
		product => product.category === params.category
	)

	return (
		<>
			<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
				<div className='flex justify-between items-center'>
					<h2 className='text-2xl font-bold tracking-tight'>
						Our products for using in {params.category}
					</h2>
					<Link
						href='/all'
						className='hover:translate-x-2 hover:text-primary transition duration-300 flex items-center gap-x-1 '
					></Link>
				</div>
				<div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
					{product.map(product => (
						<div key={product.slug} className='group'>
							<Link href={`/product/${product.slug}`}>
								<div className='relative overflow-hidden aspect-square cursor-pointer dark:bg-gray-500 bg-gray-200 rounded-xl group'>
									<Image
										priority
										className='object-cover aspect-square group-hover:scale-110 transition duration-300 ease-in-out'
										width={300}
										height={300}
										src={product.images}
										alt={product.name}
									/>
								</div>
								<div className='mt-4 flex justify-between'>
									<div>
										<h3 className='text-sm'>{product.name}</h3>
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
		</>
	)
}

export async function generateMetadata({
	params,
}: {
	params: { category: string }
}) {
	const product = products.filter(
		product => product.category === params.category
	)

	return {
		title: params.category.toUpperCase() + ' Collections',
	}
}
