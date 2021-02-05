import React, { useState, useEffect } from "react";
import { Button, Card, Image, Icon } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import axios from "axios";
import InputForm from "./InputForm";

const SERVER_URL="https://vast-sierra-07595.herokuapp.com/"

const CarPage = () => {
  const [car, setCar] = useState("");
  const [form, setForm] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`SERVER_URL/${id}`)
      .then((response) => {
        setCar(response.data);
      })
      .catch((err) => err);
  }, [id]);

  return (
    <div>
      <div className="cards-wrapper">
        <Card>
          <Card.Content>
            <Image size="large" src={car.image} />
            <hr />
            <Card.Header> Marca: {car.make} </Card.Header>
            <Card.Meta> Model: {car.model} </Card.Meta>
            {car.km ? <Card.Meta>Mileage: {car.km} km </Card.Meta> : null}
            <Card.Description>Description: {car.description} </Card.Description>
            {car.status ? 
            <Card.Meta> Status: {car.status}</Card.Meta>
             : null}
            {car.estimate_date ? 
              <Card.Meta> Estimate date: {car.estimate_date}</Card.Meta>
             : null}
          </Card.Content>

          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                basic
                color="green"
                onClick={() => setForm(true)}
                key={car.id}
              >
                Start service
                <Icon
                  name="wrench"
                  style={{ marginLeft: "10px", color: "#333" }}
                />
              </Button>
            </div>
          </Card.Content>
          <Card.Content>
            <div>{form ? <InputForm /> : null}</div>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default CarPage;
