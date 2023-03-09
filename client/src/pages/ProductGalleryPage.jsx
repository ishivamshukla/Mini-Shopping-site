import React, { useState } from 'react';

const ProductGalleryPage = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Product 1', price: 10, color: 'red', size: 'S' },
    { id: 2, name: 'Product 2', price: 20, color: 'green', size: 'M' },
    { id: 3, name: 'Product 3', price: 30, color: 'blue', size: 'L' },
    { id: 4, name: 'Product 4', price: 40, color: 'yellow', size: 'XL' }
  ];

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    sessionStorage.setItem('cart', JSON.stringify(newCart));
  }

  return (
    <div>
      <h1>Product Gallery</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Color: {product.color}</p>
            <p>Size: {product.size}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGalleryPage;
