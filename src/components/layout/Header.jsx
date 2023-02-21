import React from "react";
import { logOut } from "../../store/slices/nameTrainer.slice";
import { useDispatch } from "react-redux";
import "./styles/Header.css";

const Header = () => {
    const dispatch = useDispatch();
    const handleClickLogOut = () => {
        dispatch(logOut());
    };

    return (
        <header className="header">
            <div className="header_red">
                <div className="header_img">
                    <img src="/images/pokedex.png" alt="" />
                </div>
            </div>
            <div className="header_black">
                <div className="header_button-pokeball">
                    <button className="header_btn" onClick={handleClickLogOut}>
                        Log out
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
