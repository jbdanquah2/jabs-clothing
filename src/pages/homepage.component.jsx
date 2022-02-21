import React from "react";
import { Link } from "react-router-dom";
import Directory from "../components/directory/directory.component";
import "./homepage.styles.scss";

export const Homepage = ({history}) => {
  return (
    <div className="homepage">
      <Link to='/topic'><h1>Topics</h1></Link>
      <Directory />
    </div>
  );
};
