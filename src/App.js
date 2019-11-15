import React from "react";

function Food({ favorite }) {
  console.log(favorite);
  return <h1>i like {favorite}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>hello, world</h1>
      <Food favorite="kimchi" contry="america" />
    </div>
  );
}

export default App;
