import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { Link, BrowserRouter as Router } from 'react-router-dom';
export default function ShoppingCart() {
  // let { id } = useParams();
  // const [ItemCart, setItemCart] = useState({});
  // useEffect(() => {
  //   fetch(`https://fake-rest-api-nodejs.herokuapp.com/products/${id}`)
  //     .then(response => response.json())
  //     .then(data => setItemCart(data));
  // }, []);

  // useEffect(() => {}, []);
  return (
    <div>
      <h1>Shop</h1>
      {/* <Card className="mt-3">
        <Card.Header as="h5">Mã sản phẩm: {ItemCart.id}</Card.Header>
        <Card.Body>
          <Card.Title>Tên sản phẩm: {ItemCart.name}</Card.Title>
          <img src={ItemCart.thumbnail} alt="Product Image" />
          <Card.Text>Giá: {ItemCart.price}</Card.Text>
        </Card.Body>
      </Card> */}
    </div>
  );
}
