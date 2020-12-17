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
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
    swal.fire("Success", "Goal was successfully added!", "success");
  };

  const { id } = match.params;
  const goal = dataList.find((goal) => goal.id === Number(id));

  if (!goal) {
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
          <h1>{goal.title}</h1>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="start_date" className="px-2">
            <Form.Label>Select Start Date</Form.Label>
            <Form.Control
              name="startDate"
              type="date"
              required
              ref={register}
              onChange={(date) => setStartDate(date.target.value)}
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
              onChange={(date) => setEndDate(date.target.value)}
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
              onChange={(e) => setAmount(e.target.value)}
            />
          </Col>
          <Col className="d-flex justify-content-center align-items-end">
            <h5>{goal.item}</h5>
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
