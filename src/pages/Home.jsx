import React  from "react";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import MainContent from "../components/MainContent";
import './Home.css';
function Home(){
  console.log("home");
  return(
    <div className="Home">
        <LeftSideBar/>
        <MainContent/>
        <RightSideBar/>
    </div>
  )
}
export default Home;