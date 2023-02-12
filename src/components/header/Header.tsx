import React, { useEffect, useState } from "react";
import SearchInput from "../inputComponents/SearchInput";
import * as CONST from "../../resources/constants";
import "./headerStyles.scss";

const Header = (props: any) => {
  const { data, onSearch } = props;
  const [searchData, setSearchData] = useState<any[]>([]);

  function convertJsonArray(jsonArray: any[]): any[] {
    const result: any[] = [];
    for (const obj of jsonArray) {
      for (const [key, value] of Object.entries(obj)) {
        result.push({ id: obj.id, value, key });
      }
    }
    return result;
  }

  useEffect(() => {
    if (data) {
      setSearchData(convertJsonArray(data));
    }
  }, [data]);

  return (
    <div className="header_con">
      <div className="header_left-wrapper">
        <div className="header_profile-con">
          <img src={CONST.user_avatar_icon} className="header_user-icon" />
          <p className="header_profile-name">username</p>
        </div>
        <SearchInput datas={searchData} onSearch={onSearch}></SearchInput>
      </div>
      <img src={CONST.ksb_icon} className="header_ksb-icon" />
    </div>
  );
};

export default Header;
