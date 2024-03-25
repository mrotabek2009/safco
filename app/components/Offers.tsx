'use client'

import Image from 'next/image'
import { offers } from '../constants/offers'

const Offers = () => {
	return (
		<div>
			<h1 className='my-10 text-center text-4xl font-bold'>What we offer</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
				{offers.map(offer => (
					<div className='flex flex-col items-center text-center'>
						<Image src={offer.icon} alt='offer' width={150} height={150} />
						<h1 className='text-2xl font-extrabold'>{offer.title}</h1>
						<p className='w-full md:w-72 mb-4 font-medium'>
							{offer.description}
						</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Offers
