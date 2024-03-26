const getAsyncTemplate = (sliceName) => {
    return `
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit'
import {actions} from './${sliceName}.consts';
import {getInitialData} from './${sliceName}.api';
import {ISliceState} from './${sliceName}.types';
type TBuilder = ActionReducerMapBuilder<ISliceState>;

export const getData = createAsyncThunk(actions.GET_DATA, getInitialData);

export const addGetDataReducer = (builder: TBuilder) => {
    builder
      .addCase(getData.fulfilled, (state, {payload}) => {
        if (payload) {
          /* 
          state.ids = getIdList(payload);
          state.byId = getUsers(payload);
          */
        }
      })
      .addCase(getData.pending, (state) => {})
      .addCase(getData.rejected, (state) => {})
};

`
};

module.exports = {getAsyncTemplate}