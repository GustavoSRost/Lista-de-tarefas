import React from "react";
import { useSelector } from "react-redux";
import { remove, complete, edit } from "./store/listSlice";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
export const List = (props) => {
  const dispatch = useDispatch();
  let listItem = useSelector((state) => state.list.list);
  const tarefasItem = [...listItem];
  const tarefasCompletas = tarefasItem.filter((item) => {
    return item.complete;
  });
  const tarefasInc = tarefasItem.filter((item) => {
    return !item.complete;
  });

  return (
    <section className="container mx-auto my-5 mb-16">
      <div className="flex flex-col w-fit gap-7 lg:flex-row items-start lg:gap-10 text-stone-800 mx-auto">
        {tarefasCompletas.length > 0 ? (
          <div>
            <h1 className="mb-5">
              Tarefas concluídas: {tarefasCompletas.length}
            </h1>
            <ul className="flex flex-col gap-4 mx-auto w-fit">
              {tarefasCompletas.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-between bg-slate-100 min-w-[300px] max-w-[300px] p-5 rounded-md shadow-md relative"
                  >
                    <div className="flex flex-col gap-1">
                      <h1 className="font-bold">{item.tarefaName}</h1>
                      <p>{item.descricao}</p>
                      <span
                        onClick={() => dispatch(complete(item.id))}
                        className={`relative 
                  w-[50px] h-[26px] cursor-pointer rounded-2xl shadow-inner transition-all duration-300 ease-in-out before:content-[''] before:absolute before:top-[3px]  before:bottom-[4px]  before:w-[18px] before:h-[18px] before:rounded-full before:transition-all before:duration-300 before:ease-in-out z-[0] ${
                    item.complete
                      ? "before:left-[25px] before:bg-white bg-lime-400 border border-lime-600"
                      : "before:left-[5px] bg-red-500 before:bg-white bg-transparent border border-red-700"
                  }`}
                      ></span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <i
                        className="fa-solid fa-trash cursor-pointer"
                        onClick={() => dispatch(remove(item.id))}
                      ></i>
                      <i
                        className="fa-solid fa-pencil cursor-pointer"
                        onClick={props.handleModal}
                      ></i>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
        {tarefasInc.length > 0 ? (
          <div>
            <h1 className="mb-5">Tarefas pendentes: {tarefasInc.length}</h1>
            <ul className="flex flex-col gap-4 mx-auto w-fit">
              {tarefasInc.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-between bg-slate-100 min-w-[300px] max-w-[300px] p-5 rounded-md shadow-md relative"
                  >
                    <div className="flex flex-col gap-1">
                      <h1 className="font-bold">{item.tarefaName}</h1>
                      <p>{item.descricao}</p>
                      <span
                        onClick={() => dispatch(complete(item.id))}
                        className={`relative 
                  w-[50px] h-[26px] cursor-pointer rounded-2xl shadow-inner transition-all duration-300 ease-in-out before:content-[''] before:absolute before:top-[3px]  before:bottom-[4px]  before:w-[18px] before:h-[18px] before:rounded-full before:transition-all before:duration-300 before:ease-in-out z-[0] ${
                    item.complete
                      ? "before:left-[25px] before:bg-white bg-lime-400 border border-lime-600"
                      : "before:left-[5px] bg-red-600 before:bg-white bg-transparent border border-red-700"
                  }`}
                      ></span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <i
                        className="fa-solid fa-trash cursor-pointer"
                        onClick={() => dispatch(remove(item.id))}
                      ></i>
                      <i
                        className="fa-solid fa-pencil cursor-pointer"
                        onClick={props.handleModal}
                      ></i>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
      {props.openModal ? (
        <Modal
          type={"update"}
          handleModal={props.handleModal}
          handleList={props.handleList}
        />
      ) : null}
    </section>
  );
};
