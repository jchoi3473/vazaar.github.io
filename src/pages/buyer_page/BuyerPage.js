
import React, {useState, useEffect} from 'react';
import {
    useRouteMatch
  } from "react-router-dom";

import './BuyerPage.scss'
import Dashboard from '../dashboard/Dashboard';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ProfileButton from '../profile/ProfileButton';
import BrowseAllListings from './buyer_sections/BrowseAllListings'
import Buyer_Dashboard from './buyer_sections/buyer_dashboard'
import FAQ from '../FAQ/FAQ'

import dashboard from './../../assets/images/buyer_dashboard.png'
import browse_all from './../../assets/images/browse_all.png'
import bedroom from './../../assets/images/bedroom.png'
import living_room from './../../assets/images/living_room.png'
import kitchen from './../../assets/images/kitchen.png'
import bathroom_picture from './../../assets/images/bathroom.png'
import faq from './../../assets/images/faq.png'
import switch_page from './../../assets/images/switch.png'

import KitchenPage from './buyer_sections/Kitchen'
import LivingRoomPage from './buyer_sections/LivingRoom'
import BathroomPage from './buyer_sections/Bathroom'
import BedroomPage from './buyer_sections/Bedroom'


function BuyerPage(props) {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    let { path, url } = useRouteMatch();
    const [userData, setUserData] = useState(); 
    const [signedIn, setSignedIn] = useState(false); 

    useEffect(() => {
        console.log("Not Triggered why")

        if(localStorage.getItem('vazaar-jwt-token')){
            //need to call authenticate API in future
            setUserData(JSON.parse(localStorage.getItem('vazaar-user')).user)
            setSignedIn(true)
            console.log(JSON.parse(localStorage.getItem('vazaar-user')).user)
        }else{
            alert("Please Sign In to Start Buying!")
            props.history.push('/')
        }
    },[])


    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    }

    const onClickSell = () =>{
        props.history.push('sell')
    }

    const onClickLogo = () =>{
        props.history.push('main')
    }

    return(
    <Dashboard 
        profile = {
            <ProfileButton/>
        }
        logo = {
            <div className = "Vazaar-Dashboard-Logo" onClick = {onClickLogo}>vazaar</div>
        }
        left = {
        <div>
        <List component="nav" aria-label="main mailbox folders">

            <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
            >
            {/* <ListItemIcon>
                <InboxIcon />
            </ListItemIcon> */}
            <img className="Vazaar-category-icon" src={dashboard}/>
            <div style = {{paddingRight: "10px" }}></div>
            <ListItemText className = {selectedIndex==0?"Vazaar-List-White":"Vazaar-List-Black"} primary="Dashboard" />
            </ListItemButton>

            <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
            >
            {/* <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon> */}
            <img className="Vazaar-category-icon" src={browse_all}/>
            <div style = {{paddingRight: "10px" }}></div>
            <ListItemText className = {selectedIndex==1?"Vazaar-List-White":"Vazaar-List-Black"} primary="Browse All"/>
            </ListItemButton>

            <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
            >
            <img className="Vazaar-category-icon" src={bedroom}/>
            <div style = {{paddingRight: "10px" }}></div>
            <ListItemText className = {selectedIndex==2?"Vazaar-List-White":"Vazaar-List-Black"} primary="Bedroom" />

            </ListItemButton>
            <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
            >
            <img className="Vazaar-category-icon" src={living_room}/>
            <div style = {{paddingRight: "10px" }}></div>
            <ListItemText className = {selectedIndex==3?"Vazaar-List-White":"Vazaar-List-Black"} primary="Living Room" />
            </ListItemButton>

            <ListItemButton
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
            >
            <img className="Vazaar-category-icon" src={kitchen}/>
            <div style = {{paddingRight: "10px" }}></div>
            <ListItemText className = {selectedIndex==4?"Vazaar-List-White":"Vazaar-List-Black"} primary="Kitchen" />
            </ListItemButton>

            <ListItemButton
            selected={selectedIndex === 5}
            onClick={(event) => handleListItemClick(event, 5)}
            >
            <img className="Vazaar-category-icon" src={bathroom_picture}/>
            <div style = {{paddingRight: "10px" }}></div>
            <ListItemText className = {selectedIndex==5?"Vazaar-List-White":"Vazaar-List-Black"} primary="Bathroom"/>
            </ListItemButton>

            <ListItemButton
            selected={selectedIndex === 6}
            onClick={(event) => handleListItemClick(event, 6)}
            >
            <img className="Vazaar-category-icon" src={faq}/>
            <div style = {{paddingRight: "10px" }}></div>
            <ListItemText className = {selectedIndex==6?"Vazaar-List-White":"Vazaar-List-Black"} primary="FAQ" />
            </ListItemButton>

            <div style = {{paddingBottom: "20px" }}></div>

            <ListItemButton
            selected={selectedIndex === 7}
            onClick = {onClickSell}
            >
            <img className="Vazaar-category-icon" src={switch_page}/>
            <div style = {{paddingRight: "10px" }}></div>
            <ListItemText primary="Switch to Sell" />
            </ListItemButton>

        </List>
                    </div>
            }
            main = {
                <div className = "Vazaar-Seller-Section-Container">
                    {
                    {  
                        0: <Buyer_Dashboard/>,
                        1: <BrowseAllListings type = "all"/>,
                        2: <BedroomPage type = "bedroom"/>,
                        3: <LivingRoomPage type = "living room"/>,
                        4: <KitchenPage type = "kitchen"/>,
                        5: <BathroomPage type = "bathroom"/>,
                        6: <FAQ/>
                    }[selectedIndex]
                    }
                </div>
            }
            
            />
    );
}

export default BuyerPage


