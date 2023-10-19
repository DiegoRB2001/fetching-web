import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/utilities/getProducts';

export default async function Home() {
  const {products} = await getProducts();
  return (
   <div>
    {products.map((product) => 
    <ProductCard key={product.id} product = {product}/>
    )}
   </div>
  )
}
