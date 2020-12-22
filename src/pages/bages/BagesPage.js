import React, { useState, useContext, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Bage from "./Bage";
import { Pagination } from "../../components/";
import { GoalContext } from "../../context/goals/GoalContext";
const BagesPage = () => {
  const { goalsList } = useContext(GoalContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [bagesList, setBagesList] = useState([]);

  const calculateBages = (goalsList) => {
    const outputArr = [];
    const completedGoals = goalsList.filter((goal) => goal.fullyCompleted);
    const streaksOfFiveGoals = Math.floor(completedGoals.length / 5);
    const streaksOfTenGoals = Math.floor(completedGoals.length / 10);
    const streaksOfFiftyGoals = Math.floor(completedGoals.length / 50);

    const addStreaks = (streakSize, streaksCount) => {
      for (let i = 0; i < streaksCount; i++) {
        outputArr.push({
          type: streakSize >= 10 ? "superStreak" : "streak",
          title: streakSize,
        });
      }
    };

    completedGoals.forEach((goal) => {
      outputArr.push({
        type: "completed goal",
        title: `Completed ${goal.nameGoal}`,
      });
    });

    addStreaks(5, streaksOfFiveGoals);
    addStreaks(10, streaksOfTenGoals);
    addStreaks(50, streaksOfFiftyGoals);

    return outputArr;
  };

  useEffect(() => {
    setBagesList(calculateBages(goalsList));
  }, [goalsList]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBages = bagesList.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(bagesList.length / postsPerPage);

  return (
    <>
      <Container className="sm-5 p-3 mt-2">
        <Row className="justify-content-md-center p-2">
          {currentBages.map((item, index) => (
            <Bage key={index} title={item.title} type={item.type} />
          ))}
        </Row>
        {currentBages.length ? (
          <div className="pt-4">
            <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
          </div>
        ) : (
          <h2 className="text-center">No awards yet. Keep going there!</h2>
        )}
      </Container>
    </>
  );
};

export default BagesPage;
