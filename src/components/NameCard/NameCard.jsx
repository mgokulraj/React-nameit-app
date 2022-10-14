import React from "react";
import "./NameCard.css";

const nameUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=%27%3B";

const NameCard = ({ name }) => {
  return (
    <a className="card-link" href={`${nameUrl}${name}`} target="_blank" rel="noreferrer">
      <div className="result-name-card">
        <p className="result-name">{name}</p>
      </div>
    </a>
  );
};

export default NameCard;
