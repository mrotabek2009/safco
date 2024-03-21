import { products } from '@/app/constants/products'
export default function CategoryPage({
	params,
}: {
	params: { category: string }
}) {
	const product = products.filter(
		product => product.category === params.category
	)

	return <div></div>
}
