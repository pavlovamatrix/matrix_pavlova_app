import React from 'react';
import './BirthDate.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { storeSlice } from '../../store/reducers/StoreSlice';

export const BirthDate = () => {
  const { userDataPersonal } = useAppSelector((state) => state.storeReducer);
  const dispatch = useAppDispatch();

  const date = new Date().getFullYear();

  return (
    <div className="birth-data">
      <button
        className="btn"
        onClick={() => {
          dispatch(storeSlice.actions.resetUserData());
        }}
      >
        Ввести іншу дату
      </button>
      <div className="birth-information">
        <div className="birth-information_item">
          <b>{`Ім'я: `}</b>
          {userDataPersonal.name}
        </div>
        <div className="birth-information_item">
          <b>Дата народження: </b>
          {userDataPersonal.birth}
        </div>
        <div className="birth-information_item">
          <b>{`Вік: `}</b>
          {userDataPersonal.yearsOld}
        </div>
      </div>
    </div>
  );
};
