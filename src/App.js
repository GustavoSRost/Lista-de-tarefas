import React from "react";
import Header from "./Header";
import { List } from "./List";

const App = () => {
  const [openModal, setOpenModal] = React.useState(false);
  function handleModal() {
    setOpenModal(!openModal); //Abre e fecha modal
  }
  return (
    <>
      <Header openModal={openModal} handleModal={handleModal} />
      <List openModal={openModal} handleModal={handleModal} />
    </>
  );
};

export default App;
