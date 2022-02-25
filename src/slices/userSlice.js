import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        token: null
    },
    reducers: {
        login: (state, action) => {
            console.log(action)
            state.token = action.payload;
        }
    }
});

export const { login } = userSlice.actions;
export default userSlice.reducer;