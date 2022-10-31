import React from "react";

export const LinkCard = ({link, displayText}) => {
  return (
    <div className="link-card" hidden>
        <a href={link} target="_blank" rel="noreferrer"> {displayText} </a>
    </div>
  );
};
