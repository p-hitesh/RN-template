import React from "react";
import { useLocation } from "react-router-dom";

function DetailPage() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <p>{JSON.stringify(state)}</p>
    </div>
  );
}

export default DetailPage;
