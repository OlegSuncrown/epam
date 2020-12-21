import React, { useState, createContext, useEffect } from "react";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";

export const DefaultGolasContext = createContext({
  dataList: [
    {
      id: 1,
      title: "Quit Smoking",
      description:
        "Pick a date and quit for good. Your loved ones will thank you. Over 20M cigarettes not smoked on Highway to accomplish.",
      item: "cigarettes",
    },
    {
      id: 2,
      title: "Loose weight",
      description:
        "Decide on your target weight and set a timeline to reach it. We will automatically set up smart milestones that adapt to your progress.",
      item: "kg",
    },
    {
      id: 3,
      title: "Exercise",
      description:
        "Pick the number of days you’ll exercise each week and stay on track with weekly Reports. Over 1M workouts reported by our users.",
      item: "days",
    },
    {
      id: 4,
      title: "Default",
      description: "",
      item: "",
    },
  ],
});

export default DefaultGolasContext;
