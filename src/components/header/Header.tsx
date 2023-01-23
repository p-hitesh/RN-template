import React from "react";
import SearchInput from "../inputComponents/SearchInput";
import * as CONST from "../../resources/constants";
import "./headerStyles.scss";

const Header = () => {
  const searchArrays: string[] = ["a", "b", "c"];
  return (
    <div className="header_con">
      <div className="header_left-wrapper">
        <div className="header_profile-con">
          <img src={CONST.user_avatar_icon} className="header_user-icon" />
          <p>username</p>
        </div>
        <SearchInput datas={searchArrays}></SearchInput>
      </div>
      <img src={CONST.ksb_icon} className="header_ksb-icon" />
    </div>
  );
};

export default Header;
