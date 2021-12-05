import React, {useState} from 'react';
import {
    useRouteMatch
  } from "react-router-dom";

import './Dashboard.scss'


function Dashboard(props) {

    const onClickLogo = () =>{
        props.history.push('main')
    }

    return(
        <div className ="Vazaar-Dashboard-Container">
            <div className = "Vazaar-left-navigation-container">

                <div className = "Vazaar-Dashboard-Icon">
                    {props.logo}
                </div>

                <div className = "Vazaar-Dashboard-List">
                    {props.left}
                </div>

            </div>
            <div style = {{display : "flex",flexDirection : "column", width : "100%", padding: "0", margin:"0"}}>
                    <div className = "Vazaar-Top-Navigation-Container">
                        <input className ="Vazaar-Top-Search" placeholder = "Search for an item here"/>
                        {props.profile}
                    </div>
                    <div style = {{width : "100%", height: "calc(100% - 80px)", display: "flex", justifyContent: "center", alignItems:"center"}}>
                        {props.main}
                    </div>
            </div>
        </div>
        // </div>
    );
}
export default Dashboard