import React from 'react';
import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
export default function Home() {
  let PRODUCT = [
    {
      id: 1,
      name: 'Oppo A31',
      price: 999999999,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/238047/vivo-v21-5g-xanh-den-600x600.jpg'
    },
    {
      id: 2,
      name: 'Oppo A71',
      price: 1222222,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg'
    },
    {
      id: 3,
      name: 'Oppo A51',
      price: 44444444,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/235986/realme-8-pro-balck-600x600.jpg'
    },
    {
      id: 4,
      name: 'Oppo A91',
      price: 994444499,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600.jpg'
    }
  ];
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    fetch('https://fake-rest-api-nodejs.herokuapp.com/products/')
      .then(response => response.json())
      .then(data => setProduct(data));
  }, []);

  const element = Product.map((item, index) => {
    return (
      <div className="col-md-4 col-sm-6 mb-3" key={item.id}>
        <Card>
          <Card.Img variant="top" src={item.thumbnail} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.price}</Card.Text>
          </Card.Body>
          <Link to={`/${item.id}`}>
            <Button variant="primary">View more</Button>
          </Link>
        </Card>
      </div>
    );
  });
  return (
    <div>
      <div className="d-flex justify-content-between my-3">
        <h1>Home</h1>
        <Button
          variant="primary"
          onClick={() => {
            setProduct([]);
          }}
        >
          Clear
        </Button>
      </div>
      <div className="row">{element}</div>
    </div>
  );
}
