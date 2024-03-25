'use client'

import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { Button } from './ui/button'

export default function HeroSlider() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
	}

	return (
		<Slider {...settings}>
			<div className='relative cursor-move'>
				<Image
					src='/sliderImg1.png'
					alt='slider image'
					width={900}
					height={100}
					className='h-full w-full object-cover object-center lg:h-96 lg:w-full rounded-md'
				/>
				<div className='pl-20 absolute inset-0 flex flex-col items-start gap-4 justify-center text-white'>
					<h2 className='text-3xl text-[#0F172A]'>
						More than 200 companies trust us
					</h2>
					<Button>
						<Link href={'/all'}>View all products</Link>
					</Button>
				</div>
			</div>
			<div className='relative cursor-move'>
				<Image
					src='/sliderImg2.png'
					alt='slider image'
					width={900}
					height={100}
					className='h-full w-full object-cover object-center lg:h-96 lg:w-full rounded-md'
				/>
				<div className='pl-20 absolute inset-0 flex flex-col items-start gap-4 justify-center text-white'>
					<h2 className='text-3xl text-[#0F172A]'>Own production</h2>
					<Button>
						<Link href={'/all'}>View all products</Link>
					</Button>
				</div>
			</div>
		</Slider>
	)
}
