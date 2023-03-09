import React, { useState, useEffect } from 'react';

const ViewCartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const removeProduct = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    sessionStorage.setItem('cart', JSON.stringify(newCart));
  }

  return (
    <div>
      <h1>View Cart</h1>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Color</th>
                <th>Size</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.color}</td>
                <td>{product.size}</td>
                <td><button onClick={() => removeProduct(product)}>Remove</button></td>
              </tr>
            ))}
            <tr>
              <td colSpan="5">Total: ${cart.reduce((total, product) => total + product.price, 0)}</td>
            </tr>
          </tbody>
        </table>
        )}
      </div>
    </div>
  );
}

export default ViewCartPage;

