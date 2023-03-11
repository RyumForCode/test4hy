import { useEffect, useState } from 'react';
import { consoleData, getData, removeData } from './api';
import './App.css';

function App() {

  const [data, setData] = useState();

  const buttonClick = async() => {
    const tempData = await getData();
    setData(tempData);
  }

  const removebutton = (id) => {
    removeData(id);
    // setData([...data.filter((item) => item.id !== id)]);
  }

  return (
    <div>
      <button onClick = {() => {buttonClick()}}>button</button>
      {data?.map((val) => <div onClick = {() => {removebutton(val.id)}} key = {val.id}>{val.id}: {val.title}</div>)}
    </div>
  );
}

export default App;