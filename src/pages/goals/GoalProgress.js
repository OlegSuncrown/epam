import React, { useState, useEffect, useContext } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { Container, Button, Row, Col, Spinner, Card } from "react-bootstrap";
import { GoalContext } from "../../context/goals/GoalContext";
import swal from "sweetalert2";
import configureData from "../../utils/configureData";

const GoalProgress = ({ goal }) => {
  const { deleteGoals } = useContext(GoalContext);

  let today = new Date();
  let todayDate = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  };
  const preselectedDays = configureData(goal);

  const [minimumDate, setMinimumDate] = useState({
    year: new Date(goal.startDate).getFullYear(),
    month: new Date(goal.startDate).getMonth() + 1,
    day: new Date(goal.startDate).getDate(),
  });

  const [maximumDate, setMaximumDate] = useState({
    year: new Date(goal.plannedEndDate).getFullYear(),
    month: new Date(goal.plannedEndDate).getMonth() + 1,
    day: new Date(goal.plannedEndDate).getDate(),
  });

  const [selectedDayRange, setSelectedDayRange] = useState(preselectedDays);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [discardButtonDisabled, setDiscardButtonDisabled] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (goal.progress >= 0) {
      setInProgress(true);
    } else {
      setButtonDisabled(true);
    }

    if (goal.isCompleted) {
      setIsCompleted(true);
    }
  });

  if (preselectedDays.includes(todayDate)) {
    console.log("I am here");
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
          deleteGoals(goal.goalId);
          swal.fire("Oh, no!", "Oh, no no no", "success");
        }
      });
  };

  if (!goal) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status" className="p-4 mt-5">
          <span className="sr-only">This goal does not exist</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Container>
      {isCompleted ? (
        <div>Completed</div>
      ) : (
        <>
          <Calendar
            value={selectedDayRange}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            shouldHighlightWeekends
            colorPrimary="#0fbcf9" // added this
          />
          <div className="d-flex">
            <Row className="mt-3">
              <Col
                sm={12}
                lg={6}
                className="mt-3 d-flex justify-content-center"
              >
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
              <Col
                sm={12}
                lg={6}
                className="mt-3 d-flex justify-content-center"
              >
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
        </>
      )}
    </Container>
  );
};

export default GoalProgress;