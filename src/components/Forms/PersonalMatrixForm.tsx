import React, { useState } from 'react';
import './Form.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { TextField } from '@mui/material';
import { storeSlice } from '../../store/reducers/StoreSlice';
import InputMask from 'react-input-mask';

export const PersonalMatrixForm = () => {
  const [userName, setUserName] = useState<string>('');
  const [birthDate, setStartDate] = useState<string>('');
  const [yearsOld, setYearsOld] = useState<string>('');

  const currentDate = new Date();

  const dispatch = useAppDispatch();
  const { userDataPersonal } = useAppSelector((state) => state.storeReducer);

  return (
    <div className="form">
      <h2 className="form_h2">ОНЛАЙН-РОЗРАХУНОК</h2>
      <h1 className="form_h1">ОСОБИСТОЇ МАТРИЦІ ДОЛІ</h1>
      <label className="label" htmlFor="name">{`Ім'я: `}</label>
      <TextField
        inputProps={{
          style: { fontFamily: 'Playfair Display' },
        }}
        id="name"
        name="name"
        onChange={(e) => setUserName(e.target.value)}
        size="small"
        value={userName}
      />
      <label className="label" htmlFor="date">
        Дата народження:{' '}
      </label>
      <InputMask
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            dispatch(storeSlice.actions.setUserData([userName, birthDate, yearsOld]));
          }
        }}
        autoComplete="on"
        mask="99.99.9999"
        placeholder="DD.MM.YYYY"
        style={styles.input}
        onChange={(e) => {
          setStartDate(e.target.value.toString().split('.').reverse().join('-'));
          setYearsOld(
            (
              (currentDate.getTime() -
                new Date(e.target.value.toString().split('.').reverse().join('-')).getTime()) /
              31536000000
            )
              .toString()
              .slice(0, 2)
          );
        }}
      ></InputMask>

      <button
        className="btn"
        id="form_btn"
        onClick={(e) => {
          dispatch(storeSlice.actions.setUserData([userName, birthDate, yearsOld]));
        }}
      >
        Розрахувати
      </button>
    </div>
  );
};

const styles = {
  input: {
    height: 40,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 5,
    padding: 14,
    color: '#000000',
    border: '1px solid #c4c4c4',
    fontSize: '15px',
    fontFamily: 'Playfair Display',
  },
};
