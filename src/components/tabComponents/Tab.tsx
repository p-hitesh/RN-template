import React, { useState } from "react";
import "./tabStyles.scss";
function Tab(props: any) {
  const { tabOptions } = props;
  const [tabIndex, setTabIndex] = useState(0);
  const OptionButton = ({ item, index }: any) => {
    return (
      <a
        className={
          tabIndex === index ? "optionButton" : "optionButton unselected"
        }
        type="button"
        onClick={() => {
          setTabIndex(index);
          console.log(index);
        }}
      >
        {item}
      </a>
    );
  };
  return (
    <>
      {tabOptions &&
        tabOptions.length > 0 &&
        tabOptions.map((item: any[], index: any) => (
          <OptionButton key={index} item={item} index={index}></OptionButton>
        ))}
    </>
  );
}

export default Tab;
