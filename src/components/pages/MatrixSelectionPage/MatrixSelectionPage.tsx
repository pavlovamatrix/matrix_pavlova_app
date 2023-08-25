import React from 'react';
import { useNavigate } from 'react-router-dom';
import InstImg from '../../../assets/inst.png';
import TikTokImg from '../../../assets/tiktok.png';
import TelegramImg from '../../../assets/tg.png';

import './MatrixSelectionPage.scss';
import { storeSlice } from '../../../store/reducers/StoreSlice';
import { useAppDispatch } from '../../../hooks/redux';

export const MatrixSelectionPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className="matrix-selection-page_wrapper">
      <h3 className="matrix-selection-page_wrapper_h3">БЕЗКОШТОВНИЙ КАЛЬКУЛЯТОР</h3>
      <h1 className="matrix-selection-page_wrapper_h1">МАТРИЦІ ДОЛІ</h1>
      <div className="buttons_wrapper">
        <button
          className="btn buttons_wrapper-btn"
          onClick={async () => {
            dispatch(storeSlice.actions.setClearState());
            navigate('/personal-matrix');
          }}
        >
          РОЗРАХУВАТИ ОСОБИСТУ МАТРИЦЮ
        </button>
        <button
          className="btn buttons_wrapper-btn"
          onClick={async () => {
            dispatch(storeSlice.actions.setClearState());
            navigate('/compatibility-matrix');
          }}
        >
          РОЗРАХУВАТИ МАТРИЦЮ СУМІСНОСТІ
        </button>
      </div>
      {/*<div className="social-links_wrapper">*/}
      {/*  <div className="social-link">*/}
      {/*    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/nadia_rybii">*/}
      {/*      <img src={InstImg} alt="InstImg" width="50px" />*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*  <div className="social-link">*/}
      {/*    <a target="_blank" rel="noreferrer" href="https://t.me/NadyaRybii">*/}
      {/*      <img src={TelegramImg} alt="TelegramImg" width="50px" />*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*  <div className="social-link">*/}
      {/*    <a*/}
      {/*      target="_blank"*/}
      {/*      rel="noreferrer"*/}
      {/*      href="https://www.tiktok.com/@nadia_rybii/video/7145161773329501446?_r=1&_t=8dUfflEBaP0&social_sharing=v4"*/}
      {/*    >*/}
      {/*      <img src={TikTokImg} alt="TikTokImg" width="45px" />*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
