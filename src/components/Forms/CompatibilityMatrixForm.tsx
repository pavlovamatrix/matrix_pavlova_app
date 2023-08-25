import React, { useState } from 'react';
import './Form.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { TextField } from '@mui/material';
import { storeSlice } from '../../store/reducers/StoreSlice';
import InputMask from 'react-input-mask';

export const CompatibilityMatrixForm = () => {
  const [userName1, setUserName1] = useState<string>('');
  const [birthDate1, setStartDate1] = useState<string>('');
  const [yearsOld1, setYearsOld1] = useState<string>('');

  const [userName2, setUserName2] = useState<string>('');
  const [birthDate2, setStartDate2] = useState<string>('');
  const [yearsOld2, setYearsOld2] = useState<string>('');

  const currentDate = new Date();

  const dispatch = useAppDispatch();
  const { usersDataCompatibility } = useAppSelector((state) => state.storeReducer);

  return (
    <div className="form">
      <h2 className="form_h2">ОНЛАЙН-РОЗРАХУНОК</h2>
      <h1 className="form_h1">МАТРИЦІ СУМІСНОСТІ</h1>
      <label htmlFor="name1" className="label">{`Ім'я 1 людини: `}</label>
      <TextField
        inputProps={{
          style: { fontFamily: 'Playfair Display' },
        }}
        id="name1"
        name="name1"
        onChange={(e) => setUserName1(e.target.value)}
        size="small"
        value={userName1}
      />
      <label className="label" htmlFor="date1">
        Дата народження 1 людини:{' '}
      </label>
      <InputMask
        mask="99.99.9999"
        placeholder="DD.MM.YYYY"
        style={styles.input}
        onChange={(e) => {
          setStartDate1(e.target.value.toString().split('.').reverse().join('-'));
          setYearsOld1(
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
      <label htmlFor="name2" className="label">{`Ім'я 2 людини: `}</label>
      <TextField
        inputProps={{
          style: { fontFamily: 'Playfair Display' },
        }}
        id="name2"
        name="name2"
        onChange={(e) => setUserName2(e.target.value)}
        size="small"
        value={userName2}
      />
      <label className="label" htmlFor="date2">
        Дата народження 2 людини:{' '}
      </label>
      <InputMask
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            dispatch(
              storeSlice.actions.setUsersDataCompatibility([
                userName1,
                birthDate1,
                yearsOld1,
                userName2,
                birthDate2,
                yearsOld2,
              ])
            );
          }
        }}
        mask="99.99.9999"
        placeholder="DD.MM.YYYY"
        style={styles.input}
        onChange={(e) => {
          setStartDate2(e.target.value.toString().split('.').reverse().join('-'));
          setYearsOld2(
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
        onClick={() => {
          dispatch(
            storeSlice.actions.setUsersDataCompatibility([
              userName1,
              birthDate1,
              yearsOld1,
              userName2,
              birthDate2,
              yearsOld2,
            ])
          );
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
