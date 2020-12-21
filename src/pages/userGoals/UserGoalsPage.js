import React, { useState, useContext, useEffect } from "react";
import { NavLink, Link, useRouteMatch } from "react-router-dom";
import { Container, Button, Row, Col, Spinner } from "react-bootstrap";
import GoalItem from "./GoalItem";
import { GoalContext } from "../../context/goals/GoalContext";
import { Pagination } from "../../components";

const UserGoals = () => {
  const { goalsList, isLoaded, goalsError, deleteGoals } = useContext(
    GoalContext
  );
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
            deleteGoals={deleteGoals}
            isLoaded={isLoaded}
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
