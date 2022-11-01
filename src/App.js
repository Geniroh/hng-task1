import ProfileCard from "./components/ProfileCard";
import IMG from "./images/Chibuzor.png";
import SLACKIMG from './images/slack.png';
import GITHUBIMG from './images/github.png';
import './App.css';
import { LinkCard } from "./components/LinkCard";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
    <div className="container">
      <ProfileCard name="Irobuisi Chibuzor" image={IMG} />
      <div className="tree">
        <LinkCard link="https://twitter.com/irobuisi" displayText="@irobuisi"  id="twitter"/>
        <LinkCard link="https://training.zuri.team/" displayText="Zuri Team" id="btn_zuri" />
        <LinkCard link="https://books.zuri.team/" displayText="Zuri Books" title="This is where you find books about design and coding" id="books" />
        <LinkCard link="https://books.zuri.team/python-for-beginners?ref_id=irochibuzor" displayText="Python Books" title="Best place to fetch resources to jumpstart tech careers" id="book__python" />
        <LinkCard link="https://background.zuri.team" displayText="Background Check For Coders" title="validate all your codes at the cheapest rate" id="pitch" />
        <LinkCard link="https://books.zuri.team/design-rules" displayText="Design Books" title="Best place to get amazingly free designs" id="book__design" />
        <div className="flex justify-content-center attribution">
          <img src={SLACKIMG} alt="" />
          <img src={GITHUBIMG} alt="" />
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
