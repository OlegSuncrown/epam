import React, { useState, useContext } from "react";
import { Button, Row, Form, Col, Dropdown } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert2";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { DefaultGolasContext } from "../../context/default/DefaultGoalsContext";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

const SingleGoal = () => {
  const { register, handleSubmit } = useForm();
  const URL = "https://hwtaweb20201216131958.azurewebsites.net";
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let { dataList } = useContext(DefaultGolasContext);
  let query = useQuery();

  const postGoal = async (formData) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    if (localStorage.AuthToken) {
      setAuthToken(localStorage.AuthToken);
    }

    try {
      await axios.post(`${URL}/addNewUserGoal`, formData, config);
      swal.fire("Success", "Goal was successfully added!", "success");
    } catch (err) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.errorText,
      });
    }
  };

  const onSubmit = (data, e) => {
    data.value = parseInt(data.value);
    data.startDate = new Date(data.startDate).toISOString();
    data.endDate = new Date(data.endDate).toISOString();
    data = { ...data, ...{ regularty: 0 } };
    console.log(data);
    postGoal(data);
    e.target.reset();
  };

  let isNew = false;
  let goal;

  if (!query.get("title")) {
    isNew = true;
  } else {
    let goalTitle = query.get("title");
    goal = dataList.find((goal) => goal.title === goalTitle);
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
                placeholder="Enter goal name here"
                name="goalTitle"
                ref={register}
                required
                size="lg"
                type="text"
                id="goalTitle"
              />
            </Form.Row>
          ) : (
            <Form.Row>
              <Form.Control
                className="border-0 text-uppercase"
                defaultValue={goal.title}
                name="goalTitle"
                ref={register}
                required
                size="lg"
                type="text"
                id="title"
              />
            </Form.Row>
          )}
        </Form.Row>
        {isNew ? (
          <Form.Row>
            <Form.Label htmlFor="title">Add cutom goal description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter goal description here"
              name="description"
              ref={register}
              required
              size="lg"
            />
          </Form.Row>
        ) : (
          <Form.Group>
            <Form.Control
              as="textarea"
              className="border-0"
              defaultValue={goal.description}
              name="description"
              ref={register}
              required
              size="lg"
            />
          </Form.Group>
        )}

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
              <Form.Label>Enter type of value</Form.Label>
              <Form.Control
                required
                type="text"
                name="valueType"
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
                name="valueType"
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
