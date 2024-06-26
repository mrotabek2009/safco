import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { Navbar } from '../components/Navbar'
import { ThemeProvider } from '../components/ThemeProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	metadataBase: new URL('https://safco.vercel.app'),
	title: 'Safco — Leader in the Uzbek workwear market!',
	description:
		'Рабочая одежда сегодня, является обязательным атрибутом любого работника, создавая безопасные условия труда, притом цена ее зависит от многих факторов. Прежде всего нужна не только для защиты работника от травм, грязи и других негативных факторов. В том числе она подчеркивает корпоративный стиль, поскольку униформа продавцов супермаркетов или официантов также является спецодеждой. ',
	authors: [{ name: 'Otabek Abdiraimov', url: 'https://safco.vercel.app' }],
	icons: { icon: '/favicons.png' },
	keywords:
		'Рабочая одежда, Безопасные условия труда, Цена спецодежды, Защита работника,Корпоративный стиль, Униформа для продавцов, Спецодежда для официантов, Травмобезопасность, Гигиеническая защита, Профессиональная одежда',
	openGraph: {
		title: 'Лидер на узбекском рынке спецодежды',
		description:
			'Рабочая одежда сегодня, является обязательным атрибутом любого работника, создавая безопасные условия труда, притом цена ее зависит от многих факторов. Прежде всего нужна не только для защиты работника от травм, грязи и других негативных факторов. В том числе она подчеркивает корпоративный стиль, поскольку униформа продавцов супермаркетов или официантов также является спецодеждой',
		type: 'website',
		url: 'https://safco.vercel.app',
		locale: 'en_EN',
		images: [{ url: '/favicons.png' }],
		countryName: 'Uzbekistan',
		siteName: 'Safco',
	},
}

export default function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode
	params: {
		locale: string
	}
}>) {
	return (
		<html
			lang={locale}
			className='scrollbar'
			id='scrollbar'
			suppressHydrationWarning
		>
			<body className={inter.className}>
				<NextIntlClientProvider locale={locale}>
					<NextTopLoader
						color='#2299DD'
						initialPosition={0.1}
						easing='ease-in-out'
						speed={100}
					/>
					<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
						<Navbar />
						{children}
					</ThemeProvider>
					<Analytics />
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
