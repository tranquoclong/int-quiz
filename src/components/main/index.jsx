import React, { useState } from "react";
import myData from "../../data.json";
import Header from "../header";
import Card from "./card";
import "./card.css";
const Main = () => {
  const [view, setView] = useState(true);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState([]);
  const [status, setStatus] = useState("");
  const [data, setData] = useState(myData.data.advisorProfileCollection.items);

  const handleFilter = (e) => {
    if (e.target.value !== "") {
      setValue(e.target.value);
      const filter = data.filter((item) => {
        return Object.keys(item).some((index) =>
          String(item[index])
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        );
      });
      setFilter([...filter]);
    } else {
      setValue(e.target.value);
      setData([...data]);
    }
  };
  return (
    <>
      <Header
        setView={setView}
        view={view}
        handleFilter={handleFilter}
        setStatus={setStatus}
      />
      <div className={view ? "horizontal" : "vertical"}>
        {value.length > 0
          ? filter
              .filter((s) =>
                s.status !== ""
                  ? s.status.includes(status)
                  : s.status.includes("")
              )
              .map((item, index) => <Card item={item} key={index} />)
          : data
              .filter((s) =>
                s.status !== ""
                  ? s.status.includes(status)
                  : s.status.includes("")
              )
              .map((item, index) => <Card item={item} key={index} />)}
      </div>
    </>
  );
};

export default Main;
