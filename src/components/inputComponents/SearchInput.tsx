import React, { useEffect, useState } from "react";
import "./searchInputStyle.scss";
import * as CONST from "../../resources/constants";

interface Props {
  datas: any[];
}

const SearchInput: React.FC<Props> = ({ datas }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [filteredDatas, setFilteredDatas] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    console.log("data search", datas);
    setFilteredDatas(
      datas.filter((obj) =>
        obj.value
          .toString()
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    if (searchValue.length > 0 && filteredDatas.length > 0) {
      setIsSearchExpanded(true);
    }
  }, [searchValue, filteredDatas]);

  return (
    <div
      className="custom-search"
      style={isSearchExpanded ? { height: "100vh" } : {}}
    >
      <div className="inputWrapper">
        <input
          className="custom-input"
          style={{ outline: "none" }}
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleChange}
        />
        <img className="searchIcon" src={CONST.search_icon}></img>
      </div>
      <i className="fa fa-search" aria-hidden="true"></i>
      {filteredDatas.length > 0 && (
        <ul className="datas">
          {filteredDatas.map((data, index) => (
            <li tabIndex={0} key={index}>
              {data.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
