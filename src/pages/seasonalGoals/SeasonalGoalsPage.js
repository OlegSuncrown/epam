import React, { useState, useContext, useEffect } from "react";
import { NavLink, Link, useRouteMatch } from "react-router-dom";
import { Container, Button, Row, Col, Spinner } from "react-bootstrap";
import GoalItem from "../userGoals/GoalItem";
import { GoalContext } from "../../context/goals/GoalContext";
import { Pagination } from "../../components";

const UserGoals = () => {
  const { goalsList, isLoaded, goalsError } = useContext(GoalContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
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

  if (!goalsList.length) {
    return <h2 className="text-center">Your list is empty</h2>;
  }

  // console.log(goalsList);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentGoals = goalsList.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(goalsList.length / postsPerPage);
  return (
    <Container fluid>
      {currentGoals.map((item) => {
        return (
          <GoalItem
            key={item.goalId}
            title={item.nameGoal}
            id={item.goalId}
            allDays={item.allDays}
            currentDay={item.currentDay}
            progress={item.progress}
            // startDate={item.startDate}
            // endDate={item.plannedEndDate}
            // progress={50}
          />
        );
      })}

      <div className="pt-4">
        <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
      </div>
    </Container>
  );
};

export default UserGoals;
