import axios from "axios";
import { min } from "moment";

export const signUP = async function (
  name,
  email,
  address,
  city,
  state, 
  zipcode,
  password,
  passwordConfirm
) {
  const userInfo = {
    name: name,
    email: email,
    address: address,
    city: city,
    state: state, 
    zipcode: zipcode,
    password: password,
    passwordConfirm: passwordConfirm,
  };
  const response = await axios.post(
    "https://vazaar.herokuapp.com/api/v1/users/signup",
    userInfo
  );
  console.log(response)
  return response.status === 201 ? response.data : "error";
  //need to do something so that we can validate user(correctness)

};

//use JWT to authenticate
export const authenticateUser = async function (jwt) {
  console.log('jwt='+jwt)
  const response = await axios.get(
    "https://vazaar.herokuapp.com/api/v1/users/me",
      {headers:{
        Authorization: `Bearer ${jwt}` 
      }
    }
  );
  console.log(response.data.data);
  if (response.status === 200) {
    localStorage.setItem("vazaar-user", JSON.stringify(response.data.data));
    console.log(response.data.data);
    return response.data.status;
    // props.history.push('/main');
  }
  return response.status === 200 ? response.data : "error";
  //need to do something so that we can validate user(correctness)
};

export const signIn = async function (email, password) {
  const userInfo = {
    email: email,
    password: password,
  };
  try {
  const response = await axios.post(
    "https://vazaar.herokuapp.com/api/v1/users/login",
    userInfo
  )
    if (response.data.token) {
      localStorage.setItem("vazaar-jwt-token", response.data.token);
      localStorage.setItem("vazaar-user", JSON.stringify(response.data.data));
      console.log(response.data);
      return response.data.status;
      // props.history.push('/main');
    }
  }
  catch(error){
    //handle error
    console.log(error);
  };
};

export const addListing = async function (
  title,
  year,
  condition,
  color,
  delivery,
  dimension,
  description,
  price,
  imagesList,
  category
) {
  var bodyFormData = new FormData();
  bodyFormData.append("name", title);
  bodyFormData.append("purchasedYear", year);
  bodyFormData.append("condition", condition);
  bodyFormData.append("color", color);
  bodyFormData.append("delivery", delivery === "yes" ? true : false);
  bodyFormData.append("dimension", dimension);
  bodyFormData.append("description", description);
  bodyFormData.append("price", price);
  bodyFormData.append("imageCover", imagesList[0].file);
  bodyFormData.append("category", category);

  var tempImages = []
  for (var i = 1; i < imagesList.length; i++) {
    tempImages.push(imagesList[i].file)
  }
  bodyFormData.append("images", tempImages);

  const response = await axios({
    method: "post",
    url: "https://vazaar.herokuapp.com/api/v1/items",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      //handle success  
      alert("Item Post Successful!")
      console.log(response);
      return response.data
    })
    .catch(function (response) {
      //handle error
      console.log(response);
      return response.data
    });
};


export const getAllListings = async function (category, page, numItems, sort, minPrice, maxPrice) {

  //need to do something so that we can validate user(correctness)
  try {
    var response;
    if(minPrice===0 && maxPrice===0){
      if(category === 'all'){
        if(sort.length>0){
          response = await axios.get(
            // (`/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}`
            
            'https://vazaar.herokuapp.com/api/v1/items',{ params: { page: page, limit: numItems, sort: sort } }
          );
        }
        else{
          response = await axios.get(
            "https://vazaar.herokuapp.com/api/v1/items",{ params: { page: page, limit: numItems } }
          );
        }
      }
      else{
        if(sort.length>0){
          response = await axios.get(
            "https://vazaar.herokuapp.com/api/v1/items",{ params: { category: category,page: page, limit: numItems, sort: sort } }
          );
        }
        else{
          response = await axios.get(
            "https://vazaar.herokuapp.com/api/v1/items",{ params: { category: category,page: page, limit: numItems } }
          );
        }
      }
    }else{
      if(category === 'all'){
        if(sort.length>0){
          response = await axios.get(
            `https://vazaar.herokuapp.com/api/v1/items?page=${page}&limit=${numItems}&price[gte]=${minPrice}&price[lte]=${maxPrice}&sort=${sort}`
          );
        }
        else{
          response = await axios.get(
            `https://vazaar.herokuapp.com/api/v1/items?page=${page}&limit=${numItems}&price[gte]=${minPrice}&price[lte]=${maxPrice}`
          );
        }
      }
      else{
        if(sort.length>0){
          response = await axios.get(
            `https://vazaar.herokuapp.com/api/v1/items?category=${category}&page=${page}&limit=${numItems}&price[gte]=${minPrice}&price[lte]=${maxPrice}&sort=${sort}`
          );
        }
        else{
          response = await axios.get(
            `https://vazaar.herokuapp.com/api/v1/items?category=${category}&page=${page}&limit=${numItems}&price[gte]=${minPrice}&price[lte]=${maxPrice}`
          );
        }
      }
    }





      return response.status === 200 ? response.data : "error";
  } catch (error) {
      return error
  } 
};

export const getSortedListing = async function (sortOption) {
  //need to do something so that we can validate user(correctness)
  try {
    const response = await axios.get(
      "https://vazaar.herokuapp.com/api/v1/items"
    );
      return response.status === 200 ? response.data : "error";
  } catch (error) {
      return error
  } 
};

export const getListingPrice = async function (sortOption, startPrice, endPrice) {
  //need to do something so that we can validate user(correctness)
  try {
    const response = await axios.get(
      "https://vazaar.herokuapp.com/api/v1/items"
    );
      return response.status === 200 ? response.data : "error";
  } catch (error) {
      return error
  } 
};

export const forgotPassword = async function (email) {
  const userInfo = {
    email: email,
  
  };
  const response = await axios.post(
    "https://vazaar.herokuapp.com/api/v1/forgotPassword",
    userInfo
  );
  return response
  //need to do something so that we can validate user(correctness)

};