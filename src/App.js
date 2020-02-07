import React from "react";
import Ninjas from "./Ninjas";

class App extends React.Component {
  state = {
    ninjas: [
      { id: 1, name: "Naruto", age: 30, village: "Konoha" },
      { id: 2, name: "Sasuke", age: 28, village: "Konoha" },
      { id: 3, name: "Kakashi", age: 36, village: "Konoha" }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hello World !</h1>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
