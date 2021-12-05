
import React, {useState,useEffect} from 'react';
import {
    useRouteMatch
  } from "react-router-dom";


import './SellerPage.scss'
import Dashboard from '../dashboard/Dashboard';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ProfileButton from '../profile/ProfileButton';

import SoldListings from './seller_sections/SoldListings'
import SellItem from './seller_sections/SellItem';
import FAQ from '../FAQ/FAQ'

import sell_item from './../../assets/images/sell_item.png'
import sold_listings from './../../assets/images/sold_listings.png'
import unsold_listings from './../../assets/images/unsold_listings.png'
import faq from './../../assets/images/faq.png'
import switch_page from './../../assets/images/switch.png'

function SellerPage(props) {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    let { path, url } = useRouteMatch();

    const [userData, setUserData] = useState(); 
    const [signedIn, setSignedIn] = useState(false); 

    useEffect(() => {
        if(localStorage.getItem('vazaar-jwt-token')){
            //need to call authenticate API in future
            setUserData(JSON.parse(localStorage.getItem('vazaar-user')).user)
            setSignedIn(true)
            console.log(JSON.parse(localStorage.getItem('vazaar-user')).user)
        }else{
            alert("Please Sign In to Start Selling!")
            props.history.push('/')
        }
    },[])


    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    }

    const onClickBuy = () =>{
        props.history.push('buy')
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
                    <img className="Vazaar-category-icon" src={sell_item}/>
                    <div style = {{paddingRight: "10px" }}></div>
                    <ListItemText className = {selectedIndex==0?"Vazaar-List-White":"Vazaar-List-Black"} primary="Sell Item" />
                    </ListItemButton>

                    <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                    >
                    {/* <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon> */}
                    <img className="Vazaar-category-icon" src={sold_listings}/>
                    <div style = {{paddingRight: "10px" }}></div>
                    <ListItemText className = {selectedIndex==1?"Vazaar-List-White":"Vazaar-List-Black"} primary="Sold Listings" />
                    </ListItemButton>

                    <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                    >
                    <img className="Vazaar-category-icon" src={unsold_listings}/>
                    <div style = {{paddingRight: "10px" }}></div>
                    <ListItemText className = {selectedIndex==2?"Vazaar-List-White":"Vazaar-List-Black"} primary="Unsold Listings" />
                    </ListItemButton>

                    <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                    >
                    <img className="Vazaar-category-icon" src={faq}/>
                    <div style = {{paddingRight: "10px" }}></div>
                    <ListItemText className = {selectedIndex==3?"Vazaar-List-White":"Vazaar-List-Black"} primary="FAQ" />
                    </ListItemButton>

                    <div style = {{paddingBottom: "20px" }}></div>

                    <ListItemButton
                    selected={selectedIndex === 5}
                    onClick = {onClickBuy}
                    >
                    <img className="Vazaar-category-icon" src={switch_page}/>
                    <div style = {{paddingRight: "10px" }}></div>
                    <ListItemText primary="Switch to Buy" />
                    </ListItemButton>
                    
                    </List>
                </div>
            }
            main = {
                <div className = "Vazaar-Seller-Section-Container">
                    {
                    {  
                        0: <SellItem/>,
                        1: <SoldListings/>,
                        3: <FAQ/>
                    }[selectedIndex]
                    }
                </div>
            }
            
            />
    );
}

export default SellerPage