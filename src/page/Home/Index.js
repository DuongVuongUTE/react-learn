import React from 'react';
import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import React, { useState } from 'react';
import Pagination from './PaginationProduct';
import { Link, BrowserRouter as Router } from 'react-router-dom';
export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const ITEMS_PER_PAGE = 3;
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('');
  function changePage(page) {
    setCurrentPage(page);
  }
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    fetch(
      `https://fake-rest-api-nodejs.herokuapp.com/products/?&_page=${currentPage}&_limit=${ITEMS_PER_PAGE}&_sort=price&_order=${sortOrder}`
    )
      .then(response => {
        setTotalItems(response.headers.get('X-Total-Count'));
        return response.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [currentPage, sortOrder]);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    z_index: '1000'
  };
  const element = Product.map(item => {
    return (
      <div className="col-md-4 col-sm-6 mb-3" key={item.id}>
        <Card>
          <Card.Img
            className="img-product"
            variant="top"
            src={item.thumbnail}
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.price}</Card.Text>
          </Card.Body>
          <Link to={`/product/${item.id}`}>
            <Button variant="primary">View more</Button>
          </Link>
        </Card>
      </div>
    );
  });
  return (
    <>
      {isLoading ? (
        <img
          src="https://lh3.googleusercontent.com/dd4hs9o_qidV2UVsUp7kRk4Aghb7xlJta2Wb6O-lAs1b3sQRG8163n8TIah3gxn6dLDwRIWm7aTUvJMiWM-uihQR93Hcxt17zfPMH8vQWTk1yzyUBzSefdHFzkJx0X_Ph8XAQmrnIEaKmOL0gMsWRh61BMN78effAMaup8AHt5s_rl4-SFU0jFSQLjq25d0foQqtjmuBBxxEXTmw9fTvQmp4ENQKLtDXCKTJjtgAPjhgEn2KbPbv1GhS91cyczPig9N2aI1o8iMRWd96lF3lYkPr_BFnu86FoqRRJUNTta1-JTr-qV5n4JUDODlJjEW-_DZJrrq8x2ywya-CZMkrG5Qu74mWY2iMN2yZpxrQpNi8lv4gXbO88Q3j49SCRwvsf_vqXTHrfEaqIvMxTjFTCgf7YvEwS4QkD4dGZ2SRE4cNMnwLeU0-uFlprXCzCsaRbs9p0dcpeOsD-Yo6SRw_0STN6_JbajiXmbXGnWQS5LEom32fFK3jm2fB96JeLD8Ca9-SNaFXhuyYkhmEwWgEQg5glv6H18gEalEtceJZKLXcpO6Qnn-YFEoI6hR2CNJhH6UEGqktAbZNIg1R835qcirrCLoHPrJMJlgRq3SVBuWCZT6nhx7wCvwSZNGqN11Ye1ID4fNYEdAVZI2biFgz1ljWm2GBEDR9lE1QX42CKypapAEKh28C7abH4pamjNc56ne5M61QVhlLsccOOY6RFv4=s640-no?authuser=0"
          alt="load"
          className="Load"
        />
      ) : (
        <div>
          <div className="d-flex justify-content-between my-3">
            <h1>Home</h1>
            <select
              className="my-auto"
              value={sortOrder}
              onChange={event => setSortOrder(event.target.value)}
            >
              <option value="">Sắp xếp theo giá tiền</option>
              <option value="asc">Từ thấp đến cao</option>
              <option value="desc">Từ cao đến thấp</option>
            </select>
          </div>
          <div className="row">{element}</div>
          <br />
          <Pagination
            totalItems={totalItems}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            changePage={changePage}
          />
        </div>
      )}
    </>
  );
}
