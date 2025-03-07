import React from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Listgroup from "./Components/Listgroup";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container shadow-lg p-6 md:px-64">
        <Form />
        <Listgroup />
      </div>
    </>
  );
};

export default App;
