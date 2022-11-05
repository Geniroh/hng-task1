import React from "react";
import MENU from "../images/arrow-right.svg";

const ProfileCard = ({ name, image}) => {
  return (
    <div className="profile p-3">
        <div>
            <img src={image} alt="profile" id="profile__img"/>
        </div>
        <p className="text-center">
            {name}
        </p>
        <div id="slack" hidden>
          Geniroh
        </div>
        <div className="menu">
          <img src={MENU} alt="" />
        </div>
    </div>
  );
};

export default ProfileCard;
