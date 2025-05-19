import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const URL = "http://localhost:3000/user";
  const [Details, setDetails] = useState([]);
  const { id } = useParams();
  
  async function getElementById(url, id) {
    const res = await axios.get(url + "/" + id);
    setDetails(res.data);
  }

  useEffect(() => {
    getElementById(URL, id);
  }, []);

  return (
    <><title>Detail</title><div className="detail">
      <img src={Details.image} alt="" />
      <h3>{Details.name}</h3>
      <p>{Details.price}</p>
    </div>
    </> 
   
  );
}

export default Detail;
