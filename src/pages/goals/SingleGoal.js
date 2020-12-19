import React, { useState, useContext } from "react";
import { Container, Button, Row, Form, Col, Dropdown } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert2";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { DefaultGolasContext } from "../../context/default/DefaultGoalsContext";

const SingleGoal = () => {
  const { register, handleSubmit } = useForm();

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let { dataList } = useContext(DefaultGolasContext);
  let query = useQuery();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
    swal.fire("Success", "Goal was successfully added!", "success");
  };

  let isNew = false;
  let goal;

  if (!query.get("title")) {
    isNew = true;
  } else {
    let goalTitle = query.get("title");
    goal = dataList.find((goal) => goal.title === goalTitle);
  }

  if (isNew && !goal) {
    return (
      <Container>
        <Row className="justify-content-md-center pt-2">
          <h1>This goal does not exist</h1>
        </Row>
      </Container>
    );
  }
  return (
    <div className="d-flex justify-content-center h-100">
      <Form
        className="h-75 w-75 d-flex flex-column justify-content-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Row className="align-self-center">
          {isNew ? (
            <Form.Row>
              <Form.Label htmlFor="title">Add cutom goal name</Form.Label>
              <Form.Control
                name="title"
                ref={register}
                required
                size="lg"
                placeholder="Enter goal name here"
                type="text"
                id="title"
              />
            </Form.Row>
          ) : (
            <Form.Row>
              <Form.Control
                className="border-0 text-uppercase"
                name="title"
                ref={register}
                required
                size="lg"
                defaultValue={goal.title}
                type="text"
                id="title"
              />
            </Form.Row>
          )}
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Select Start date</Form.Label>
            <Form.Control
              required
              type="date"
              name="startDate"
              size="lg"
              ref={register}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Select End date</Form.Label>
            <Form.Control
              required
              type="date"
              name="endDate"
              ref={register}
              size="lg"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Your goal per day</Form.Label>
            <Form.Control
              required
              type="number"
              defaultValue={0}
              name="value"
              ref={register}
              size="lg"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          {isNew ? (
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Measure</Form.Label>
              <Form.Control
                required
                type="text"
                name="measure"
                ref={register}
                size="lg"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          ) : (
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Control
                className="border-0 text-uppercase mt-4 text-center"
                required
                type="text"
                name="measure"
                defaultValue={goal.item}
                ref={register}
                size="lg"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          )}
        </Form.Row>
        <Form.Row className="d-flex justify-content-center">
          <Button className="px-5" type="submit" variant="info" size="lg">
            GO
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
};

export default SingleGoal;
