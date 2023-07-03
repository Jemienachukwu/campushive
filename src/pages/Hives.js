import React from "react";
import { useParams } from "react-router-dom";

const Hives = () => {
  let { hive } = useParams();

  return <div>Hives</div>;
};

export default Hives;
