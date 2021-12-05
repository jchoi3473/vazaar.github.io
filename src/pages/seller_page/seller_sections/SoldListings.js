import React, {useState} from 'react';
import Post from './../../../components/post/Post'

function SoldListings(props){
    //Currently using static item
    return(
        <div>
            <Post 
            item = {
              {  color: "Brown",
                condition: "Fair",
                createdAt: "2021-11-01T04:10:57.680Z",
                delivery: false,
                description: "Hi everyone, \nI am selling this furniture!",
                dimension: "30x30",
                imageCover: "item-Brown Tables-1635743959753-cover.jpeg",
                name: "Brown Tables",
                price: 50000,
                purchasedYear: 2021,
                _id: "617f78d8307c4d3415be518d"}
            }
            />
        </div>
    );
}
export default SoldListings;