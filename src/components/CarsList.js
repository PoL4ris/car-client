import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";
import CarCard from "./CarCard";

const SERVER_URL="https://vast-sierra-07595.herokuapp.com/"

console.log(process);


const CarsList = () => {
  const [carsList, setCarsList] = useState([]);


  useEffect(() => {
    axios
      .get(SERVER_URL)
      .then((response) => {
        setCarsList(response.data);
      })
      .catch((err) => err);
  }, []);

  return (
    <div className="container">
      <h1>Cars List</h1>
      <div className="cards-wrapper">
        <Card.Group>
          {carsList.map((car) => (
            <CarCard car={car} key={car.id} />
          ))}
        </Card.Group>
      </div>
    </div>
  );
};

export default CarsList;
