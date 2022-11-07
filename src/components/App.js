import React, { useState } from "react";
import Nav from "./Nav";
import Pigpen from "./Pigpen";

import hogsData from "../porkers_data";

function App() {
  const [grease, SetGrease] = useState(false);
  const toggleFilter = () => {
    SetGrease(!grease);
  };

  const [sort, SetSort] = useState("");
  const toggleSort = (sortValue) => {
    SetSort(sortValue);
  };

  const filteredHogs = grease
    ? hogsData.filter((hogObj) => hogObj.greased)
    : hogsData;

  const sortedHogs = [...filteredHogs].sort((hogObjA, hogObjB) => {
    switch (sort) {
      case "Name":
        if (hogObjA.name < hogObjB.name) {
          return -1;
        } else {
          return 1;
        }
      case "Weight":
        return hogObjA.weight - hogObjB.weight;
      default:
        return 0;
    }
  });
  console.log(sort);
  return (
    <div className="App">
      <Nav toggleSort={toggleSort} toggleFilter={toggleFilter} />
      <Pigpen hogs={sortedHogs} />
    </div>
  );
}

export default App;
