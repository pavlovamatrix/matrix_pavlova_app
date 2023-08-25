import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';

import { IState } from '../../types';

const initialState: IState = {
  isLoading: false,
  mainString: [],
  mainString1: [],
  mainString2: [],
  personalEnergyArray: [],

  userDataPersonal: {
    name: '',
    birth: '',
    yearsOld: '',
  },
  usersDataCompatibility: {
    user1: {
      name: '',
      birth: '',
      yearsOld: '',
    },
    user2: {
      name: '',
      birth: '',
      yearsOld: '',
    },
  },
};

export const storeSlice = createSlice({
  name: 'myStore',
  initialState,
  reducers: {
    fetchingStart(state) {
      state.isLoading = true;
    },
    fetchingEnd(state) {
      state.isLoading = false;
    },
    resetUserData(state) {
      state.userDataPersonal = {
        name: '',
        birth: '',
        yearsOld: '',
      };
    },
    setEnergyArray(state, action: PayloadAction<number[]>) {
      state.personalEnergyArray = action.payload;
    },
    setUserData(state, action: PayloadAction<string[]>) {
      state.userDataPersonal = {
        name: action.payload[0],
        birth: action.payload[1].split('-').reverse().join('.'),
        yearsOld: action.payload[2],
      };
      state.mainString = action.payload[1].split('-').reverse().join('').split('');
    },
    setUsersDataCompatibility(state, action: PayloadAction<string[]>) {
      state.usersDataCompatibility = {
        user1: {
          name: action.payload[0],
          birth: action.payload[1].split('-').reverse().join('.'),
          yearsOld: action.payload[2],
        },
        user2: {
          name: action.payload[3],
          birth: action.payload[4].split('-').reverse().join('.'),
          yearsOld: action.payload[5],
        },
      };
      state.mainString1 = action.payload[1].split('-').reverse().join('').split('');
      state.mainString2 = action.payload[4].split('-').reverse().join('').split('');
    },
    setClearState(state) {
      state.userDataPersonal = {
        name: '',
        birth: '',
        yearsOld: '',
      };
      state.usersDataCompatibility = {
        user1: { name: '', birth: '', yearsOld: '' },
        user2: { name: '', birth: '', yearsOld: '' },
      };
      state.mainString = [];
      state.mainString1 = [];
      state.mainString2 = [];
    },
  },
});

export default storeSlice.reducer;
