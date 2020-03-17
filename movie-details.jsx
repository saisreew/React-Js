import React, { Component } from "react";
class MovieDetails extends Component {
  state = {};
  handleBack = () => {
    this.props.history.push("/movies");
  };
  render() {
    return (
      <div>
        <h1 className="text-center">MovieDetails</h1>
        <h2 className="text-center">
          Selected Movie ID-{this.props.match.params.id}
        </h2>
        <h1 className="text-center text-primary">
          {this.props.location.state.movie.title}
        </h1>
        <button className="btn btn-primary" onClick={this.handleBack}>
          Back
        </button>
      </div>
    );
  }
}

export default MovieDetails;
