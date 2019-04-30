import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
//
class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {},
      teamId: this.props.match.params.id
    };
  }
  //

  componentDidMount() {
    const team = this.props.match.params.id;
    axios
      .get(
        "http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/" +
          team
      )
      .then(res => {
        this.setState({ team: res.data });
        console.log(res.data);
      });

    //console logs an undefined becuase its logging before it happens becuase
    //its asynchronus
    // console.log("fuck");
    // console.log(this.state.team.name);
  }

  render() {
    return (
      <div>
        <h1>{this.props.match.params.id}</h1>
        <p>{this.state.team.name}</p>
        <Link to="/team">Back</Link>
      </div>
    );
  }
}

// const Team = props => {
//   console.log(props);
//   return (
//     <div>
//       <h1>
//         {props.match.params.name} (#{props.match.params.id})
//       </h1>
//       <Link to="/team">Back</Link>
//     </div>
//   );
// };

export default Team;
