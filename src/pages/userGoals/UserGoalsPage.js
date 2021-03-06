import React, { useState, useContext, useEffect } from "react";
import { Container, Spinner, Dropdown } from "react-bootstrap";
import GoalItem from "./GoalItem";
import { GoalContext } from "../../context/goals/GoalContext";
import { Pagination } from "../../components";

const UserGoals = () => {
  const {
    isLoaded,
    goalsError,
    completeGoalWithAlert,
    filterGoals,
    sortedGoals,
    deleteWithAlert,
  } = useContext(GoalContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    if (sortedGoals.length < 3) {
      setCurrentPage(1);
    }
  }, [sortedGoals]);
  if (!isLoaded) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status" className="p-4 mt-5">
          <span className="sr-only">Loading...</span>
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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentGoals = sortedGoals.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(sortedGoals.length / postsPerPage);

  return (
    <Container fluid>
      <div>
        <Dropdown className="text-right mb-3 border-0">
          <Dropdown.Toggle
            variant="outline-primary border-0"
            size="sm"
            id="dropdown-basic"
          >
            Sort your goals
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => filterGoals()}>By all</Dropdown.Item>
            <Dropdown.Item onClick={() => filterGoals("byActive")}>
              By active
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterGoals("byCompleted")}>
              By finished
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterGoals("byFullyCompleted")}>
              By fully completed
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {!sortedGoals.length ? (
        <h2 className="text-center">Your list is empty</h2>
      ) : (
        ""
      )}
      {currentGoals.map((item) => {
        return (
          <GoalItem
            key={item.goalId}
            title={item.nameGoal}
            id={item.goalId}
            allDays={item.allDays}
            currentDay={item.currentDay}
            progress={item.progress}
            deleteWithAlert={deleteWithAlert}
            isLoaded={isLoaded}
            completeGoalWithAlert={completeGoalWithAlert}
            goal={item}
          />
        );
      })}

      {sortedGoals.length > 3 ? (
        <div className="pt-4">
          <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

export default UserGoals;
