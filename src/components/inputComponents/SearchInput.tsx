import React, { useState } from "react";
import "./searchInputStyle.scss";

interface Props {
  datas: string[];
}

const SearchInput: React.FC<Props> = ({ datas }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredDatas, setFilteredDatas] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setFilteredDatas(
      datas.filter((data) =>
        data.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="custom-search">
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={handleChange}
      />
      <i className="fa fa-search" aria-hidden="true"></i>
      {filteredDatas.length > 0 && (
        <ul className="datas">
          {filteredDatas.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
