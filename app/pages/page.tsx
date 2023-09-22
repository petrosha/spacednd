"use client";

import {  useState } from "react";
import Battlefield from "../components/battlefield/battlefield";

const Component1 = () => {
  const [ mapScale, setMapScale ] = useState(1);

  const mapScaleClick = () => {
    if(mapScale === 10000 ) setMapScale(1);
    else setMapScale(mapScale*10);
  }

  return (
    <>
      <Battlefield mapScale={mapScale}/>
      <button onClick={mapScaleClick}>x10</button> 
      <span>CellSize: {mapScale}</span>
    </>
  );
};

export default Component1;
