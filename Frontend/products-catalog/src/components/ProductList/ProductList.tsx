import { useEffect, useState }  from 'react';
import ProductCard from '../ProductCard/ProductCard';
import type { Product } from '../ProductCard';

interface ApiResponse {
  message: string;
  produtos: Product[];
}


export default function ProductList(){
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/api/products').then((res) => res.json()).then((data: ApiResponse) => {
            setProducts(data.produtos);
            setLoading(false);
        }).catch(()=>{
            setLoading(false);
        })
    },[])

    if (loading) return <p>Loading products...</p>

    return (
        <section>
            {products.length === 0 && <p>No products!</p>}
            {products.map((prod)=> (
                <ProductCard key={prod.product_id} product={prod}/>
            ))}
        </section>
    );
}