import React, { useContext } from "react";
import { Button, Row, Form, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import "./goal-item.css";
import swal from "sweetalert2";

import { DefaultGolasContext } from "../../context/default/DefaultGoalsContext";
import { AuthContext } from "../../context/auth/AuthContext";
import { GoalContext } from "../../context/goals/GoalContext";

const SingleGoal = () => {
  const { logOut } = useContext(AuthContext);
  const { loadGoals } = useContext(GoalContext);

  const { register, handleSubmit } = useForm();
  const URL = "https://hwtaweb20201216131958.azurewebsites.net";
  const location = useLocation();

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
      loadGoals();
      swal.fire("Success", "Goal was successfully added!", "success");
    } catch (err) {
      if (err.response.status === 401) {
        location.search = "";
        logOut();
      }
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.errorText,
      });
    }
  };

  const date_diff_indays = (date1, date2) => {
    let dt1 = new Date(date1);
    let dt2 = new Date(date2);
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  };

  const onSubmit = (data, e) => {
    if (date_diff_indays(Date.now(), data.startDate) < 0) {
      swal.fire({
        icon: "error",
        title: "Invalid start date",
        text: "You can start from today or later",
      });
      return;
    }

    if (date_diff_indays(data.startDate, data.endDate) < 1) {
      swal.fire({
        icon: "error",
        title: "Invalid date range",
        text: "Please, provide valid date range",
      });

      return;
    }
    data.value = parseInt(data.value);
    data.startDate = new Date(data.startDate).toISOString();
    data.endDate = new Date(data.endDate).toISOString();
    data = { ...data, ...{ regularty: 0 } };
    postGoal(data);
    location.search = "";
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
          className="d-flex flex-column justify-content-between h-100 add-goal-form p-4 shadow"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-center pb-1">Add your goal</h2>
          <Form.Row>
            <Form.Label htmlFor="title" className="add-goal-label">
              Goal title
            </Form.Label>
            <Form.Control
              className="add-goal-input"
              defaultValue={isNew ? "" : goal.title || ""}
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
                defaultValue={1}
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
                autoComplete="off"
                list="items"
                name="valueType"
                ref={register}
                defaultValue={isNew ? "" : goal.item}
                as="input"
                required
              />
              <datalist id="items">
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
