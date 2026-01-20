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
        setUsername(state: UserState, action: PayloadAction<string> ){
            state.username = action.payload;
        }
    }
  })

  export const { setUsername} = userSlice.actions;
    export default userSlice.reducer;