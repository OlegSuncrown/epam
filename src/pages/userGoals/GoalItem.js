import React, { useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const GoalItem = (props) => {
  return (
    <>
      <LinkContainer to="/">
        <tr>
          <th scope="row">{props.title || "Save money"}</th>
          <td>{props.startDate || "21.11.2020"}</td>
          <td>{props.endDate || "30.12.2020"}</td>
          <td>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow={props.progress || "75"}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  width: (props.progress || 74) + "%",
                  background: `rgba(${0},${props.progress * 2},${0})`,
                }}
              ></div>
            </div>
          </td>
        </tr>
      </LinkContainer>
    </>
  );
};

export default GoalItem;
