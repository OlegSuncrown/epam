import React, { useState } from "react";
import { Container, Row, Pagination } from "react-bootstrap";
import Bage from "./Bage";

const BagesPage = () => {
  // const bagesList = useContext(BagesContext);

  const [currentPage, setCurrentPage] = useState(1);

  //hardcoded value
  const bagesList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  let bagesListLength = bagesList.length;
  const perPage = 6;
  const totalPages = Math.ceil(bagesListLength / perPage);
  let startIndex = (currentPage - 1) * perPage;
  let endIndex = startIndex + perPage;
  let currentPageItems = bagesList.slice(startIndex, endIndex);

  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === +currentPage}
        onClick={(e) => setCurrentPage(parseInt(e.target.innerText))}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <Container className="sm-5 p-3 mt-2">
        <Row className="justify-content-md-end m-2 mb-2">
          <Pagination>
            <Pagination.First onClick={() => setCurrentPage(1)} />
            <Pagination.Prev
              onClick={() => {
                let prev = currentPage - 1;
                prev = prev < 1 ? 1 : prev;
                setCurrentPage(prev);
              }}
            />
            {items}
            <Pagination.Next
              onClick={() => {
                let last = currentPage + 1;
                last = last > totalPages ? totalPages : last;
                setCurrentPage(last);
              }}
            />
            <Pagination.Last onClick={() => setCurrentPage(totalPages)} />
          </Pagination>
        </Row>
        <Row className="justify-content-md-center p-2">
          {currentPageItems.map((item) => (
            <Bage key={item} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default BagesPage;
