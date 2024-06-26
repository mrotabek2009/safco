'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export const HoverEffect = ({
	items,
	className,
}: {
	items: {
		image: string
		name: string
		testimonial: string
	}[]
	className?: string
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	return (
		<div
			className={cn(
				'grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10',
				className
			)}
		>
			{items.map((item, idx) => (
				<div
					key={idx}
					className='relative group  block p-2 h-full w-full'
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className='absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl'
								layoutId='hoverBackground'
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.15 },
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 },
								}}
							/>
						)}
					</AnimatePresence>
					<Card>
						<CardTitle>{item.name}</CardTitle>
						<div className='flex justify-between items-end'>
							<CardDescription>{item.testimonial}</CardDescription>
							<Image
								src={item.image}
								alt='testimonial'
								width={50}
								height={50}
							/>
						</div>
					</Card>
				</div>
			))}
		</div>
	)
}

export const Card = ({
	className,
	children,
}: {
	className?: string
	children: React.ReactNode
}) => {
	return (
		<div
			className={cn(
				'rounded-2xl h-full w-full p-4 overflow-hidden text-black dark:text-white bg-white dark:bg-black border border-transparent border-gray-400 hover:border-gray-200 dark:border-white/[0.2] group-hover:border-slate-700 relative z-20',
				className
			)}
		>
			<div className='relative z-50'>
				<div className='p-4'>{children}</div>
			</div>
		</div>
	)
}
export const CardTitle = ({
	className,
	children,
}: {
	className?: string
	children: React.ReactNode
}) => {
	return (
		<h3
			className={cn(
				'dark:text-zinc-100 font-bold tracking-wide mt-4',
				className
			)}
		>
			{children}
		</h3>
	)
}
export const CardDescription = ({
	className,
	children,
}: {
	className?: string
	children: React.ReactNode
}) => {
	return (
		<p
			className={cn(
				'mt-8 dark:text-zinc-400 tracking-wide leading-relaxed text-sm',
				className
			)}
		>
			{children}
		</p>
	)
}
