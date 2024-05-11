import React, { useRef, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router";
import Avatar from "../avatar/Avatar";
import "./Navbar.scss";
import {useDispatch, useSelector} from 'react-redux';
import { setLoading } from "../../redux/slices/appConfigSlice";
import { KEY_ACCESS_TOKEN, removeItem } from "../../utils/localStorageManager";
import { axiosClient } from "../../utils/axiosClient";
import Logo from "../avatar/logo.png";
import toast, { Toaster } from "react-hot-toast";

function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const myProfile = useSelector(state => state.appConfigReducer.myProfile);

    async function handleLogoutClicked() {
        try {
			await axiosClient.post('/auth/logout');
			removeItem(KEY_ACCESS_TOKEN);
			navigate('/login')
            toast(
                "Logged out Successfully",
                {
                  duration: 3000,
                  icon: '🥺',
                }
              );
		} catch (e) {
			
		}
    }

    function showToastercumNavigate(){
        navigate(`/profile/${myProfile?._id}`);
        toast(
            `${myProfile?.name}'s Profile`,
            {
              duration: 1500,   
            }
          );
    }

    function takeHome(){
        navigate("/");
        toast(
            "Home",
            {
              duration: 1000
            }
        );
    }

    return (
        <div className="Navbar">
            <div className="container">
                <h2 className="banner hover-link" onClick={takeHome}>
                    <img src={Logo} alt="logo" />
                    <span style={{ color: "pink"}}>ibe</span>
                    <span style={{fontFamily : "cursive" , color:"pink"}}> Verse</span>
                </h2>
                <div className="right-side">
                    <div 
                        className="geminiai_icon"
                        onClick={() => navigate("/ai")}
                    >
                        ASK AI
                    </div>

                    <div
                        className="profile hover-link"
                        // onClick={() => navigate(`/profile/${myProfile?._id}`)}
                        onClick={showToastercumNavigate}
                    >
                        <Avatar src={myProfile?.avatar?.url}/>
                    </div>
                    <div className="logout hover-link" onClick={handleLogoutClicked}>
                        <AiOutlineLogout style={{ color: "white" }} /> {/* Apply white color */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;