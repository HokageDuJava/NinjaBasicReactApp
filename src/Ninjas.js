import React, { Component } from "react";

class Ninjas extends Component {
  render() {
    const { ninjas } = this.props;
    const ninjasList = ninjas.map(ninja => {
      return (
        <div className="ninja" key={ninja.id}>
          <p>My name is : {ninja.name}.</p>
          <p>I'm {ninja.age} years old.</p>
          <p>And I'm from {ninja.village} village.</p>
        </div>
      );
    });

    return <div> {ninjasList} </div>;
  }
}

export default Ninjas;
