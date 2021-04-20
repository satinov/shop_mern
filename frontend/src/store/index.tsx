import { combineReducers, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore, Action } from "@reduxjs/toolkit";

let initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    inc(state) {
      state.count++;
    },
  },
});

const { inc } = counterSlice.actions;

const store = configureStore({
  reducer: combineReducers({
    counter: counterSlice.reducer,
  }),
});

console.log(inc, store.dispatch);

export type AppDispatch = typeof store.dispatch;

export default store;
