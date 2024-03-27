import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'
import Link from 'next/link'

const NotFound = () => {
	return (
		<div className='h-screen flex items-center justify-center'>
			<h1>This page is not exist!</h1>
			<Button aria-label='button'>
				<Link href={'/'} className='flex items-center gap-1'>
					Back to Home <Home />
				</Link>
			</Button>
		</div>
	)
}

export default NotFound
