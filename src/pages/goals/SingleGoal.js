import React, { useState } from "react";
import { Container, Button, Row, Form, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert2";

//hardcoded example
const dataList = [
  { id: 1, title: "Quit smoking", item: "cigarets" },
  {
    id: 2,
    title: "Loose weight",
    item: "kg",
  },
  { id: 3, title: "Loose weight", item: "kg" },
  {
    id: 4,
    title: "Save money",
    item: "dollars",
  },
];

const SingleGoal = ({ match }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
    swal.fire("Success", "Goal was successfully added!", "success");
  };

  const { id } = match.params;
  let goal;
  let isNew = false;

  if (id === "new") {
    isNew = true;
  } else {
    goal = dataList.find((goal) => goal.id === Number(id));
  }

  if (!goal && id !== "new") {
    return (
      <Container>
        <Row className="justify-content-md-center pt-2">
          <h1>This goal does not exist</h1>
        </Row>
      </Container>
    );
  }
  return (
    <>
      <Form
        className="h-75 d-flex flex-column justify-content-around align-items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Row>
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
            <h1>{goal.title}</h1>
          )}
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="start_date" className="px-2">
            <Form.Label>Select Start Date</Form.Label>
            <Form.Control
              name="startDate"
              type="date"
              required
              ref={register}
            />
          </Form.Group>
          <Form.Group controlId="end_date">
            <Form.Label>Select End Date</Form.Label>
            <Form.Control
              name="endDate"
              type="date"
              required
              placeholder=""
              ref={register}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Label htmlFor="amountPerDay">Your goal per day</Form.Label>
            <Form.Control
              name="amount"
              ref={register}
              required
              size="sm"
              type="text"
              id="amountPerDay"
            />
          </Col>
          <Col>
            {isNew ? (
              <div>
                <Form.Label htmlFor="measure">Measure</Form.Label>
                <Form.Control
                  name="measure"
                  ref={register}
                  required
                  size="sm"
                  type="text"
                  id="measure"
                />
              </div>
            ) : (
              <h2 className="mt-4 ml-3">{goal.item}</h2>
            )}
          </Col>
        </Form.Row>
        <Form.Row>
          <Button className="px-4" type="submit" variant="info" size="lg">
            GO
          </Button>
        </Form.Row>
      </Form>
    </>
  );
};

export default SingleGoal;
