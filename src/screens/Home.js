import React from "react";
import ProfileCard from "../components/ProfileCard";
import IMG from "../images/Chibuzor.png";
import SLACKIMG from '../images/slack.png';
import GITHUBIMG from '../images/github.png';
import '../App';
import { LinkCard } from "../components/LinkCard";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
    <div className="container">
      <ProfileCard name="Irobuisi Chibuzor" image={IMG} />
      <div className="tree">
        <LinkCard link="https://twitter.com/irobuisi" displayText="@irobuisi"  id="twitter" external={true}/>
        <LinkCard link="https://training.zuri.team/" displayText="Zuri Team" id="btn_zuri" external={true} />
        <LinkCard link="https://books.zuri.team/" displayText="Zuri Books" title="This is where you find books about design and coding" id="books" external={true} />
        <LinkCard link="https://books.zuri.team/python-for-beginners?ref_id=irochibuzor" displayText="Python Books" title="Best place to fetch resources to jumpstart tech careers" id="book__python" external={true} />
        <LinkCard link="https://background.zuri.team" displayText="Background Check For Coders" title="validate all your codes at the cheapest rate" id="pitch" external={true} />
        <LinkCard link="https://books.zuri.team/design-rules" displayText="Design Books" title="Best place to get amazingly free designs" id="book__design" external={true} />
        <LinkCard link="/contact" displayText="Contact Me" id="contact" />
        <div className="flex justify-content-center attribution">
          <img src={SLACKIMG} alt="" />
          <img src={GITHUBIMG} alt="" />
        </div>
      </div>
    </div>
     <Footer />
    </>
  );
};
