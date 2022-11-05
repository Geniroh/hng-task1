import React from "react";
import ZURIIMG from '../images/zuri.png';
import I4GIMG from '../images/I4G.png';

export const Footer = () => {
  return (
    <div className="footer">
        <img src={ZURIIMG} alt="" className="zuri" />
        <p>HNG 9 FRONTEND TASK</p>
        <img src={I4GIMG} alt="" className="i4g" />
    </div>
  );
};
