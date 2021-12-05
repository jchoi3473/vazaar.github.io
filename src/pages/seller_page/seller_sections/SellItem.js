import React, { useState } from "react";
import UploadPicture from "./UploadPicture";
import "./SellItem.scss";
import { alpha, styled } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import BlueButton from "../../../components/button/BlueButton";
import { addListing } from "../../../lib/api";

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
    width: "95%",
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
  width: "100%",
  "& .MuiOutlinedInput-root": {
    width: "100%",
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    //   border: "1px solid #ced4da",
    fontSize: 14,
    maxWidth: "373px",
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

function SellItem(props) {
  const [category, setCategory] = useState();
  const [condition, setCondition] = useState();
  const [delivery, setDelivery] = useState();
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(0);

  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("");
  const [dimension, setDimension] = useState("");
  const [keywords, setKeyWords] = useState("");

  const [images, setUploadImages] = React.useState([]);

  const handleStateChange = (event) => {
    setCategory(event.target.value);
  };
  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };
  const handleDeliveryChange = (event) => {
    setDelivery(event.target.value);
  };
  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeYear = (event) => {
    setYear(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const onChangeColor = (event) => {
    setColor(event.target.value);
  };
  const onChangeDimension = (event) => {
    setDimension(event.target.value);
  };
  const onChangeKeywords = (event) => {
    setKeyWords(event.target.value);
  };

  //POST API for add listing

  const onClickAddListing = async (e) => {
    // e.preventDefault();
    if(images.length<2){
      alert("You must add at least two pictures");
      return;
    }
    const response = await addListing(
      title,
      year,
      condition,
      color,
      delivery,
      dimension,
      description,
      price,
      images,
      category
    );
    console.log(response)
    if(response.status ==='success'){
      setCategory()
      setCondition()
      setDelivery()
      setDescription("")
      setTitle("")
      setYear(0)
      setPrice(0)
      setColor("")
      setDimension("")
      setKeyWords("")
      setUploadImages([])
    }
  };
  return (
    <div className="Vazaar-SellItem-Container">
      <div className="Vazaar-SellItem-LeftCol" style={{ height: "100%" }}>
        <div className="Vazaar-Picture-Container">
          <div className="Vazaar-SellItem-Form-SecondTitle">
            {"DRAG & DROP IMAGE"}
          </div>
          <UploadPicture setUploadImages={setUploadImages} />
        </div>
        <div style={{ padding: "20px" }}>
          <div className="Vazaar-SellItem-Form-SecondTitle">DESCRIPTION</div>
          <textarea
            className="Vazaar-SellItem-Description-TextArea"
            onChange={(e) => onChangeDescription(e)}
            type="textarea"
            value={description}
            name="textValue"
            placeholder="Enter Description"
            // style = {{maxHeight: "300px", minHeight: "300px", minWidth: "550px", maxWidth: "550px", resize : "none"}}
            // onChange={this.handleChange}
          />
        </div>
      </div>
      <div className="Vazaar-SellItem-RightCol">
        <div>
          <div style={{ width: "100%" }}>
            <div className="Vazaar-SellItem-Form-SecondTitle">TITLE</div>
            <FormInput
              placeholder="Enter Title"
              value={title}
              onChange={(e) => onChangeTitle(e)}
              // value={name}
              // onChange={(e) => onChangeName(e)}
            />
          </div>
        </div>
        <div>
          <div style={{ width: "100%" }}>
            <div className="Vazaar-SellItem-Form-SecondTitle">PURCHASED YEAR</div>
            <FormInput
              placeholder="Enter Year"
              value={year}
              onChange={(e) => onChangeYear(e)}
              // value={name}
              // onChange={(e) => onChangeName(e)}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "inline-block", width: "45%" }}>
            <div className="Vazaar-SellItem-Form-SecondTitle">PRICE</div>
            <FormInput
              placeholder="Enter Price"
              value={price}
              onChange={(e) => onChangePrice(e)}
              // value={name}
              // onChange={(e) => onChangeName(e)}
            />
          </div>
          <div style={{ display: "inline-block", width: "45%" }}>
            <div className="Vazaar-SignUp-Form-SecondTitle">CATEGORY</div>
            <FormTextField
              style={{
                textAlign: "left",
              }}
              value={category}
              placeholder="Select Category"
              select
              onChange={handleStateChange}
              rows={5}
              SelectProps={{
                MenuProps: { PaperProps: { sx: { maxHeight: 250 } } },
              }}
            >
              {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </FormTextField>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "inline-block", width: "45%" }}>
            <div className="Vazaar-SellItem-Form-SecondTitle">COLOR</div>
            <FormInput
              placeholder="Enter Color"
              value={color}
              onChange={(e) => onChangeColor(e)}
              // value={name}
              // onChange={(e) => onChangeName(e)}
            />
          </div>
          <div style={{ display: "inline-block", width: "45%" }}>
            <div className="Vazaar-SignUp-Form-SecondTitle">CONDITION</div>
            <FormTextField
              style={{
                textAlign: "left",
              }}
              value={condition}
              placeholder="Select Category"
              select
              onChange={handleConditionChange}
              rows={5}
              SelectProps={{
                MenuProps: { PaperProps: { sx: { maxHeight: 250 } } },
              }}
            >
              {conditions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </FormTextField>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "inline-block", width: "45%" }}>
            <div className="Vazaar-SellItem-Form-SecondTitle">DIMENSION</div>
            <FormInput
              placeholder="Enter Dimension"
              value={dimension}
              onChange={(e) => onChangeDimension(e)}
            />
          </div>
          <div style={{ display: "inline-block", width: "45%" }}>
            <div className="Vazaar-SignUp-Form-SecondTitle">DELIVERY</div>
            <FormTextField
              style={{
                textAlign: "left",
              }}
              value={delivery}
              placeholder="Select Option"
              select
              onChange={handleDeliveryChange}
              rows={5}
              SelectProps={{
                MenuProps: { PaperProps: { sx: { maxHeight: 250 } } },
              }}
            >
              {deliveries.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </FormTextField>
          </div>
        </div>
        <div>
          <div className="Vazaar-SellItem-Form-SecondTitle">KEYWORDS</div>
          <FormInput
            placeholder="Enter Keywords"
            value={keywords}
            onChange={(e) => onChangeKeywords(e)}
          />
        </div>
        <div style={{ textAlign: "right", paddingTop: "10%" }}>
          <div
            style={{
              width: "fit-content",
            }}
            onClick={(e) => onClickAddListing(e)}
          >
            <BlueButton text="Add Listing" width="150px" height="47px" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SellItem;

const categories = [
  {
    value: "Bedroom",
    label: "Bedroom",
  },
  {
    value: "Living Room",
    label: "Living Room",
  },
  {
    value: "Kitchen",
    label: "Kitchen",
  },
  {
    value: "Bathroom",
    label: "Bathroom",
  },
];

const conditions = [
  {
    value: "Mint",
    label: "Mint",
  },
  {
    value: "Good",
    label: "Good",
  },
  {
    value: "Fair",
    label: "Fair",
  },
  {
    value: "Bad",
    label: "Bad",
  },
];

const deliveries = [
  {
    value: "Yes",
    label: "Yes",
  },
  {
    value: "No",
    label: "No",
  },
];