import React from 'react';
import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
export default function PaginationProduct({
  totalItems,
  itemsPerPage,
  currentPage,
  changePage
}) {
  function loop(page, page2) {
    for (let number = page; number <= page2; number++) {
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
  let items = [];
  let totalPage = Math.ceil(totalItems / itemsPerPage);

  if (totalPage > 5) {
    if (currentPage >= 5 && currentPage <= totalPage) {
      if (totalPage - 2 < currentPage && currentPage <= totalPage) {
        loop(currentPage - 2, totalPage);
      } else if (totalPage - 2 >= currentPage) {
        loop(currentPage - 2, currentPage + 2);
      } else {
        loop(currentPage - 2, currentPage + 2);
      }
    } else if (currentPage <= 5) {
      loop(1, 5);
    }
  } else {
    loop(1, totalPage);
  }
  return (
    <Pagination size="sm">
      {' '}
      {currentPage !== 1 ? (
        <>
          <Pagination.First
            onClick={() => {
              changePage(1);
            }}
          />
          <Pagination.Prev
            onClick={() => {
              changePage(currentPage - 1);
            }}
          />
        </>
      ) : (
        <></>
      )}
      {items}
      {currentPage !== totalPage ? (
        <>
          <Pagination.Next
            onClick={() => {
              changePage(currentPage + 1);
            }}
          />
          <Pagination.Last
            onClick={() => {
              changePage(totalPage);
            }}
          />
        </>
      ) : (
        <></>
      )}
    </Pagination>
  );
}
