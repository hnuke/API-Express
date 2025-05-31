import type { Product } from './index';

interface Props {
    product: Product;
}

export default function ProductCard({product }: Props){
    return(
        <section>
            <h2>{product.product_name}</h2>
            <p>Price: $ {product.product_price}</p>
        </section>
    );
}