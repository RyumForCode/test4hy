import axios from "axios";

const getData = async () => {
    const response = await axios.get("http://localhost:3001/data");
    console.log('get data proceed');
    return response.data;
} 

const removeData = async (id) => {
    const response = await axios.delete(`http://localhost:3001/data/${id}`)
    getData();
    return response;
}

const consoleData = async (id) => {
    const response = await axios.get(`http://localhost:3001/data/${id}`);
    console.log(response);
    return response;
}

export {getData, removeData, consoleData};