import React, {useState,useEffect} from 'react';
import Dashboard from '../dashboard/Dashboard';
import './ProfilePage.scss'
import Avatar from '@mui/material/Avatar';
import {withRouter} from "react-router-dom"


function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  var children;
  console.log(name.split(' '))
  if (name.split(' ').length>1){
    children = `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
  }else{
    children = `${name.split(' ')[0][0]}`
  }
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: children,
  };
}

function ProfileButton(props) {
  const onClickSignIn = () => {
    props.history.push("/profile");
  };

    return(
      <div className = "Vazaar-Profile-Container">
      {            JSON.parse(localStorage.getItem('vazaar-user'))?
            <>
            <Avatar {...stringAvatar(JSON.parse(localStorage.getItem('vazaar-user')).data.name)} />
            <div className = "Vazaar-Profile-Name" style = {{marginLeft:"15px"}} onClick = {onClickSignIn}>
                {JSON.parse(localStorage.getItem('vazaar-user')).data.name}
            </div>
            </>:
            <></>
      }
        </div>
    );
}
export default  withRouter(ProfileButton);
