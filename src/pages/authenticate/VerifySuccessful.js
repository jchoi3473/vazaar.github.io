import React, {useState} from 'react';
import './../main/MainPage.scss'
import './Authenticate.scss'
import background from './../../assets/images/background.jpg'

import { alpha, styled } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';
import BlueButton from '../../components/button/BlueButton';
import {forgotPassword} from '../../lib/api'
//Custom Material UI input
const FormInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    'display':"block",
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 14,
      width: '393px',
      height: '18px',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        'Roboto',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

function VerifySuccessful(props) {
    const [email, setEmail] = useState();

    const onClickSignUp = () =>{
        props.history.push('signup')
    }
    const onClickLogo = () =>{
        props.history.push('main')
    }
    const onChangeEmail = (e) => {
      setEmail(e.target.value);
    };
    const onClickReset  = async () => {
      let response = await forgotPassword(email)
      console.log(response)
    }

  return (
    <div 
    style = 
    {{backgroundImage:`url(${background})`, 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%'}}>
        <div className = "Vazaar-Main-Navigation">
            <div className = "Vazaar-Main-Logo" style = {{"fontSize":"48px", "position":"absolute", "top":"24px", "left":"50px", "color":"#FFFFFF"}} onClick = {onClickLogo}>
                vazaar
            </div>
        </div>
        <div className = "Vazaar-Main-Background">
            <div className = "Vazaar-Verify-Container">
                <div className = "Vazaar-SignUp-Header-Container">
                    <div className = "Vazaar-Main-Logo" style = {{"fontSize":"36px", "color":"#7D9EB5", "paddingTop":"25px"}}>
                        vazaar
                    </div>
                    <div className = "Vazaar-Roboto-bold" style = {{"fontSize":"30px", "marginTop":"10px"}}>
                        Your Email Was Verified Successfully!
                    </div>
                    <div className = "Vazaar-Roboto-normal" style = {{"fontSize":"14px", "color":"#8DAABE", "marginTop":"40px"}}>
                      Now you can sell and buy goods from your fellow collegues!
                    </div>
                    {/* <div className = "Vazaar-Roboto-normal" style = {{"fontSize":"14px", "color":"#8DAABE", "marginTop":"10px"}}>
                    email address. If you didn’t recieve an email make sure 
                    </div>
                    <div className = "Vazaar-Roboto-normal" style = {{"fontSize":"14px", "color":"#8DAABE", "marginTop":"10px"}}>
                    to check your spam folder.
                    </div> */}
                </div>
              
            </div>

        </div>
    </div>
  );
}

export default VerifySuccessful;
