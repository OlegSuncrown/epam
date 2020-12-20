import React, { useContext } from "react";
import { Button, Row, Form, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import { DefaultGolasContext } from "../../context/default/DefaultGoalsContext";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import "./goal-item.css";

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
      const res = await axios.post(`${URL}/addNewUserGoal`, formData, config);
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
    // if (Date.now() > new Date(data.startDate).getTime()) {
    //   swal.fire({
    //     icon: 'error',
    //     title: 'Invalid start date' ,
    //     text: 'You can start only from next day'
    //   })
    // }
    // if (new Date(data.startDate).getTime() < new Date(data.startDate).getTime() - 10) {
    //   swal.fire({
    //     icon: 'error',
    //     title: 'Incorrect end date' ,
    //     text: 'You can not end goal before you start : )'
    //   })
    // }
    data.value = parseInt(data.value);
    data.startDate = new Date(data.startDate).getTime();
    data.endDate = new Date(data.endDate).getTime();
    data = { ...data, ...{ regularty: 0 } };
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
    <Row>
      <Col className="col-md-10 mx-auto">
        <Form
          className="d-flex flex-column justify-content-between h-100 add-goal-form p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-center pb-1">Add your goal</h2>
          <Form.Row>
            <Form.Label htmlFor="title" className="add-goal-label">
              Goal title
            </Form.Label>
            <Form.Control
              className="add-goal-input"
              defaultValue={isNew ? "" : goal.title}
              name="goalTitle"
              ref={register}
              required
              size="sm"
              type="text"
              id="title"
              placeholder="Add title..."
            />
          </Form.Row>

          <Form.Row className="mt-3">
            <Form.Label htmlFor="text" className="add-goal-label">
              Goal description
            </Form.Label>
            <Form.Control
              className="add-goal-input"
              as="textarea"
              rows={2}
              defaultValue={isNew ? "" : goal.description}
              placeholder="Enter goal description here"
              name="description"
              ref={register}
              required
              size="sm"
              id="text"
            />
          </Form.Row>

          <Form.Row className="mt-3">
            <Form.Group as={Col} md="6" className="p-0">
              <Form.Label className="add-goal-label">
                Select Start date
              </Form.Label>
              <Form.Control
                required
                type="date"
                name="startDate"
                size="md"
                ref={register}
                className="add-goal-input"
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label className="add-goal-label">
                Select End date
              </Form.Label>
              <Form.Control
                required
                type="date"
                name="endDate"
                ref={register}
                size="md"
                className="add-goal-input"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label className="add-goal-label">
                Your goal per day
              </Form.Label>
              <Form.Control
                required
                type="number"
                defaultValue={0}
                name="value"
                ref={register}
                size="md"
                className="add-goal-input"
              />
            </Form.Group>

            <Form.Group as={Col} md="6">
              <Form.Label className="add-goal-label">
                Enter value (kg, $, pc, etc...)
              </Form.Label>

              <Form.Control
                className="add-goal-input"
                autocomplete="off"
                list="items"
                name="valueType"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
                defaultValue={isNew ? "" : goal.item}
                as="input"
              />
              <datalist id="items" ref={register}>
                <option value="pc" />
                <option value="kg" />
                <option value="$" />
                <option value="km" />
              </datalist>
            </Form.Group>
          </Form.Row>
          <Form.Row className="d-flex justify-content-center">
            <Button className="px-5" type="submit" variant="primary" size="md">
              Let's begin
            </Button>
          </Form.Row>
        </Form>
      </Col>
    </Row>
  );
};

export default SingleGoal;
