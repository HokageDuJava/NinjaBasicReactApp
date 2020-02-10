import React from "react";

const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjasList = ninjas.map(ninja => {
    return ninja.age >= 18 ? (
      <div className="ninja" key={ninja.id}>
        <p>My name is : {ninja.firstName}.</p>
        <p>I'm {ninja.age} years old.</p>
        <p>And I'm from {ninja.village} village.</p>

        <button
          className="btn-delete"
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          {" "}
          X{" "}
        </button>
      </div>
    ) : (
      <div className="young" key={ninja.id}>
        <p>You are way too young to be a ninja!</p>
      </div>
    );
  });

  return <div> {ninjasList} </div>;
};

export default Ninjas;
