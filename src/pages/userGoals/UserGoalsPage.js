import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import GoalItem from "./GoalItem";

const UserGoals = (props) => {
  // const goalsList = useContext(GoalsContext);

  return (
    <Container>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Goal Name</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col" className="centered">
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
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
        </tbody>
      </table>
    </Container>
  );
};

export default UserGoals;
