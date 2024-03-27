'use client'
import { loadStripe } from '@stripe/stripe-js'
import { ReactNode } from 'react'
import { CartProvider } from 'use-shopping-cart'

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

const Cart = ({ children }: { children: ReactNode }) => (
	<CartProvider
		cartMode='checkout-session'
		stripe={stripePromise as unknown as string}
		currency={'UZS'}
		shouldPersist={false}
	>
		<>{children}</>
	</CartProvider>
)

export default Cart
