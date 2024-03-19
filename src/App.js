import "./App.css";
import Forms from "./components/Form/Form";
import { useEffect, useState } from "react";
import TableUi from "./components/TableUi/TableUi";

function App() {
  const [arrayOfData, setArrayOfData] = useState([]);

  const onChnagesArray = (data) => {
    console.log(data);
    let da = [...arrayOfData, data];
    setArrayOfData((prevArray) => {
      // Use functional update to access the previous state
      // and safely append the new data to it
      return [...prevArray, data];
    });
    // localStorage.setItem(
    //   "data",
    //   JSON.stringify([...arrayOfData, { ...data, time: new Date() }])
    // );
  };

  // useEffect(() => {
  //   localStorage.setItem("data", JSON.stringify(arrayOfData));
  // }, [arrayOfData]);

  useEffect(() => {
    let d = localStorage.getItem("data");
    console.log(d);
    // d = JSON.parse(d);
    setArrayOfData(d);
  }, []);

  // console.log(arrayOfData);

  return (
    <div className="App">
      <Forms onChnagesArray={onChnagesArray} />
      <TableUi arrayOfData={arrayOfData} />
    </div>
  );
}

export default App;
