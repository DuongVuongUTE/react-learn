import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import { Button, Card, Spinner } from 'react-bootstrap';
import { Link, BrowserRouter as Router } from 'react-router-dom';
export default function Detail() {
  let { id } = useParams();
  const [ItemDetail, setItemDetail] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://fake-rest-api-nodejs.herokuapp.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setItemDetail(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {}, []);
  return (
    <div>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <div>
          <h1>Detail</h1>
          <Card className="mt-3">
            <Card.Header as="h5">Mã sản phẩm: {ItemDetail.id}</Card.Header>
            <Card.Body>
              <Card.Title>Tên sản phẩm: {ItemDetail.name}</Card.Title>
              <img src={ItemDetail.thumbnail} alt="Product Image" />
              <Card.Text>Giá: {ItemDetail.price}</Card.Text>
              <Card.Text>Số lượng: {ItemDetail.quantity}</Card.Text>
              <Link to={`/shop`}>
                <Button variant="primary">Add to cart</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
}
