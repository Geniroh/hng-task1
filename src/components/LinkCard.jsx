import React from "react";
import { Link } from "react-router-dom";

export const LinkCard = ({link, displayText, title, id, external}) => {
  return (
    <div>
      {
        external ? (
          <a href={link} target="_blank" rel="noreferrer" title={title} id={id}  className="link-card"> {displayText} </a>
        ): (
          <Link to={link} title={title} id={id}  className="link-card">{displayText}</Link>
        )
      }
    </div>
  );
};
