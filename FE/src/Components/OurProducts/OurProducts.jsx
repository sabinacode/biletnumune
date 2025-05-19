import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { BasketContext } from "../../Context/BasketContext";
import Basket from "../../Pages/Basket/Basket";

function OurProducts() {
  const URL = "http://localhost:3000/user";
  const [MyData, setMyData] = useState([]);
  async function getData(url) {
    const res = await axios.get(url);
    setMyData(res.data);
  }
  useEffect(() => {
    getData(URL);
  }, []);
const {Basket,addBasket}=useContext(BasketContext)
console.log(Basket);

  return (
    <>
      <h1>Our Products</h1>
      <div className="Cards">
        {MyData.map((item) => (
          <div key={item._id} className="Card">
            <h3>
              <img
                src={item.image}
                alt=""
                style={{ width: "200px", height: "250px" }}
              />
            </h3>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <Link to={`detail/${item._id}`}>
              <button>detail</button>
              
            </Link>
            <button > add to <FaHeart /></button>
            <button onClick={()=>addBasket(item)}>add to basket</button>

          </div>
        ))}
      </div>
    </>
  );
}

export default OurProducts;
