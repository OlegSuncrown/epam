import React, { useState } from "react";
import { Container, Row, Pagination } from "react-bootstrap";
import Bage from "./Bage";

const BagesPage = () => {
  // const bagesList = useContext(BagesContext);
  let bagesListLength = 120;
  const perPage = 6;
  // const pages = Math.ceil(bagesListLength/perPage);
  const pages = 5;

  const [currentPage, setCurrentPage] = useState(1);

  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === +currentPage}
        onClick={(e) => setCurrentPage(e.target.text)}
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
            <Pagination.First onClick={(e) => setCurrentPage(1)} />
            <Pagination.Prev />
            {items}
            <Pagination.Next />
            <Pagination.Last onClick={(e) => setCurrentPage(pages)} />
          </Pagination>
        </Row>
        <Row className="justify-content-md-center p-2">
          {/* {bagesList.map(item => {
              (<Bage 
                img={item.img} 
              />) 
          })} */}
          <Bage />
          <Bage />
          <Bage />
          <Bage />
          <Bage />
          <Bage />
        </Row>
      </Container>
    </>
  );
};

export default BagesPage;
