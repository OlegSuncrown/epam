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
import configureData from "../../utils/configureData";
import swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const GoalProgress = ({ goal }) => {
  const { submitProgress, completeGoalWithAlert, completeGoal } = useContext(
    GoalContext
  );
  const history = useHistory();
  //current date
  let today = new Date();
  let todayDate = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  };

  // disabled dates range
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

  let defaultValue = configureData(goal);

  const [selectedDayRange, setSelectedDayRange] = useState(defaultValue);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [discardButtonDisabled, setDiscardButtonDisabled] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [show, setShow] = useState(false);

  //modal windows
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

    if (JSON.stringify(defaultValue["to"]) === JSON.stringify(todayDate)) {
      setButtonDisabled(true);
    }

    if (new Date(goal.startDate) >= today) {
      setButtonDisabled(true);
      setDiscardButtonDisabled(true);
    }
  });

  const handleReportSubmit = async () => {
    setSelectedDayRange((selectedDayRange) => {
      selectedDayRange["to"] = todayDate;
      return selectedDayRange;
    });

    if (JSON.stringify(maximumDate) === JSON.stringify(todayDate)) {
      completeGoal(goal.goalId);
      swal.fire("Success", "Goal is completed!", "success");
      setIsCompleted(true);
    }
    setButtonDisabled(true);
  };

  const handleReportDiscard = () => {
    completeGoalWithAlert(goal.goalId);
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
    <Container className="p-0">
      {isCompleted ? (
        <h4 className="text-center">Completed</h4>
      ) : (
        <>
          <div className="row p-0">
            <div className="col p-0 d-flex justify-content-center">
              <Calendar
                value={selectedDayRange}
                minimumDate={minimumDate}
                maximumDate={maximumDate}
                className="mx-auto w-100"
                shouldHighlightWeekends
                colorPrimary="#0fbcf9"
                colorPrimaryLight="rgba(75, 207, 250, 0.4)"
                onChange={handleShow}
              />
            </div>
          </div>

          {/* <div className="d-flex"> */}
          <Row className="mt-3">
            <Col
              sm={12}
              lg={6}
              className="mt-3 mx-auto d-flex justify-content-center"
            >
              <Button
                className="px-5 mr-2"
                variant="success"
                size="md"
                onClick={handleReportSubmit}
                disabled={buttonDisabled}
              >
                Submit
              </Button>
              <Button
                className="px-5"
                variant="danger"
                size="md"
                onClick={handleReportDiscard}
                disabled={discardButtonDisabled}
              >
                Discard
              </Button>
            </Col>
          </Row>
          {/* </div> */}
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
