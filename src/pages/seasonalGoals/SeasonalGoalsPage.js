import React, { useState, useContext } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Button } from "react-bootstrap";
import SeasonalGoalItem from "./SeasonalGoalItem";

const SeasonalGoals = (props) => {
  // const goalsList = useContext(GoalsContext);

  return (
    <Container>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Goal Name</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col" className="text-centered">
              Progress
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {goalsList.map(item => {
                     (<GoalItem 
                        title={item.title} 
                        startDate={item.startDate} 
                        endDate={item.endDate} 
                        progress={item.progress} 
                     />) 
                  })} */}
          <SeasonalGoalItem />
        </tbody>
      </table>

      <LinkContainer to="/addGoal">
        <Button
          type="button"
          className="btn btn-outline-secondary full-width no-bg"
        >
          Add Goal
        </Button>
      </LinkContainer>
    </Container>
  );
};

export default SeasonalGoals;
