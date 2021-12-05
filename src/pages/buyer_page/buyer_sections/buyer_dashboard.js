import React from "react";
import './buyer_dashboard.scss'
function Buyer_Dashboard(props){
    return(
        <div style = {{height: '100%', paddingRight:'50px'}}>

            <div style = {{paddingBottom: "20px" }}></div>

            <div style = {{height: '100%', display: 'flex', width:'100%', justifyContent:'space-between'}}>
                <div style = {{width: '45%'}}>
                <div className = "Vazaar-Buyer-Header" style = {{textAlign : "left"}}>
                        Recently Viewed
                    </div>
                    <div className = "Vazaar-Buyer-Recently-Viewed-Container">
                        <div className = "Vazaar-Buyer-Second-Header" style = {{textAlign : "left"}}>
                            Recently Viewed Listings
                        </div>
                    </div>
                </div>
                <div style = {{width: '45%'}}>
                <div className = "Vazaar-Buyer-Header" style = {{textAlign : "left"}}>
                        Ready to contact the seller?
                    </div>
                    <div className = "Vazaar-Buyer-Recently-Viewed-Container">
                        <div className = "Vazaar-Buyer-Second-Header" style = {{textAlign : "left"}}>
                            Your Saved Listings
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Buyer_Dashboard;