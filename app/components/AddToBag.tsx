'use client'

import { Button } from '@/components/ui/button'
import { useShoppingCart } from 'use-shopping-cart'

export interface ProductCart {
	name: string
	description: string
	price: number
	currency: string
	image: any
}

export default function AddToBag({
	currency,
	description,
	image,
	name,
	price,
}: ProductCart) {
	const { addItem, handleCartClick } = useShoppingCart()

	const product = {
		name: name,
		description: description,
		price: price,
		currency: currency,
		image: image,
	}
	return (
		<Button
			className='p-7'
			onClick={() => {
				addItem(product as any), handleCartClick()
			}}
		>
			Add To Cart
		</Button>
	)
}
