import React from "react";
import { add } from "./store/listSlice";
import Button from "./utilitários/Button";
import Input from "./utilitários/Input";
import { useDispatch } from "react-redux";

const Modal = ({ type, handleModal }) => {
  const [tarefaName, setTarefaName] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [complete, setComplete] = React.useState(false);
  const dispatch = useDispatch();
  function handleSubmit(event) {
    event.preventDefault();
    if (tarefaName && descricao) {
      dispatch(
        add({
          id: parseInt(Math.random() * 100),
          tarefaName,
          descricao,
          complete,
          date: new Date().toLocaleTimeString(),
        })
      );
    }
    handleModal(); //Abre fecha modal, nesse caso fecha após adicionar tarefa
  }

  return (
    <div className="overflow-container-modal transition-all">
      <div>
        <div className="bg-white p-5 absolute top-16 left-2 right-auto lg:inset-0 lg:w-1/2 h-fit mx-auto my-auto rounded-md transition-all">
          <div className="flex justify-between mb-5">
            <h1 className="text-center font-bold antialiased lg:text-3xl">
              Adicionar tarefa
            </h1>
            <Button
              handleModal={handleModal}
              name={"close"}
              className={
                "rounded-full bg-gray-100 p-3 w-auto h-auto leading-3 hover:bg-gray-300"
              }
            >
              x
            </Button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <Input
                type="text"
                name="Tarefa"
                id="tarefa"
                value={tarefaName}
                className={"w-full bg-gray-50 rounded-md p-2"}
                setValue={setTarefaName}
              />
              <Input
                type="text"
                name="Descrição"
                id="descricao"
                value={descricao}
                className={"w-full bg-gray-50 rounded-md p-2"}
                setValue={setDescricao}
              />

              <label htmlFor="Status">
                Status
                <select
                  onChange={(e) => setComplete(e.target.value)}
                  className="w-full bg-gray-50 rounded-md mt-0 p-2"
                >
                  <option value={false}>Pendente</option>
                  <option value={true}>Feito</option>
                </select>
              </label>
              <div className="flex gap-2 self-end">
                <Button className={"text-lime-500"} type="submit">
                  Adicionar
                </Button>
                <Button
                  className={"text-red-700"}
                  name={"close"}
                  handleModal={handleModal}
                >
                  Fechar
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
