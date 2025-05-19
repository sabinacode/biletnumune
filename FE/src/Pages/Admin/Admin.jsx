import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./style.css";
function Admin() {
  const URL = "http://localhost:3000/user";
  const [Mydata, setMydata] = useState([]);
  const [search, setSearch] = useState("");
  const [sortByProperty, setSortByProperty] = useState({
    name: "",
    order: true,
  });
  async function GetData(url) {
    const res = await axios.get(url);
    setMydata(res.data);
  }
  useEffect(() => {
    GetData(URL);
  }, []);
   async function deleteById(url,id) {
    const res= await axios.delete(url+"/"+id)
     GetData(URL);
  }

  return (
    <>
    <title>Admin</title>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={()=>setSortByProperty({name:"price",order:true})}>artan</button>
      <button onClick={()=>setSortByProperty({name:"price",order:false})}>azalan</button>
     
      <table style={{ width: "1000px" }} border={1}>
        <thead>
          <tr>
            <th>image</th>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {Mydata.toSorted((a, b) =>
            sortByProperty.order
              ? a[sortByProperty.name] > b[sortByProperty.name]
                ? 1
                : b[sortByProperty.name] > a[sortByProperty.name]
                ? -1
                : 0
              : a[sortByProperty.name] < b[sortByProperty.name]
              ? 1
              : b[sortByProperty.name] < a[sortByProperty.name]
              ? -1
              : 0
          )
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <tr key={item._id}>
                <td>
                  <img src={item.image} alt="" style={{ width: "200px" }} />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
            <td><button onClick={()=>deleteById(URL,item._id)}>delete</button></td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default Admin;
