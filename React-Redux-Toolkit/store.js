import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "hailey",
  reducers: {
    changeName(state) {
      return "ham";
    },
  },
});

export let { changeName } = user.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
  },
});
