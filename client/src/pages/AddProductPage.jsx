import React, { useState } from 'react';
import '../styles/AddProductPage.css';

const AddProductPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the product data to the server
  }

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />
        <label htmlFor="description">Product Description:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea><br /><br />
        <label htmlFor="price">Product Price:</label>
        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required /><br /><br />
<label htmlFor="color">Product Color:</label>
<input type="text" id="color" value={color} onChange={(e) => setColor(e.target.value)} /><br /><br />
<label htmlFor="size">Product Size:</label>
<select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
  <option value="">Select Size</option>
  <option value="S">S</option>
  <option value="M">M</option>
  <option value="L">L</option>
  <option value="XL">XL</option>
</select><br /><br />
<input type="submit" value="Add Product" />
</form>
</div>
);
}

export default AddProductPage;
