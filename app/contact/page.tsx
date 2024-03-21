import ContactForm from '@/components/contact'
import { Mail, Phone } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Contact Us',
}

function ContactPage() {
	return (
		<div className='max-w-6xl mx-auto font-sans'>
			<div className='relative min-h-[20vh] flex items-center justify-end flex-col'>
				<h2 className='font-bold text-center text-4xl'>
					<span>Contact</span>
				</h2>
			</div>
			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-6'>
				<div className='flex flex-col'>
					<h1 className='text-4xl'>Contact Us</h1>
					<p className='mt-2 text-muted-foreground'>
						I am here to help you and answer any question you might have. I look
						forward to hearing from you!
					</p>

					<div className='mt-12 flex items-center gap-3'>
						<Mail className='w-4 h-4' />
						<p className='text-sm'>info@safco.uz</p>
					</div>
					<div className='mt-12 flex items-center gap-3'>
						<Phone className='w-4 h-4' />
						<p className='text-sm'>+998 90 123 45 67</p>
					</div>
				</div>
				<ContactForm />
			</div>
		</div>
	)
}

export default ContactPage
