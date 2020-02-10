import React from "react";
import Ninjas from "./Ninjas";
import FormNinja from "./FormNinja";
import uuid from "uuid/v1";
class App extends React.Component {
  state = {
    ninjas: [
      { id: uuid(), firstName: "Naruto", age: 30, village: "Konoha" },
      { id: uuid(), firstName: "Sasuke", age: 28, village: "Konoha" },
      { id: uuid(), firstName: "Kakashi", age: 36, village: "Konoha" }
    ]
  };

  addNinja = ninja => {
    console.log("App addNinja : " + ninja.firstName);
    ninja.id = uuid();
    let ninjas = [...this.state.ninjas, ninja];

    this.setState({
      ninjas
    });
  };

  deleteNinja = id => {
    console.log("Ninja with ID : " + id + " deleted");
    const ninjas = this.state.ninjas.filter(ninja => {
      return id !== ninja.id ? ninja : null;
    });

    this.setState({
      ninjas
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello World !</h1>
        <FormNinja addNinja={this.addNinja} />
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
      </div>
    );
  }
}

export default App;
