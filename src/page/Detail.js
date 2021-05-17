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
        <img
          src="https://lh3.googleusercontent.com/dd4hs9o_qidV2UVsUp7kRk4Aghb7xlJta2Wb6O-lAs1b3sQRG8163n8TIah3gxn6dLDwRIWm7aTUvJMiWM-uihQR93Hcxt17zfPMH8vQWTk1yzyUBzSefdHFzkJx0X_Ph8XAQmrnIEaKmOL0gMsWRh61BMN78effAMaup8AHt5s_rl4-SFU0jFSQLjq25d0foQqtjmuBBxxEXTmw9fTvQmp4ENQKLtDXCKTJjtgAPjhgEn2KbPbv1GhS91cyczPig9N2aI1o8iMRWd96lF3lYkPr_BFnu86FoqRRJUNTta1-JTr-qV5n4JUDODlJjEW-_DZJrrq8x2ywya-CZMkrG5Qu74mWY2iMN2yZpxrQpNi8lv4gXbO88Q3j49SCRwvsf_vqXTHrfEaqIvMxTjFTCgf7YvEwS4QkD4dGZ2SRE4cNMnwLeU0-uFlprXCzCsaRbs9p0dcpeOsD-Yo6SRw_0STN6_JbajiXmbXGnWQS5LEom32fFK3jm2fB96JeLD8Ca9-SNaFXhuyYkhmEwWgEQg5glv6H18gEalEtceJZKLXcpO6Qnn-YFEoI6hR2CNJhH6UEGqktAbZNIg1R835qcirrCLoHPrJMJlgRq3SVBuWCZT6nhx7wCvwSZNGqN11Ye1ID4fNYEdAVZI2biFgz1ljWm2GBEDR9lE1QX42CKypapAEKh28C7abH4pamjNc56ne5M61QVhlLsccOOY6RFv4=s640-no?authuser=0"
          alt="load"
          className="Load"
        />
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
