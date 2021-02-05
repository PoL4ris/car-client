import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const SERVER_URL="https://vast-sierra-07595.herokuapp.com/"

const InputForm = () => {
  const { id } = useParams();
  const [newService, setNewService] = useState({ car_id: parseInt(id) });
  const history = useHistory();

  const handleChanges = (e) => {
    setNewService({
      ...newService,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`SERVER_URL/${id}/service`, newService)
      .then(() => {
        setNewService("");
        history.push(`/`);
      })
      .catch((err) => err);
  };

  return (
    <Form unstackable style={{ width: "100%" }} onSubmit={handleSubmit}>
      <Form.Input
        label="Name"
        placeholder="Name"
        name="name"
        required
        onChange={handleChanges}
      />
      <Form.Input
        label="Estimated Date"
        placeholder="Estimated Date"
        type="date"
        name="estimate_date"
        required
        onChange={handleChanges}
      />
      <label style={{ fontWeight: "bold" }}>Status</label>
      <select
        required
        placeholder="Status"
        name="status"
        onChange={handleChanges}
      >
        <option value=""> Select Status</option>
        <option value="Maintenance"> Maintenance</option>
        <option value="Complete"> Complete</option>
      </select>
      <hr />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default InputForm;
