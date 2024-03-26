
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit'
import {actions} from './users.consts';
import {getInitialData} from './users.api';
type TBuilder = ActionReducerMapBuilder<{}>;

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

