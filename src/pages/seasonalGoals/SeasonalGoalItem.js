import React, { useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const SeasonalGoalItem = (props) => {
  return (
    <>
      <Link to="/">
        <tr>
          <th scope="row">{props.title || "Save money"}</th>
          <td>{props.title || "21.11.2020"}</td>
          <td>{props.title || "30.12.2020"}</td>
          <td>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow={props.progress || "75"}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  width: props.progress || 74 + "%",
                  // background: `rgba(${props.progress || 120},${props.progress || 150},${props.progress || 234})`,
                }}
              ></div>
            </div>
          </td>
        </tr>
      </Link>
    </>
  );
};

export default SeasonalGoalItem;
