import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Team = () => {
  return (
    <div>
      <h1>
        {team.name} (#{team.id})
      </h1>
      <Link to="/team">Back</Link>
    </div>
  );
};

export default Team;
