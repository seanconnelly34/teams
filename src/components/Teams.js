import React from "react";
import axios from "axios";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Team from "./Team";

class Teams extends React.Component {
  state = {
    teams: []
  };

  componentDidMount() {
    axios
      .get(
        `http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/`
      )
      .then(res => {
        const teams = res.data;
        this.setState({ teams });
      });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          {this.state.teams.map(team => (
            <Link key={team.id} to={`/teams/${team.id}`}>
              <h2>{team.name}</h2>
            </Link>
          ))}

          <Route path="/teams/:id" component={Team} />
        </BrowserRouter>
      </div>
    );
  }
}

export default Teams;
