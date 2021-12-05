import React, { useState } from "react";
import "./../main/MainPage.scss";
import "./Authenticate.scss";
import background from "./../../assets/images/background.jpg";

import { alpha, styled } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import BlueButton from "../../components/button/BlueButton";
import { signUP } from "../../lib/api";
//Custom Material UI input
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
    width: "393px",
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

const FormTextField = styled(TextField)(({ theme }) => ({
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
    width: "373px",
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

function SignUp(props) {
  const [state, setState] = useState("Alabama");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

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
  const onChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };
  const onClickSignIn = () => {
    props.history.push("sign-in");
  };
  const onClickLogo = () => {
    props.history.push("main");
  };

  const onClickSignUp = async () => {
    console.log("Trigger Signup");
    const response = await signUP(
      name,
      email,
      address,
      city,
      state, 
      zipcode,
      password,
      passwordConfirm
    );
    console.log(response)
    if(response.status ==="success"){
      props.history.push("verify");
    }
  };


  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
      }}
    >
      <div className="Vazaar-Main-Navigation">
        <div
          className="Vazaar-Main-Logo"
          style={{
            fontSize: "48px",
            position: "absolute",
            top: "24px",
            left: "50px",
            color: "#FFFFFF",
          }}
          onClick={onClickLogo}
        >
          vazaar
        </div>
      </div>
      <div className="Vazaar-Main-Background">
        <div className="Vazaar-SignUp-Container">
          <div className="Vazaar-SignUp-Header-Container">
            <div
              className="Vazaar-Main-Logo"
              style={{ fontSize: "36px", color: "#7D9EB5", paddingTop: "10px" }}
            >
              vazaar
            </div>
            <div
              className="Vazaar-Roboto-bold"
              style={{ fontSize: "30px", marginTop: "10px" }}
            >
              Sign Up
            </div>
            <div
              className="Vazaar-Roboto-normal"
              style={{ fontSize: "14px", color: "#8DAABE", marginTop: "15px" }}
            >
              Create your account here
            </div>
          </div>
          <div className="Vazaar-SignUp-Form-Container">
            <div className="Vazaar-SignUp-Form-SubContainer">
              <div className="Vazaar-SignUp-Form-SecondTitle">NAME</div>
              <FormInput
                placeholder="Enter Name"
                value={name}
                onChange={(e) => onChangeName(e)}
              />
            </div>
            <div className="Vazaar-SignUp-Form-SubContainer">
              <div className="Vazaar-SignUp-Form-SecondTitle">ADDRESS</div>
              <FormInput
                placeholder="Enter Address"
                value={address}
                onChange={(e) => onChangeAddress(e)}
              />
            </div>
            <div className="Vazaar-SignUp-Form-SubContainer">
              <div className="Vazaar-SignUp-Form-SecondTitle">EMAIL</div>
              <FormInput
                placeholder="Enter emory.edu Email"
                value={email}
                onChange={(e) => onChangeEmail(e)}
              />
            </div>
            <div className="Vazaar-SignUp-Form-SubContainer">
              <div className="Vazaar-SignUp-Form-SecondTitle">CITY</div>
              <FormInput
                placeholder="Enter City"
                value={city}
                onChange={(e) => onChangeCity(e)}
              />
            </div>
            <div className="Vazaar-SignUp-Form-SubContainer">
              <div className="Vazaar-SignUp-Form-SecondTitle">PASSWORD</div>
              <FormInput
                placeholder="Enter Password"
                value={password}
                onChange={(e) => onChangePassword(e)}
                type="password"
              />
            </div>
            <div className="Vazaar-SignUp-Form-SubContainer">
              <div className="Vazaar-SignUp-Form-SecondTitle">STATE</div>
              <FormTextField
                style={{
                  textAlign: "left",
                }}
                value={state}
                placeholder="Select State"
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
            <div className="Vazaar-SignUp-Form-SubContainer">
              <div className="Vazaar-SignUp-Form-SecondTitle">
                CONFIRM PASSWORD
              </div>
              <FormInput
                placeholder="Confirm Password"
                value={passwordConfirm}
                onChange={(e) => onChangePasswordConfirm(e)}
                type="password"
              />
            </div>
            <div className="Vazaar-SignUp-Form-SubContainer">
              <div className="Vazaar-SignUp-Form-SecondTitle">ZIP Code</div>
              <FormInput
                placeholder="Enter ZIP code"
                value={zipcode}
                onChange={(e) => onChangeZipcode(e)}
              />
            </div>
          </div>
          <div
            className="Vazaar-SignUp-Button-Container"
            style={{ marginTop: "15px" }}
          >
            <div onClick={(e) => onClickSignUp()}>
              <BlueButton text="Sign Up" width="417px" height="47px" />
            </div>
            <div style={{ marginTop: "15px" }}>
              <div
                className="Vazaar-Roboto-normal"
                style={{ display: "inline-block", fontSize: "14px" }}
              >
                Already have an account?
              </div>
              <div
                className="Vazaar-Roboto-normal"
                style={{
                  display: "inline-block",
                  fontSize: "14px",
                  color: "#11A1FD",
                  cursor: "pointer",
                  marginLeft: "5px",
                }}
                onClick={onClickSignIn}
              >
                Sign In
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

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
