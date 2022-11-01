import React from "react";

export const LinkCard = ({link, displayText, title, id}) => {
  return (
    <div className="link-card" hidden>
        <a href={link} target="_blank" rel="noreferrer" title={title} id={id}> {displayText} </a>
    </div>
  );
};
