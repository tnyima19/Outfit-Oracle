import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { products } = useContext(ShopContext); // Assuming you have a list of products in your ShopContext

    useEffect(() => {
        // Find the product with the given ID
        const foundProduct = products.find(p => p.id.toString() === id);
        setProduct(foundProduct);
    }, [id, products]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <div className='card mx-auto' style={{ width: '30rem'}}>
            <img className='card-img-top' src={product.image} alt={product.name} />
            </div>
            <p>Size: {product.size}</p>
            <p>Color: {product.color}</p>
            <p>Outer Layer: {product.outerLayer}</p>
            <p>Linning: {product.linning}</p>
            <p>Filling: {product.filling}</p>
            <p>Washing Info: {product.washinginfo}</p>
            {/* Other product details */}
        </div>
    );
}

export default ProductPage;
