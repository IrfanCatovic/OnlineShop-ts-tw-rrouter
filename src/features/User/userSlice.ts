import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  username: string;
}

const initialState: UserState = {
  username: "", }

  const userSlice = createSlice( {
    name: "user",
    initialState,
    reducers: {
        createUsername(state, action: PayloadAction<string> ){
            state.username = action.payload;
        }
    }
  })

  export const { createUsername } = userSlice.actions;
    export default userSlice.reducer;