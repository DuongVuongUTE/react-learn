import React from 'react';
import { useEffect } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import React, { useState } from 'react';
import Pagination from './PaginationProduct';
import { Link, BrowserRouter as Router } from 'react-router-dom';
export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const ITEMS_PER_PAGE = 1;
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
          <Card.Img variant="top" src={item.thumbnail} />
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
        <Spinner style={style} animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
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
