'use client'

import { ReactNode } from 'react'
import { CartProvider as USCProvider } from 'use-shopping-cart'

export default function CartProvider({ children }: { children: ReactNode }) {
	return (
		<USCProvider
			mode='payment'
			cartMode='client-only'
			stripe={process.env.NEXT_PUBLIC_STRIPE as string}
			successUrl='http://localhost:300/success'
			cancelUrl='http://localhost:300/error'
			currency='USZ'
			billingAddressCollection={true}
			shouldPersist={true}
			language='en-US'
		>
			{children}
		</USCProvider>
	)
}
