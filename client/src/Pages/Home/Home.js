import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleAdd } from "../../JS/actions/edit";
import "./Home.css";
import { Button } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(toggleAdd());
  };
  return (
    <div className="home">
      <Link to="/add">
        <Button variant="primary" onClick={handleAdd}>
          Add contact
        </Button>
      </Link>
      <Link to="/">
        <Button variant="success">ContactList</Button>
      </Link>
    </div>
  );
};

export default Home;
