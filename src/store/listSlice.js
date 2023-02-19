import { createSlice } from "@reduxjs/toolkit";

const getInitialList = () => {
  const list = window.localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  }
  window.localStorage.setItem("list", JSON.stringify([]));
  return [];
};

const initialList = {
  list: getInitialList(), //Busca lista no localstorage, caso não exista, cria uma lista vazia
};

const slice = createSlice({
  name: "list",
  initialState: initialList,
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
      const listItens = window.localStorage.getItem(
        "list",
        JSON.stringify(state.list)
      );
      if (listItens) {
        const prevList = JSON.parse(listItens);
        prevList.push({ ...action.payload });
        window.localStorage.setItem("list", JSON.stringify(prevList));
      }
    },
    remove: (state, action) => {
      const listItens = window.localStorage.getItem("list");
      if (listItens) {
        const prevList = JSON.parse(listItens);
        prevList.forEach((item, index) => {
          if (item.id === action.payload) {
            prevList.splice(index, 1);
          }
        });
        window.localStorage.setItem("list", JSON.stringify(prevList));
        state.list = prevList;
      }
    },
    complete: (state, action) => {
      const listItens = window.localStorage.getItem("list");
      if (listItens) {
        const prevList = JSON.parse(listItens);
        prevList.forEach((item, index) => {
          if (item.id === action.payload) {
            prevList[index].complete = !prevList[index].complete;
          }
        });
        window.localStorage.setItem("list", JSON.stringify(prevList));
        state.list = prevList;
      }
    },
    edit: (state, action) => {
      const listItens = window.localStorage.getItem("list");
      if (listItens) {
        const prevList = JSON.parse(listItens);
        prevList.forEach((item, index) => {
          if (item.id === action.payload.id) {
            item.title = action.payload.title;
            item.description = action.payload.description;
          }
        });
        window.localStorage.setItem("list", JSON.stringify(prevList));
        state.list = prevList;
      }
    },
  },
});
export const { add, remove, complete, edit } = slice.actions;
export default slice.reducer;
