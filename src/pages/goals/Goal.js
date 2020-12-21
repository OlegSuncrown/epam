import React, { useState, useContext, useEffect } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { Container, Button, Row, Col, Spinner, Card } from "react-bootstrap";
import swal from "sweetalert2";
import { GoalContext } from "../../context/goals/GoalContext";
import configureData from "../../utils/configureData";

// hardcoded goal
let goal = {
  description:
    "Pick the number of days you’ll exercise each week and stay on track with weekly Reports. Over 1M workouts reported by our users.",
  endDate: "2020-12-27T00:00:00.000Z",
  goalTitle: "Exercise",
  regularty: 0,
  startDate: "2020-12-17T00:00:00.000Z",
  value: 0,
  valueType: "dollars",
};

const Goal = ({ match }) => {
  const { id } = match.params;

  const { goalsList, isLoaded, goalsError } = useContext(GoalContext);

  let g = goalsList.find((el) => el.goalId === Number(id));
  // console.log(g);
  // console.log(goalsList);

  const preselectedDays = configureData(goal);

  console.log(configureData(goal));

  const [minimumDate, setMinimumDate] = useState({
    year: new Date(goal.startDate).getFullYear(),
    month: new Date(goal.startDate).getMonth() + 1,
    day: new Date(goal.startDate).getDate(),
  });

  const [maximumDate, setMaximumDate] = useState({
    year: new Date(goal.endDate).getFullYear(),
    month: new Date(goal.endDate).getMonth() + 1,
    day: new Date(goal.endDate).getDate(),
  });

  // const minimumDate = {
  //   year: new Date(goal.startDate).getFullYear(),
  //   month: new Date(goal.startDate).getMonth() + 1,
  //   day: new Date(goal.startDate).getDate(),
  // };

  // const maximumDate = {
  //   year: new Date(goal.endDate).getFullYear(),
  //   month: new Date(goal.endDate).getMonth() + 1,
  //   day: new Date(goal.endDate).getDate(),
  // };

  let today = new Date();
  let todayDate = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  };

  const [selectedDayRange, setSelectedDayRange] = useState(preselectedDays);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [discardButtonDisabled, setDiscardButtonDisabled] = useState(false);

  if (preselectedDays.includes(todayDate)) {
    setButtonDisabled(true);
  }

  const handleReportSubmit = () => {
    setSelectedDayRange((selectedDayRange) => [...selectedDayRange, todayDate]);
    setButtonDisabled(true);
    swal.fire(
      "Success",
      "Your goal was achived today! Keep rocking!",
      "success"
    );
  };

  const handleReportDiscard = () => {
    swal
      .fire({
        title: "Are you sure?",
        text: "What is done - cannot be undone :(",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, let me out!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          setButtonDisabled(true);
          setDiscardButtonDisabled(true);

          swal.fire("Oh, no!", "Oh, no no no", "success");
        }
      });
  };

  if (!isLoaded) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status" className="p-4 mt-5">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (!goal) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status" className="p-4 mt-5">
          <span className="sr-only">This goal does not exist</span>
        </Spinner>
      </div>
    );
  }

  if (goalsError) {
    return (
      <h4 className="text-danger text-center">
        <strong>{goalsError}</strong>
      </h4>
    );
  }

  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-between align-items-center"
    >
      <h1 className="mb-3">{goal.goalTitle}</h1>
      <Card
        className="mt-3 mb-5"
        style={{
          fontSize: "1.2em",
          borderRadius: "1em",
        }}
      >
        <Card.Body>{goal.description}</Card.Body>
      </Card>
      <Calendar
        value={selectedDayRange}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        shouldHighlightWeekends
      />
      <div className="d-flex">
        <Row className="mt-3">
          <Col sm={12} lg={6} className="mt-3 d-flex justify-content-center">
            <Button
              className="px-5"
              variant="success"
              size="lg"
              onClick={handleReportSubmit}
              disabled={buttonDisabled}
            >
              Submit
            </Button>
          </Col>
          <Col sm={12} lg={6} className="mt-3 d-flex justify-content-center">
            <Button
              className="px-5"
              variant="danger"
              size="lg"
              onClick={handleReportDiscard}
              disabled={discardButtonDisabled}
            >
              Discard
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Goal;
