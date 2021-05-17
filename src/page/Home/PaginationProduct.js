import React from 'react';
import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
export default function PaginationProduct({
  totalItems,
  itemsPerPage,
  currentPage,
  changePage
}) {
  let [page, setpage] = useState(0);
  let items = [];
  let totalPage = Math.ceil(totalItems / itemsPerPage);
  if (totalPage > 5) {
    if (currentPage > 2 && currentPage <= totalItems) {
      if (currentPage <= totalItems - 2) {
        setpage = currentPage + 2;
      } else {
        setpage = currentPage;
      }
      for (let number = currentPage - 2; number <= page; number++) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => changePage(number)}
          >
            {number}
          </Pagination.Item>
        );
      }
    } else {
      for (let number = 1; number <= 5; number++) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => changePage(number)}
          >
            {number}
          </Pagination.Item>
        );
      }
    }
  } else {
    for (let number = 1; number <= totalPage; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => changePage(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
  }
  return <Pagination size="sm">{items}</Pagination>;
}
