import React, { useState, useContext } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { Container, Button, Row, Col } from "react-bootstrap";
import swal from "sweetalert2";

//hardcoded goal
let goal = {
  description:
    "Pick the number of days you’ll exercise each week and stay on track with weekly Reports. Over 1M workouts reported by our users.",
  endDate: "2020-12-27T00:00:00.000Z",
  goalTitle: "Exercise",
  regularty: 0,
  startDate: "2020-12-18T00:00:00.000Z",
  value: 0,
  valueType: "dollars",
};

const Goal = ({ match }) => {
  const { id } = match.params;

  const preselectedDays = [
    {
      year: new Date(goal.startDate).getFullYear(),
      month: new Date(goal.startDate).getMonth() + 1,
      day: new Date(goal.startDate).getDate(),
    },
  ];

  const minimumDate = {
    year: new Date(goal.startDate).getFullYear(),
    month: new Date(goal.startDate).getMonth() + 1,
    day: new Date(goal.startDate).getDate(),
  };

  const maximumDate = {
    year: new Date(goal.endDate).getFullYear(),
    month: new Date(goal.endDate).getMonth() + 1,
    day: new Date(goal.endDate).getDate(),
  };

  let today = new Date();
  let todayDate = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  };

  const [selectedDayRange, setSelectedDayRange] = useState(preselectedDays);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  if (preselectedDays.includes(todayDate)) {
    setButtonDisabled(true);
  }

  const handleChange = () => {
    setSelectedDayRange((selectedDayRange) => [...selectedDayRange, todayDate]);
    setButtonDisabled(true);
    swal.fire(
      "Success",
      "Your goal was achived today! Keep rocking!",
      "success"
    );
  };

  console.log(selectedDayRange);

  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-between align-items-center"
    >
      <h1 className="mb-3">{goal.goalTitle}</h1>
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
              onClick={handleChange}
              disabled={buttonDisabled}
            >
              Submit
            </Button>
          </Col>
          <Col sm={12} lg={6} className="mt-3 d-flex justify-content-center">
            <Button className="px-5" type="submit" variant="danger" size="lg">
              Discard
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Goal;
