'use client'

import { products } from '@/app/constants/products'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const ImageSlider = () => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
	}

	return (
		<div className='slider-container'>
			<Slider {...settings}>
				{products.map(product => (
					<div key={product.slug}>
						<div>
							<Image
								src={product.images}
								alt='product'
								width={300}
								height={200}
							/>
						</div>
						<div>
							<Image
								src={product.secondImg}
								alt='product'
								width={300}
								height={200}
							/>
						</div>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default ImageSlider
