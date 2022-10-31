import React from "react";

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
            irochibuzor
        </div>
    </div>
  );
};

export default ProfileCard;
