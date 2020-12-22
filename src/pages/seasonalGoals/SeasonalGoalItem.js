import { React } from "react";
import { Col, ProgressBar, Row, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./seasonalGoals.css";
const SeasonalGoalItem = ({
  goal,
  title,
  id,
  progress,
  isLoaded,
  allDays,
  currentDay,
  deleteWithAlert,
  completeGoalWithAlert,
}) => {
  if (!isLoaded) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status" className="p-4 mt-5">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
      <Row className="item-goal mb-3 pb-3">
        <Col
          className={
            goal.fullyCompleted
              ? "col-12 text-center fullycompleted-goal pt-2"
              : !goal.fullyCompleted && goal.isCompleted
              ? "col-12 text-center completed-goal pt-2"
              : "col-12 text-center active-goal pt-2"
          }
        >
          <h4 className="m-0 p-0">
            <i
              //   onClick={() => deleteWithAlert(id)}
              className="fas fa-trash float-right p-2 delete-goal"
            ></i>
            <strong>{title}</strong>
          </h4>
          <hr className="m-0 mt-2" />
        </Col>

        <Col className="d-none d-md-block col-sm-2 "></Col>

        {/* Progress Bar */}
        <Col className="col-12 mt-3 mt-sm-0 col-sm-8 mx-auto d-flex align-items-center justify-content-center">
          <ProgressBar
            className="w-100 shadow "
            now={progress}
            label={`${progress}%`}
            variant={
              progress > 80
                ? "success"
                : progress > 40 && progress < 80
                ? "warning"
                : "danger"
            }
          />
        </Col>
        <Col className="col-12 col-sm-2">
          <div className="text-center">
            <span className="current-day">{currentDay}/</span>
            <span className="end-day">{allDays}</span>

            <div className="text-center">
              <span className="days">days left</span>
            </div>
          </div>
        </Col>
        <Col className="col-12 text-center mt-2 mt-sm-0">
          <Button variant="warning mr-4" size="sm">
            More info
          </Button>
          <Button
            disabled={true}
            // onClick={() => completeGoalWithAlert(+id)}
            variant="danger"
            size="sm"
          >
            Complete
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default SeasonalGoalItem;
