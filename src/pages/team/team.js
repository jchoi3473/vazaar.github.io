import React, {useState, useEffect} from 'react';
import './team.scss'
import team_background from './../../assets/images/team_background.png'

import {authenticateUser} from './../../lib/api'

import sunny_pic from './../../assets/images/team_pics/sunny.png'
import jaeho_pic from './../../assets/images/team_pics/jaeho.png'
import taeheon_pic from './../../assets/images/team_pics/taeheon.png'
import isaac_pic from './../../assets/images/team_pics/isaac.png'
import lis_pic from './../../assets/images/team_pics/lis.png'
import taeyeon_pic from './../../assets/images/team_pics/taeyeon.png'
import dheep_pic from './../../assets/images/team_pics/dheep.png'


function Team(props) {
    const [signedIn, setSignedIn] = useState(false); 
    const [userData, setUserData] = useState(); 


    useEffect(() => {
        if(localStorage.getItem('vazaar-jwt-token')){
            //need to call authenticate API in future
            console.log(localStorage.getItem('vazaar-jwt-token'))
            const result = authenticateUser(localStorage.getItem('vazaar-jwt-token'))
            console.log(result)
            setUserData(JSON.parse(localStorage.getItem('vazaar-user')).user)
            setSignedIn(true)
            console.log(JSON.parse(localStorage.getItem('vazaar-user')).user)
        }
    },[])
    const onClickSignUp = () =>{
        props.history.push('sign-up')
    }
    const onClickSignIn = () =>{
        props.history.push('sign-in')
    }
    const onClickTeam = () =>{
        props.history.push('team')
    }
    const onClickLogo = () =>{
        props.history.push('main')
    }

  return (
    <div style = {{backgroundImage:`url(${team_background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100%'}}>

        <div className = "Vazaar-Team-Background">

            <div className = "Vazaar-Team-Navigation">
                <div className = "Vazaar-Team-Logo" style = {{"fontSize":"48px", "position":"absolute", "top":"24px", "left":"50px", "color":"#FFFFFF"}} onClick = {onClickLogo}>
                    vazaar
                </div>



                    {
                    signedIn?
                        <div className = "Vazaar-Main-Signin-Container">
                            <div className = "Vazaar-Main-Signin" style = {{"fontFamily":"Roboto"}} onClick = {onClickTeam}>
                            Meet the Team
                            </div>
                            <div className = "Vazaar-Main-Signin" style = {{"fontFamily":"Roboto"}}>
                            {JSON.parse(localStorage.getItem('vazaar-user')).data.name}
                            </div>
                        </div>
                        :
                        <div className = "Vazaar-Main-Signin-Container">
                            <div className = "Vazaar-Team-Signin" style = {{"fontFamily":"Roboto"}} onClick = {onClickSignIn}>
                            Login
                            </div>
                            <div className = "Vazaar-Team-Signin" style = {{"fontFamily":"Roboto"}}onClick = {onClickSignUp}>
                                Sign Up
                            </div>
                        </div>
                    }
                   
            </div>

            <div className = "Vazaar-Team-Body">

                <div className = "Vazaar-Team-Profile-Entire-Container">

                    <div className = "Vazaar-Team-Profile-Row-Container">

                        <div className = "Vazaar-Team-Profile-Individual-Container">
                            <img className="Vazaar-Team-Icon" src={sunny_pic}/>
                            <div className = "Vazaar-Team-Description-Container">
                                <div className = "Vazaar-Team-Name-Text">Sunny Chung</div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">Email: </span> 
                                    <span class="Vazaar-Team-Description-Link">sunny.chung@emory.edu</span> 
                                </div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">LinkedIn: </span> 
                                    <span><a class="Vazaar-Team-Description-Link" style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/sunny-chung/" target="_blank" rel="noreferrer noopener">Sunny Chung</a></span> 
                                </div>
                            </div> 
                        </div>

                        <div className = "Vazaar-Team-Profile-Individual-Container">
                            <img className="Vazaar-Team-Icon" src={jaeho_pic}/>
                            <div className = "Vazaar-Team-Description-Container">
                                <div className = "Vazaar-Team-Name-Text">Jae Ho Choi</div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">Email: </span> 
                                    <span class="Vazaar-Team-Description-Link">jae.ho.choi@emory.edu</span> 
                                </div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">LinkedIn: </span> 
                                    <span><a class="Vazaar-Team-Description-Link" style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/jae-ho-choi-3424a5125/" target="_blank" rel="noreferrer noopener">Jae Ho Choi</a></span> 
                                </div>
                            </div> 
                        </div>

                        <div className = "Vazaar-Team-Profile-Individual-Container">
                            <img className="Vazaar-Team-Icon" src={taeheon_pic}/>
                            <div className = "Vazaar-Team-Description-Container">
                                <div className = "Vazaar-Team-Name-Text">Taeheon Kim</div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">Email: </span> 
                                    <span class="Vazaar-Team-Description-Link">taeheon.kim@emory.edu</span> 
                                </div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">LinkedIn: </span> 
                                    <span><a class="Vazaar-Team-Description-Link" style={{ textDecoration: 'none' }} href="https://www.linkedin.com" target="_blank" rel="noreferrer noopener">Taeheon Kim</a></span> 
                                </div>
                            </div> 
                        </div>

                        <div className = "Vazaar-Team-Profile-Individual-Container">
                            <img className="Vazaar-Team-Icon" src={isaac_pic}/>
                            <div className = "Vazaar-Team-Description-Container">
                                <div className = "Vazaar-Team-Name-Text">Isaac Yoo</div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">Email: </span> 
                                    <span class="Vazaar-Team-Description-Link">isaac.yoo@emory.edu</span> 
                                </div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">LinkedIn: </span> 
                                    <span><a class="Vazaar-Team-Description-Link" style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/isaacsyoo/" target="_blank" rel="noreferrer noopener">Isaac Yoo</a></span> 
                                </div>
                            </div> 
                        </div>                                                

                    </div>



                    <div className = "Vazaar-Team-Profile-Row-Container">

                        <div className = "Vazaar-Team-Profile-Individual-Container">
                            <img className="Vazaar-Team-Icon" src={taeyeon_pic}/>
                            <div className = "Vazaar-Team-Description-Container">
                                <div className = "Vazaar-Team-Name-Text">Taeyeon Kim</div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">Email: </span> 
                                    <span class="Vazaar-Team-Description-Link">tae.yeon.kim@emory.edu</span> 
                                </div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">LinkedIn: </span> 
                                    <span><a class="Vazaar-Team-Description-Link" style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/tae-yeon-kim-8248521a2/" target="_blank" rel="noreferrer noopener">Taeyeon Kim</a></span> 
                                </div>
                            </div> 
                        </div>

                        <div className = "Vazaar-Team-Profile-Individual-Container">
                            <img className="Vazaar-Team-Icon" src={lis_pic}/>
                            <div className = "Vazaar-Team-Description-Container">
                                <div className = "Vazaar-Team-Name-Text">Lis Dautaj</div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">Email: </span> 
                                    <span class="Vazaar-Team-Description-Link">ldautaj@emory.edu</span> 
                                </div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">LinkedIn: </span> 
                                    <span><a class="Vazaar-Team-Description-Link" style={{ textDecoration: 'none' }} href="http://www.linkedin.com/in/lis-dautaj-3540b2197" target="_blank" rel="noreferrer noopener">Lis Dautaj</a></span> 
                                </div>
                            </div> 
                        </div>

                        <div className = "Vazaar-Team-Profile-Individual-Container">
                            <img className="Vazaar-Team-Icon" src={dheep_pic}/>
                            <div className = "Vazaar-Team-Description-Container">
                                <div className = "Vazaar-Team-Name-Text">Dheep Dalamal</div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">Email: </span> 
                                    <span class="Vazaar-Team-Description-Link">ddalama@emory.edu</span> 
                                </div>
                                <div class="Vazaar-Team-Description-Line-Of-Text">
                                    <span class="Vazaar-Team-Description-Bold">LinkedIn: </span> 
                                    <span><a class="Vazaar-Team-Description-Link" style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/dheep-dalamal-b1aa75153/" target="_blank" rel="noreferrer noopener">Dheep Dalamal</a></span> 
                                </div>
                            </div> 
                        </div>   


                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Team;
