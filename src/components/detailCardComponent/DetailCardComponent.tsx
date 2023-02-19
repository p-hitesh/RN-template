import React, { useEffect, useState } from "react";
import CommanInput from "../inputComponents/CommanInput";
import Tab from "../tabComponents/Tab";
import "./detailCardStyles.scss";

const DetailCardComponent = ({ data }: any) => {
  const [updatedData, setUpdatedData] = useState<any>(data);
  const [tabIndex, setTabIndex] = useState<any>(0);

  type TransformedData = {
    [key: string]: { title: string; value: any }[];
  };

  const tabOptions = [
    "Application",
    "Data Protection",
    "Application Architect",
    "Software Packages",
  ];

  function transformData(input: any): TransformedData {
    const applicationKeys = [
      "createdAt",
      "applicationName",
      "alternateName",
      "summary",
      "documentation",
    ];
    const dataProtectionKeys = [
      "productSite",
      "startURL",
      "respITdept",
      "respITcontact",
    ];
    const softwarePackagesKeys = [
      "respITcontact",
      "respITsubscription",
      "techITcontact",
    ];
    const applicationArchitectKeys = ["system", "version", "vendor"];

    const application = applicationKeys.map((key) => {
      return {
        title: key,
        value: input[key],
      };
    });

    const dataProtection = dataProtectionKeys.map((key) => {
      return {
        title: key,
        value: input[key],
      };
    });

    const softwarePackages = softwarePackagesKeys.map((key) => {
      return {
        title: key,
        value: input[key],
      };
    });

    const applicationArchitect = applicationArchitectKeys.map((key) => {
      return {
        title: key,
        value: input[key],
      };
    });

    return {
      Application: application,
      "Data Protection": dataProtection,
      "Software Packages": softwarePackages,
      "Application Architect": applicationArchitect,
    };
  }

  const [selectedData, setSelectedData] = useState<any>();
  const selectedTabIndex = (i: any) => {
    setTabIndex(i);
  };

  useEffect(() => {
    const key = tabOptions[tabIndex];
    const transformedData = transformData(updatedData);
    setSelectedData(transformedData[key]);
  }, [tabIndex, updatedData]);

  const handleChange = (e: any, index: any) => {
    const key = selectedData[index].title;
    setUpdatedData((prevData: any) => ({ ...prevData, [key]: e.target.value }));
    // selectedTabIndex(index);
  };

  return (
    <>
      <div className="card_Header">
        <Tab tabOptions={tabOptions} selectedIndex={selectedTabIndex}></Tab>
      </div>
      <div className="card_Body">
        {selectedData &&
          selectedData.length > 0 &&
          selectedData.map((e: any, index: any) => (
            <CommanInput
              key={index}
              value={e.value}
              label={e.title}
              onChange={(event) => handleChange(event, index)}
            ></CommanInput>
          ))}
      </div>
    </>
  );
};

export default DetailCardComponent;
