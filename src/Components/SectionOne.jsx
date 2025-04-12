
import"./SectionOne.css"
import { Link } from "react-router-dom";
const SectionOne = () => {
  return (
    <div className="header" id="header">
      <div className="container">
        <a href="#" className="logo">Padelytics</a>
        <ul className="main-nav">
          <li><a href="#articles">HOME</a></li>
          <li><a href="#gallery">SHOP</a></li>
          <li><a href="#features">PROFILE</a></li>
          <li><a href="#features">CONTACT</a></li>
        </ul>
        <button className="btn-navBar">LOGIN</button>
      </div>
    </div>
  );
}
export default SectionOne;