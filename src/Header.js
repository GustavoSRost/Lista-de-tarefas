import React from "react";
import Button from "./utilitários/Button";
import Modal from "./Modal";
import { useSelector } from "react-redux";

const Header = (props) => {
  let listItem = useSelector((state) => state.list.list);
  let list = listItem.length;
  return (
    <header className="container mx-auto py-5">
      <div className="flex flex-col items-center gap-5 text-stone-800">
        <h1 className="text-center font-bold antialiased text-3xl">
          Lista de tarefas
        </h1>
        <p className="text-center">Adicione tarefas para serem realizadas.</p>
        <em> Há {list} tarefas registradas.</em>

        <Button
          name="open"
          type="button"
          handleModal={props.handleModal}
          openModal={props.openModal}
        >
          Adicionar tarefa
        </Button>
        {props.openModal ? (
          <Modal
            type={"add"}
            handleModal={props.handleModal}
            handleList={props.handleList}
          />
        ) : null}
      </div>
    </header>
  );
};

export default Header;
