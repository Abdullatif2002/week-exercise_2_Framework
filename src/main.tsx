import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";  

const courses = [
  { name: "HTML", courseId: "Y242-444", studentPositions: 30 },
  { name: "JavaScript Basics", courseId: "Y242-445", studentPositions: 35 },
  { name: "JavaScript Advanced", courseId: "Y242-446", studentPositions: 40 },
  { name: "React", courseId: "Y242-447", studentPositions: 25 },
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App courses={courses} />
  </React.StrictMode>
);
