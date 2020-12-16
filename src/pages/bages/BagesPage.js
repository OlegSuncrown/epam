import React from "react";
import { Container, Row, Pagination } from "react-bootstrap";
import Bage from "./Bage";

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const BagesPage = () => {
  return (
    <>
      <Container className="card sm-5 p-3 mt-2">
        <Row className="justify-content-md-end m-2 mb-2">
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            {items}
            <Pagination.Next />
            <Pagination.Last />
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
