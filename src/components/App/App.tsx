import './App.css';
import React from 'react';
import { Header } from '../Header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PersonalMatrixPage } from '../pages/PersonalMatrixPage/PersonalMatrixPage';
import CompatibilityMatrixPage from '../pages/CompatibilityMatrixPage/CompatibilityMatrixPage';
import { MatrixSelectionPage } from '../pages/MatrixSelectionPage/MatrixSelectionPage';

export const App = () => {
  return (
    <>
      <Header />
      <main className="main__wrapper">
        <Routes>
          <Route path="/" element={<MatrixSelectionPage />} />
          <Route path="/personal-matrix" element={<PersonalMatrixPage />} />
          <Route path="/compatibility-matrix" element={<CompatibilityMatrixPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
};
