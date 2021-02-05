import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const CarCard = ({ car }) => {
  const history = useHistory();

  const routeToCarList = (e) => {
    e.preventDefault();
    history.push(`/${car.id}`);
  };
  // const css_style = car.status === "Maintenance" ? "maintenance" : "complete";
  

  return (
    <Card className={car.status}>
      <Card.Content>
        <Image floated="right" size="medium" src={car.image} />
        <Card.Header> Marca: {car.make} </Card.Header>
        <Card.Meta> Model: {car.model} </Card.Meta>
        <Card.Description> Service: {car.description} </Card.Description>
        {car.status ? (
          <Card.Meta> Status: {car.status}</Card.Meta>
        ) : null}
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button onClick={routeToCarList} basic color="green">
            {" "}
            Car details{" "}
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};
export default CarCard;
