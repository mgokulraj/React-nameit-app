import React from "react";
import NameCard from "../NameCard/NameCard";
import "./Result.css";

const Result = ({ suggestedNames }) => {
  const finalResult = suggestedNames.map((name, i) => (
    <NameCard key={i} name={name} />
  ));
  return <div className="result">{finalResult}</div>;
};

export default Result;
