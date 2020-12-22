import React, { useState, useEffect, useContext } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import {
  Container,
  Button,
  Row,
  Col,
  Spinner,
  Modal,
  Figure,
  Form,
} from "react-bootstrap";
import { GoalContext } from "../../context/goals/GoalContext";
import swal from "sweetalert2";
import configureData from "../../utils/configureData";
const URL = "https://hwtaweb20201216131958.azurewebsites.net";

const GoalProgress = ({ goal }) => {
  const { deleteGoals, submitProgress, completeGoal } = useContext(GoalContext);

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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    setButtonDisabled(true);
  }

  const handleReportSubmit = async () => {
    setSelectedDayRange((selectedDayRange) => [...selectedDayRange, todayDate]);
    setButtonDisabled(true);
    swal.fire(
      "Success",
      "Your goal was achived today! Keep rocking!",
      "success"
    );
    submitProgress(goal.goalId);
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
          completeGoal(goal.goalId);
          swal.fire("Oh, no!", "Oh, no no no", "success");
        }
      });
  };

  if (!goal) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status" className="p-4 mt-5">
          <span className="sr-only">
            This goal does not exist or was deleted
          </span>
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
            colorPrimary="#0fbcf9"
            onChange={handleShow}
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
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{goal.nameGoal}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="align-self-center mr-3">
          <Figure onClick={handleShow}>
            <Figure.Image
              height={200}
              alt="200x"
              src="https://c4.wallpaperflare.com/wallpaper/725/521/312/cat-wants-some-food-wallpaper-preview.jpg"
            />
          </Figure>
          <div className="text-center mb-2">Today I did my best</div>
          <Form>
            <Form.File
              id="custom-file-translate-scss"
              label="Prove you are still in"
              lang="en"
              custom
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default GoalProgress;
