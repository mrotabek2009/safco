import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => {
	return (
		<section className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8'>
			<div className='mb-8 flex flex-wrap justify-between md:mb-16'>
				<div className='mb-4 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48'>
					<h1 className='mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl'>
						Production of workwear in Uzbekistan!
					</h1>
					<p className='pb-4 max-w-md leading-relaxed text-gray-500 xl:text-lg'>
						Leader in the Uzbek workwear market!
					</p>
					<div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
						<div className='flex h-12 w-64 divide-x overflow-hidden rounded-lg border'>
							<Link
								href='/category/winter'
								className='flex w-2/3 items-center justify-center transition duration-300 dark:hover:bg-gray-100 dark:hover:text-black dark:active:bg-gray-200 hover:bg-primary hover:text-white active:bg-primary/80'
							>
								Winter Collection
							</Link>
							<Link
								href='/category/summer'
								className='flex w-1/3 items-center justify-center transition duration-300 dark:hover:bg-gray-100 dark:hover:text-black dark:active:bg-gray-200
								hover:bg-primary hover:text-white active:bg-primary/80'
							>
								Summer
							</Link>
						</div>
					</div>
				</div>
				<div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
					<div className='bg-gray-300 dark:bg-slate-700 relative left-10 top-12 z-10 -ml-12 overflow-hidden rounded-lg shadow-lg md:left-20 md:top-16 lg:ml-0'>
						<Image
							src='/clothes4.png'
							alt='hero img'
							priority
							className='h-full w-full object-cover object-center'
							width={500}
							height={500}
						/>
					</div>
					<div className='bg-gray-300 dark:bg-slate-700 overflow-hidden rounded-lg shadow-lg'>
						<Image
							src='/clothes5.png'
							alt='hero img'
							priority
							className='h-full w-full object-cover object-center'
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
