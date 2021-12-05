import React, {useEffect, useState} from 'react';
import './Post.scss'
import Moment from 'moment';
import Item from '../../pages/item/Item';
import Modal from '@mui/material/Modal';
import Heart from './../../assets/images/heart.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { SvgIcon } from '@mui/material';
function Post(props){
    //Values here are all static. Need to figure out details in future
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [hover, setHover] = useState(false);
    const [hoverHeart, setHoverHeart] = useState(false);

    const [source, setSource] = useState();

    useEffect(() => {
        const base64 = btoa(
            new Uint8Array(props.item.imageCover).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
            ),
        );
        setSource("data:;base64," + base64);
      },[])
  
    return(
        <div className = "Vazaar-Post-Container" >
            <div className = "Vazaar-Post-Image-Container" onMouseEnter = {() => setHover(true)} onMouseLeave = { () => setHover(false)}>

                <img style ={{position: "relative", zIndex : "1"}} src={"https://vazaar.herokuapp.com/img/items/"+props.item.imageCover} width="432" height ="290"/>
                <div className = "Vazaar-Post-Heart-Container" style = {{position:'relative', zIndex:'2'}}>
                    {
                        hover? 
                        <div style = {{height:'100%', background:'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.6) 100%)'}} onMouseEnter = {() => setHover(true)}>
                            {/* <img  className = "Vazaar-Heart" style ={{height:"60px"}} src={Heart}/> */}
                            {
                                hoverHeart?
                                <div className = "Vazaar-Heart-Circle" style ={{cursor:'pointer'}} onMouseLeave = {() => setHoverHeart(false)}>
                                    <SvgIcon  className = "Vazaar-Heart" component={FavoriteIcon} style = {{color: '#E9545D', fontSize: '55px'}} />
                                </div>:
                                <div className = "Vazaar-Heart-Circle" style ={{cursor:'pointer'}} onMouseEnter = {() => setHoverHeart(true)}>
                                    <SvgIcon  className = "Vazaar-Heart"  component={FavoriteBorderIcon} style = {{color: '#E9545D', fontSize: '55px'}} />
                                </div>
                            }
                            

                        </div>:
                        <></>
                    }
                </div>
            </div>
            <div className = "Vazaar-Post-Detail-Container">
                <div className = "Vazaar-Post-Detail-Title">
                    {props.item.name}
                </div>
                <div className = "Vazaar-Post-Detail-Condition-Container">
                    <div className = "Vazaar-Post-Detail-Condition-Body">
                        Condition : {props.item.condition}
                    </div>
                    <div className = "Vazaar-Post-Detail-Condition-Body">
                        Posted : {Moment(props.item.createdAt).format('MMM-DD YYYY')}
                    </div>
                </div>
                <div className = "Vazaar-Post-Detail-Price-Container">
                    <div className = "Vazaar-Post-Detail-Price-Body">
                        Price: 
                    </div>
                    <div className = "Vazaar-Post-Detail-Price-Body Dollar">
                        ${props.item.price}
                    </div>
                </div>
                {/* <div style = {{position:"relative"}}> */}
                    {/* <img  className = "Vazaar-Heart" style ={{height:"30px"}} src={Heart}/> */}
                    <div className = "Vazaar-Post-View" onClick = {handleOpen}>View</div>
                {/* </div> */}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                BackdropProps={{
                    timeout: 500,
                }}
                closeAfterTransition
            >
                <Item item = {props.item} handleClose = {handleClose} />
            </Modal>
            {/* <Switch>
                    <Route path={`${path}/:topicId`}>
                    <Item />
                </Route>
            </Switch> */}
        </div>
    );
}
export default Post;