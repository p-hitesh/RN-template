import React, { useEffect, useState } from "react";
import "./searchInputStyle.scss";
import * as CONST from "../../resources/constants";
import { useAppDispatch } from "../../store/hooks";
import { getDetailCardData } from "../../store/dashboard/detail-card";

interface Props {
  datas: any[];
  onSearch?: any;
}

const SearchInput: React.FC<Props> = ({ datas, onSearch }) => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [filteredDatas, setFilteredDatas] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    // console.log("data search", datas);
    setFilteredDatas(
      datas.filter((obj) =>
        obj.value
          .toString()
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      )
    );
  };

  const checkIfSearchExpanded = () => {
    if (searchValue.length > 0 && filteredDatas.length > 0) {
      setIsSearchExpanded(true);
    } else {
      setIsSearchExpanded(false);
    }
  };

  useEffect(() => {
    checkIfSearchExpanded();
  }, [searchValue, filteredDatas]);

  const onRowClick = (e: any) => {
    console.log(e);
    dispatch(getDetailCardData(e.id));
  };

  return (
    <div
      className="custom-search"
      style={{
        overflow: "hidden",
        transition: "height 1s ease-out",
        height: isSearchExpanded ? "300px" : "30px",
      }}
    >
      <div className="inputWrapper">
        <input
          className="custom-input"
          style={{ outline: "none" }}
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleChange}
          onBlur={() => setIsSearchExpanded(false)}
          onFocus={() => checkIfSearchExpanded()}
        />
        <img
          className="searchIcon"
          src={CONST.search_icon}
          onClick={() => onSearch(searchValue)}
        ></img>
      </div>
      <i className="fa fa-search" aria-hidden="true"></i>
      {filteredDatas.length > 0 && (
        <ul className="datas">
          {filteredDatas.map((data, index) => (
            <li tabIndex={0} key={index} onClick={() => onRowClick(data)}>
              {data.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
