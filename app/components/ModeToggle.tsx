'use client'

import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
function ModeToggle() {
	const [mount, setMount] = useState(false)
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => setMount(true), [])

	return mount && resolvedTheme === 'dark' ? (
		<Button
			className='flex flex-col gap-y-1.5 h-10 w-10 sm:h-12 sm:w-12 md:h-18 md:w-18'
			size={'icon'}
			variant={'outline'}
			onClick={() => setTheme('light')}
		>
			<Sun />
		</Button>
	) : (
		<Button
			className='flex flex-col gap-y-1.5 h-10 w-10 sm:h-12 sm:w-12 md:h-18 md:w-18'
			size={'icon'}
			variant={'outline'}
			onClick={() => setTheme('dark')}
		>
			<Moon />
		</Button>
	)
}

export default ModeToggle
