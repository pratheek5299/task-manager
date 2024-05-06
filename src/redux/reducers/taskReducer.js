import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    tasks: []
};

const taskSlice = createSlice({
    name: 'taskManager',
    initialState: INITIAL_STATE,
    reducers: {
        addTask: (state, action) => {
            console.log(action.payload)
        }
    }
});



export const taskReducer = taskSlice.reducer;
export const {addTask} = taskSlice.actions;
export const taskSelector = (state) => state.taskReducer;
