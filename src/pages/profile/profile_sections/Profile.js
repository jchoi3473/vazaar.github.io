import React, {useState,useEffect} from 'react';
import './Profile.scss'
import Avatar from '@mui/material/Avatar';
import ProfileButton from '../ProfileButton';
import { alpha, styled } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import BlueButton from '../../../components/button/BlueButton';

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import {authenticateUser} from '../../../lib/api'

const FormInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  display: "block",
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 14,
  //   width: "393px",
    height: "18px",
    padding: "10px 12px",
    width: "60%",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Roboto"].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const FormTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  "label + &": {
    marginTop: theme.spacing(3),
  },
  display: "block",
  width: "65%",
  "& .MuiOutlinedInput-root":{
      width: "100%",

  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
  //   border: "1px solid #ced4da",
    fontSize: 14,
    maxWidth: "430px",
    width: "100%",
    height: "18px",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Roboto"].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

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



function Profile(props) {
  const [userData, setUserData] = useState(); 
  const [signedIn, setSignedIn] = useState(false); 

  useEffect(() => {
    const fetchProducts = async() =>{
        if(localStorage.getItem('vazaar-jwt-token')){
            //need to call authenticate API in future
            console.log(localStorage.getItem('vazaar-jwt-token'))
            const result = await authenticateUser(localStorage.getItem('vazaar-jwt-token'))
            // console.log(result)
            setUserData(JSON.parse(localStorage.getItem('vazaar-user')).data)
            setSignedIn(true)
            console.log(JSON.parse(localStorage.getItem('vazaar-user')).data)
        }
    }
    fetchProducts()
  },[])

    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
      };


    const [state, setState] = useState(JSON.parse(localStorage.getItem('vazaar-user')).data.state); //replace with REAL USER information
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState(JSON.parse(localStorage.getItem('vazaar-user')).data.address);
    const [city, setCity] = useState(JSON.parse(localStorage.getItem('vazaar-user')).data.city);
    const [zipcode, setZipcode] = useState(JSON.parse(localStorage.getItem('vazaar-user')).data.zipcode);
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const onChangeName = (e) => {
      setName(e.target.value);
    };
    const onChangeEmail = (e) => {
      setEmail(e.target.value);
    };
    const onChangeAddress = (e) => {
      setAddress(e.target.value);
    };
    const onChangeCity = (e) => {
      setCity(e.target.value);
    };
    const onChangeZipcode = (e) => {
      setZipcode(e.target.value);
    };
    const onChangePassword = (e) => {
      setPassword(e.target.value);
    };
    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };  
    const handleStateChange = (event) => {
      setState(event.target.value);
    };

    const onClickLogo = () => {
      props.history.push("main");
    };

    const onClickCancel = () => {
      props.history.push("profile");
    };

    const onClickModifyProfile = async () => {
      console.log("Modify Profile");
      await Profile(
        name,
        email,
        address,
        city,
        zipcode,
        password,
      );
    };
    return(
          <div className = "Vazaar-Profile-Section-Container">
            
            <div className = "Vazaar-Profile-Body">

              <div className = "Vazaar-Profile-NonButtons-Container">

                <div className = "Vazaar-Profile-NameInfo-Left-Container">

                  <div className = "Vazaar-Profile-Avatar-Name-Combo">
                    <Avatar className = "Vazaar-Avatar" {...stringAvatar(JSON.parse(localStorage.getItem('vazaar-user')).data.name)} />
                    <div className = "Vazaar-Profile-Name" style = {{fontSize:"30px", marginLeft:"20px"}}> 
                      {JSON.parse(localStorage.getItem('vazaar-user')).data.name}
                    </div> 
                  </div> 

                  {/* <div style = {{marginBottom: "50px" }}></div> */}

                  <div className="Vazaar-Profile-Form-SubContainer">
                    <div className="Vazaar-Profile-Form-SecondTitle"> NAME</div>
                      <FormInput style={{ width: "150%" }}
                        placeholder={JSON.parse(localStorage.getItem('vazaar-user')).data.name} //replace with REAL USER information
                        value={name}
                        onChange={(e) => onChangeName(e)}
                        disabled = {true}
                      />

                  <div className="Vazaar-Profile-Form-SubContainer">
                    <div className="Vazaar-Profile-Form-SecondTitle">EMAIL</div>
                    <FormInput style={{ width: "150%" }}
                        placeholder={JSON.parse(localStorage.getItem('vazaar-user')).data.email} //replace with REAL USER information
                        value={email}
                        onChange={(e) => onChangeEmail(e)}
                        disabled = {true}
                      />

                  <div className="Vazaar-Profile-Form-SubContainer">
                    <div className="Vazaar-Profile-Form-SecondTitle">PASSWORD</div>
                    <FormInput style={{ width: "150%" }}
                        placeholder="Modify Password"
                        value={"************"}
                        onChange={(e) => onChangePassword(e)}
                        type="password"
                        disabled = {true}
                      />

                  </div>
                  </div>
                  </div>
                  
                </div> 


                <div className="Vazaar-Profile-AddressInfo-Right-Container" style = {{paddingTop:"30px"}}>

                  <div className="Vazaar-Profile-Form-SubContainer">
                    <div className="Vazaar-Profile-Form-SecondTitle">ADDRESS</div>
                    <FormInput style={{ width: "150%" }}
                        placeholder={JSON.parse(localStorage.getItem('vazaar-user')).data.address} //replace with REAL USER information
                        value={address}
                        onChange={(e) => onChangeAddress(e)}
                      />

                  <div className="Vazaar-Profile-Form-SubContainer">
                    <div className="Vazaar-Profile-Form-SecondTitle">CITY</div>
                    <FormInput style={{ width: "150%" }}
                      placeholder={JSON.parse(localStorage.getItem('vazaar-user')).data.city} //replace with REAL USER information
                      value={city}
                      onChange={(e) => onChangeCity(e)}
                    />

                  <div className="Vazaar-Profile-Form-SubContainer">
                    <div className="Vazaar-Profile-Form-SecondTitle">STATE</div>
                      <div className="Vazaar-Profile-State">
                        <FormTextField
                            style={{
                              textAlign: "left",
                            }}
                            value={state}
                            placeholder={JSON.parse(localStorage.getItem('vazaar-user')).data.state} //replace with REAL USER information
                            select
                            onChange={handleStateChange}
                            rows={5}
                            SelectProps={{
                              MenuProps: { PaperProps: { sx: { maxHeight: 250 } } },
                            }}
                          >
                            {states.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.value}
                              </MenuItem>
                            ))}
                          </FormTextField>
                      </div>

                  <div className="Vazaar-Profile-Form-SubContainer">
                    <div className="Vazaar-Profile-Form-SecondTitle">ZIP CODE</div>
                    <FormInput style={{ width: "150%" }}
                        placeholder={JSON.parse(localStorage.getItem('vazaar-user')).data.zipcode} //replace with REAL USER information
                        value={zipcode}
                        onChange={(e) => onChangeZipcode(e)}
                      />

                  </div>
                  </div>
                  </div>
                  </div>
                
                </div> 

              </div>


              <div className="Vazaar-Profile-Buttons-SubContainer">

                {/* <div style = {{paddingTop: "20px" }}></div> */}

                <div onClick={(e) => onClickModifyProfile()}>
                  <BlueButton text="Save" width="150px" height="47px" />
                </div>

                <div style = {{paddingRight: "20px" }}></div>

                <div onClick={(e) => onClickCancel()}>
                  <BlueButton text="Cancel" width="150px" height="47px" />            
                </div>

              </div>              
            </div>
          </div>
    );
}

export default Profile;

const states = [
  {
    value: "Alabama",
    label: "AL",
  },
  {
    value: "Alaska",
    label: "AK",
  },
  {
    value: "American Samoa",
    label: "AS",
  },
  {
    value: "Arizona",
    label: "AZ",
  },
  {
    value: "Arkansas",
    label: "AR",
  },
  {
    value: "California",
    label: "CA",
  },
  {
    value: "Colorado",
    label: "CO",
  },
  {
    value: "Connecticut",
    label: "CT",
  },
  {
    value: "Delaware",
    label: "DE",
  },
  {
    value: "District Of Columbia",
    label: "DC",
  },
  {
    value: "Federated States Of Micronesia",
    label: "FM",
  },
  {
    value: "Florida",
    label: "FL",
  },
  {
    value: "Georgia",
    label: "GA",
  },
  {
    value: "Guam",
    label: "GU",
  },
  {
    value: "Hawaii",
    label: "HI",
  },
  {
    value: "Idaho",
    label: "ID",
  },
  {
    value: "Illinois",
    label: "IL",
  },
  {
    value: "Indiana",
    label: "IN",
  },
  {
    value: "Iowa",
    label: "IA",
  },
  {
    value: "Kansas",
    label: "KS",
  },
  {
    value: "Kentucky",
    label: "KY",
  },
  {
    value: "Louisiana",
    label: "LA",
  },
  {
    value: "Maine",
    label: "ME",
  },
  {
    value: "Marshall Islands",
    label: "MH",
  },
  {
    value: "Maryland",
    label: "MD",
  },
  {
    value: "Massachusetts",
    label: "MA",
  },
  {
    value: "Michigan",
    label: "MI",
  },
  {
    value: "Minnesota",
    label: "MN",
  },
  {
    value: "Mississippi",
    label: "MS",
  },
  {
    value: "Missouri",
    label: "MO",
  },
  {
    value: "Montana",
    label: "MT",
  },
  {
    value: "Nebraska",
    label: "NE",
  },
  {
    value: "Nevada",
    label: "NV",
  },
  {
    value: "New Hampshire",
    label: "NH",
  },
  {
    value: "New Jersey",
    label: "NJ",
  },
  {
    value: "New Mexico",
    label: "NM",
  },
  {
    value: "New York",
    label: "NY",
  },
  {
    value: "North Carolina",
    label: "NC",
  },
  {
    value: "North Dakota",
    label: "ND",
  },
  {
    value: "Northern Mariana Islands",
    label: "MP",
  },
  {
    value: "Ohio",
    label: "OH",
  },
  {
    value: "Oklahoma",
    label: "OK",
  },
  {
    value: "Oregon",
    label: "OR",
  },
  {
    value: "Palau",
    label: "PW",
  },
  {
    value: "Pennsylvania",
    label: "PA",
  },
  {
    value: "Puerto Rico",
    label: "PR",
  },
  {
    value: "Rhode Island",
    label: "RI",
  },
  {
    value: "South Carolina",
    label: "SC",
  },
  {
    value: "South Dakota",
    label: "SD",
  },
  {
    value: "Tennessee",
    label: "TN",
  },
  {
    value: "Texas",
    label: "TX",
  },
  {
    value: "Utah",
    label: "UT",
  },
  {
    value: "Vermont",
    label: "VT",
  },
  {
    value: "Virgin Islands",
    label: "VI",
  },
  {
    value: "Virginia",
    label: "VA",
  },
  {
    value: "Washington",
    label: "WA",
  },
  {
    value: "West Virginia",
    label: "WV",
  },
  {
    value: "Wisconsin",
    label: "WI",
  },
  {
    value: "Wyoming",
    label: "WY",
  },
];