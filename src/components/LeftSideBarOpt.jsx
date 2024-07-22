import React from "react";
import IonIcon from '@reacticons/ionicons';
function LeftSideBarOpt(props){
    const iconName=props.iconName;
    const content=props.content;
    return(
        <div className="LeftSideBarOpt">
        <button>
            <IonIcon className="LeftSideBar_icon" name={iconName}></IonIcon>
        </button>
        <h2>{content}</h2>
        </div>
    )
}
export default  LeftSideBarOpt;