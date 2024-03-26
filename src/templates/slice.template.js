const getSliceTemplate = (sliceName) => {
    return `
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {SLICE_NAME, initialState} from './${sliceName}.consts';
import {addGetDataReducer} from './${sliceName}.async';

export const usersListSlice = createSlice({
name: SLICE_NAME,
initialState,
reducers: {
    /* The Immer library detects changes to a "draft state" and produces a brand new
    immutable state based off those changes
    FE:
    updateCount: (state, action: PayloadAction<number>) => {
    state.count += action.payload*/
    },
extraReducers: (builder) => {
    /* Add async reducers here*/
    addGetDataReducer(builder);
    }
})

export default usersListSlice.reducer;

export const { 
} = usersListSlice.actions  
`;
};

module.exports = {getSliceTemplate};

