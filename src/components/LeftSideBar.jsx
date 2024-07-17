import './LeftSideBar.css';
import IonIcon from '@reacticons/ionicons';
import LeftSideBarOpt from './LeftSideBarOpt';
function LeftSideBar(){
   
    return(
        
        <div className="LeftSideBar">
       <LeftSideBarOpt iconName="home-outline" content="Home"/>
       <LeftSideBarOpt iconName="search-outline" content="Explore"/>
       <LeftSideBarOpt iconName="notifications-outline" content="Notifications"/>
       <LeftSideBarOpt iconName="mail-unread-outline" content="Messages"/>
       <LeftSideBarOpt iconName="create-outline" content="Grok"/>
       <LeftSideBarOpt iconName="people-outline" content="Communities"/>
       <LeftSideBarOpt iconName="person-outline" content="Profile"/>
       <LeftSideBarOpt iconName="ellipsis-horizontal-circle-outline" content="More"/>
        </div>
    );

}
export default LeftSideBar;