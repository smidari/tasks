import React, {useState} from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import {Nav} from "react-bootstrap";
import MyBtn from "../common/MyBtn/MyBtn";

const MyNavbar = () => {
    const [status, setStatus] = useState<boolean>(false);
    const openSideBar = () => setStatus(!status);

    return (
        <div>
            <div className={s.btn}>
                <MyBtn onClick={openSideBar} nameBtn={`${status ? 'Close' : 'Open'}`}/>
            </div>
            <Nav className={`${s.sidenav} ${status ? s.sidenav_open : s.sidenav_closed}`}>
                {['PreJunior', 'Junior', 'Junior+'].map((item, index) => {
                    return (
                        <NavLink
                            key={index}
                            to={`/${item}`}
                            className={s.item}
                            activeClassName={s.active}
                        >{item}
                        </NavLink>
                    )
                })}
            </Nav>
        </div>)
};

export default MyNavbar;

