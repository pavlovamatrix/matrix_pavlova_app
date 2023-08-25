import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { CompatibilityMatrixForm } from '../../Forms/CompatibilityMatrixForm';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { MatrixCompatibility } from '../../MatrixCompatibility/MatrixCompatibility';
import './CompatibilityMatrixPage.scss';
import {
  getSum,
  largeCircleValue1,
  largeCircleValue2,
  largeCircleValue3,
  largeCircleValue4,
  largeCircleValue5,
  largeCircleValue6,
  largeCircleValue7,
  largeCircleValue8,
  largeCircleValueCenter,
  mediumCircleValue1,
  mediumCircleValue2,
  mediumCircleValue3,
  mediumCircleValue4,
  mediumCircleValue5,
  mediumCircleValue6,
  mediumCircleValue7,
  mediumCircleValue8,
  smallCircleValue1,
  smallCircleValue10,
  smallCircleValue11,
  smallCircleValue12,
  smallCircleValue13,
  smallCircleValue14,
  smallCircleValue2,
  smallCircleValue3,
  smallCircleValue4,
  smallCircleValue5,
  smallCircleValue6,
  smallCircleValue7,
  smallCircleValue8,
  smallCircleValue9,
} from '../../../functions/calculator';
import { MatrixCompatibilityResult } from '../../MatrixCompatibilityResult/MatrixCompatibilityResult';
import { AppointmentCompatibility } from '../../AppointmentCompatibility/AppointmentCompatibility';
import { storeSlice } from '../../../store/reducers/StoreSlice';
import { useNavigate } from 'react-router-dom';
import {
  eighteenNineteen,
  eightNine,
  elevenTwelve,
  fifteenSixteen,
  fifty51,
  fiftyEighteen59,
  fiftyFive,
  fiftyFour55,
  fiftyNine60,
  fiftyOne52,
  fiftySeven58,
  fiftySix57,
  fiftyTree54,
  fiftyTwo53,
  fiveSix,
  forty41,
  fortyEighteen49,
  fortyFive,
  fortyFour45,
  fortyNine50,
  fortyOne42,
  fortySeven48,
  fortySix47,
  fortyTree44,
  fortyTwo43,
  fourFive,
  fourteenFifteen,
  nineteenTwenty,
  nineTen,
  nullOne,
  oneTwo,
  sevenEight,
  seventeenEighteen,
  seventy71,
  seventyEighteen79,
  seventyFive,
  seventyFour75,
  seventyNine80,
  seventyOne72,
  seventySeven78,
  seventySix77,
  seventyTree74,
  seventyTwo73,
  sixSeven,
  sixteenSeventeen,
  sixty61,
  sixtyEighteen69,
  sixtyFive,
  sixtyFour65,
  sixtyNine70,
  sixtyOne62,
  sixtySeven68,
  sixtySix67,
  sixtyTree64,
  sixtyTwo63,
  tenEleven,
  thirteenFourteen,
  thirty31,
  thirtyEighteen39,
  thirtyFive,
  thirtyFour35,
  thirtyNine40,
  thirtyOne32,
  thirtySeven38,
  thirtySix37,
  thirtyTree34,
  thirtyTwo33,
  treeFour,
  twelveThirteen,
  twenty21,
  twentyEighteen29,
  twentyFive,
  twentyFour25,
  twentyNine30,
  twentyOne22,
  twentySeven28,
  twentySix27,
  twentyTree24,
  twentyTwo23,
  twoTree,
} from '../../../functions/years-table-calculator';
import { Purposes } from '../../Purposes/Purposes';

interface IYearsTableProps {
  getEnergyValue: () => { [key: string]: number };
}

const CompatibilityMatrixPage = () => {
  const { mainString1, mainString2, usersDataCompatibility } = useAppSelector(
    (state) => state.storeReducer
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const getCirclesValue = (mainString: string[], birth: string) => {
    const circleLarge1 = largeCircleValue1(mainString, birth);
    const circleLarge4 = largeCircleValue4(mainString, birth);
    const circleLarge2 = largeCircleValue2(mainString, birth);
    const circleLarge5 = largeCircleValue5(mainString, birth);
    const circleLarge3 = largeCircleValue3(mainString, birth);
    const circleLarge8 = largeCircleValue8(mainString, birth);
    const circleLarge6 = largeCircleValue6(mainString, birth);
    const circleLarge7 = largeCircleValue7(mainString, birth);
    const circleLargeCenter = largeCircleValueCenter(mainString, birth);

    const mediumCircle1 = mediumCircleValue1(mainString, birth);
    const mediumCircle2 = mediumCircleValue2(mainString, birth);
    const mediumCircle3 = mediumCircleValue3(mainString, birth);
    const mediumCircle4 = mediumCircleValue4(mainString, birth);
    const mediumCircle5 = mediumCircleValue5(mainString, birth);
    const mediumCircle6 = mediumCircleValue6(mainString, birth);
    const mediumCircle7 = mediumCircleValue7(mainString, birth);
    const mediumCircle8 = mediumCircleValue8(mainString, birth);

    const smallCircle1 = smallCircleValue1(mainString, birth);
    const smallCircle2 = smallCircleValue2(mainString, birth);
    const smallCircle3 = smallCircleValue3(mainString, birth);
    const smallCircle4 = smallCircleValue4(mainString, birth);
    const smallCircle5 = smallCircleValue5(mainString, birth);
    const smallCircle6 = smallCircleValue6(mainString, birth);
    const smallCircle7 = smallCircleValue7(mainString, birth);
    const smallCircle8 = smallCircleValue8(mainString, birth);
    const smallCircle9 = smallCircleValue9(mainString, birth);
    const smallCircle10 = smallCircleValue10(mainString, birth);
    const smallCircle11 = smallCircleValue11(mainString, birth);
    const smallCircle12 = smallCircleValue12(mainString, birth);
    const smallCircle13 = smallCircleValue13(mainString, birth);
    const smallCircle14 = smallCircleValue14(mainString, birth);

    return {
      circleLarge1,
      circleLarge4,
      circleLarge2,
      circleLarge5,
      circleLarge3,
      circleLarge8,
      circleLarge6,
      circleLarge7,
      circleLargeCenter,
      mediumCircle1,
      mediumCircle2,
      mediumCircle3,
      mediumCircle4,
      mediumCircle5,
      mediumCircle6,
      mediumCircle7,
      mediumCircle8,
      smallCircle1,
      smallCircle2,
      smallCircle3,
      smallCircle4,
      smallCircle5,
      smallCircle6,
      smallCircle7,
      smallCircle8,
      smallCircle9,
      smallCircle10,
      smallCircle11,
      smallCircle12,
      smallCircle13,
      smallCircle14,
    };
  };

  function getEnergyValue(mainString: string[], birth: string) {
    const fiveSixValue = fiveSix(mainString, birth);
    const sevenEightValue = sevenEight(fiveSixValue, mainString, birth);
    const sixSevenValue = sixSeven(fiveSixValue, sevenEightValue);
    const eightNineValue = eightNine(sevenEightValue, mainString, birth);
    const twoTreeValue = twoTree(fiveSixValue, mainString, birth);
    const oneTwoValue = oneTwo(twoTreeValue, mainString, birth);
    const treeFourValue = treeFour(fiveSixValue, twoTreeValue);
    const fourFiveValue = fourFive(treeFourValue, fiveSixValue);
    const nullOneValue = nullOne(mainString, birth);
    const nineTenValue = nineTen(eightNineValue, mainString, birth);

    const fifteenSixteenValue = fifteenSixteen(mainString, birth);
    const twelveThirteenValue = twelveThirteen(
      fifteenSixteenValue,
      mainString,

      birth
    );
    const thirteenFourteenValue = thirteenFourteen(fifteenSixteenValue, twelveThirteenValue);
    const elevenTwelveValue = elevenTwelve(twelveThirteenValue, mainString, birth);
    const tenElevenValue = tenEleven(mainString, birth);
    const seventeenEighteenValue = seventeenEighteen(
      fifteenSixteenValue,
      mainString,

      birth
    );
    const sixteenSeventeenValue = sixteenSeventeen(fifteenSixteenValue, seventeenEighteenValue);
    const eighteenNineteenValue = eighteenNineteen(
      seventeenEighteenValue,
      mainString,

      birth
    );
    const nineteenTwentyValue = nineteenTwenty(
      eighteenNineteenValue,
      mainString,

      birth
    );
    const fourteenFifteenValue = fourteenFifteen(fifteenSixteenValue, thirteenFourteenValue);

    const twentyFiveValue = twentyFive(mainString, birth);
    const twentyTwo23Value = twentyTwo23(twentyFiveValue, mainString, birth);
    const twentyTree24Value = twentyTree24(twentyTwo23Value, twentyFiveValue);
    const twentyFour25Value = twentyFour25(twentyTree24Value, twentyFiveValue);
    const twentyOne22Value = twentyOne22(twentyTwo23Value, mainString, birth);
    const twenty21Value = twenty21(mainString, birth);
    const twentySeven28Value = twentySeven28(twentyFiveValue, mainString, birth);
    const twentyEighteen29Value = twentyEighteen29(
      twentySeven28Value,
      mainString,

      birth
    );
    const twentyNine30Value = twentyNine30(
      twentyEighteen29Value,
      mainString,

      birth
    );
    const twentySix27Value = twentySix27(twentyFiveValue, twentySeven28Value);

    const thirtyFiveValue = thirtyFive(mainString, birth);
    const thirtyTwo33Value = thirtyTwo33(thirtyFiveValue, mainString, birth);
    const thirtyTree34Value = thirtyTree34(thirtyTwo33Value, thirtyFiveValue);
    const thirtyFour35Value = thirtyFour35(thirtyTree34Value, thirtyFiveValue);
    const thirtyOne32Value = thirtyOne32(thirtyTwo33Value, mainString, birth);
    const thirty31Value = thirty31(mainString, birth);
    const thirtySeven38Value = thirtySeven38(thirtyFiveValue, mainString, birth);
    const thirtyEighteen39Value = thirtyEighteen39(
      thirtySeven38Value,
      mainString,

      birth
    );
    const thirtyNine40Value = thirtyNine40(
      thirtyEighteen39Value,
      mainString,

      birth
    );
    const thirtySix37Value = thirtySix37(thirtyFiveValue, thirtySeven38Value);

    const fortyFiveValue = fortyFive(mainString, birth);
    const fortyTwo43Value = fortyTwo43(fortyFiveValue, mainString, birth);
    const fortyTree44Value = fortyTree44(fortyTwo43Value, fortyFiveValue);
    const fortyFour45Value = fortyFour45(fortyTree44Value, fortyFiveValue);
    const fortyOne42Value = fortyOne42(fortyTwo43Value, mainString, birth);
    const forty41Value = forty41(mainString, birth);
    const fortySeven48Value = fortySeven48(fortyFiveValue, mainString, birth);
    const fortyEighteen49Value = fortyEighteen49(
      fortySeven48Value,
      mainString,

      birth
    );
    const fortyNine50Value = fortyNine50(fortyEighteen49Value, mainString, birth);
    const fortySix47Value = fortySix47(fortyFiveValue, fortySeven48Value);

    const fiftyFiveValue = fiftyFive(mainString, birth);
    const fiftyTwo53Value = fiftyTwo53(fiftyFiveValue, mainString, birth);
    const fiftyTree54Value = fiftyTree54(fiftyTwo53Value, fiftyFiveValue);
    const fiftyFour55Value = fiftyFour55(fiftyTree54Value, fiftyFiveValue);
    const fiftyOne52Value = fiftyOne52(fiftyTwo53Value, mainString, birth);
    const fifty51Value = fifty51(mainString, birth);
    const fiftySeven58Value = fiftySeven58(fiftyFiveValue, mainString, birth);
    const fiftyEighteen59Value = fiftyEighteen59(
      fiftySeven58Value,
      mainString,

      birth
    );
    const fiftyNine60Value = fiftyNine60(fiftyEighteen59Value, mainString, birth);
    const fiftySix57Value = fiftySix57(fiftyFiveValue, fiftySeven58Value);

    const sixtyFiveValue = sixtyFive(mainString, birth);
    const sixtyTwo63Value = sixtyTwo63(sixtyFiveValue, mainString, birth);
    const sixtyTree64Value = sixtyTree64(sixtyTwo63Value, sixtyFiveValue);
    const sixtyFour65Value = sixtyFour65(sixtyTree64Value, sixtyFiveValue);
    const sixtyOne62Value = sixtyOne62(sixtyTwo63Value, mainString, birth);
    const sixty61Value = sixty61(mainString, birth);
    const sixtySeven68Value = sixtySeven68(sixtyFiveValue, mainString, birth);
    const sixtyEighteen69Value = sixtyEighteen69(
      sixtySeven68Value,
      mainString,

      birth
    );
    const sixtyNine70Value = sixtyNine70(sixtyEighteen69Value, mainString, birth);
    const sixtySix67Value = sixtySix67(sixtyFiveValue, sixtySeven68Value);

    const seventyFiveValue = seventyFive(mainString, birth);
    const seventyTwo73Value = seventyTwo73(seventyFiveValue, mainString, birth);
    const seventyTree74Value = seventyTree74(seventyTwo73Value, seventyFiveValue);
    const seventyFour75Value = seventyFour75(seventyTree74Value, seventyFiveValue);
    const seventyOne72Value = seventyOne72(seventyTwo73Value, mainString, birth);
    const seventy71Value = seventy71(mainString, birth);
    const seventySeven78Value = seventySeven78(
      seventyFiveValue,
      mainString,

      birth
    );
    const seventyEighteen79Value = seventyEighteen79(
      seventySeven78Value,
      mainString,

      birth
    );
    const seventyNine80Value = seventyNine80(
      seventyEighteen79Value,
      mainString,

      birth
    );
    const seventySix77Value = seventySix77(seventyFiveValue, seventySeven78Value);

    return {
      nullOneValue,
      oneTwoValue,
      twoTreeValue,
      treeFourValue,
      fourFiveValue,
      fiveSixValue,
      sixSevenValue,
      sevenEightValue,
      eightNineValue,
      nineTenValue,
      tenElevenValue,
      elevenTwelveValue,
      twelveThirteenValue,
      thirteenFourteenValue,
      fourteenFifteenValue,
      fifteenSixteenValue,
      sixteenSeventeenValue,
      seventeenEighteenValue,
      eighteenNineteenValue,
      nineteenTwentyValue,
      twenty21Value,
      twentyOne22Value,
      twentyTwo23Value,
      twentyTree24Value,
      twentyFour25Value,
      twentyFiveValue,
      twentySix27Value,
      twentySeven28Value,
      twentyEighteen29Value,
      twentyNine30Value,
      thirty31Value,
      thirtyOne32Value,
      thirtyTwo33Value,
      thirtyTree34Value,
      thirtyFour35Value,
      thirtyFiveValue,
      thirtySix37Value,
      thirtySeven38Value,
      thirtyEighteen39Value,
      thirtyNine40Value,
      forty41Value,
      fortyOne42Value,
      fortyTwo43Value,
      fortyTree44Value,
      fortyFour45Value,
      fortyFiveValue,
      fortySix47Value,
      fortySeven48Value,
      fortyEighteen49Value,
      fortyNine50Value,
      fifty51Value,
      fiftyOne52Value,
      fiftyTwo53Value,
      fiftyTree54Value,
      fiftyFour55Value,
      fiftyFiveValue,
      fiftySix57Value,
      fiftySeven58Value,
      fiftyEighteen59Value,
      fiftyNine60Value,
      sixty61Value,
      sixtyOne62Value,
      sixtyTwo63Value,
      sixtyTree64Value,
      sixtyFour65Value,
      sixtyFiveValue,
      sixtySix67Value,
      sixtySeven68Value,
      sixtyEighteen69Value,
      sixtyNine70Value,
      seventy71Value,
      seventyOne72Value,
      seventyTwo73Value,
      seventyTree74Value,
      seventyFour75Value,
      seventyFiveValue,
      seventySix77Value,
      seventySeven78Value,
      seventyEighteen79Value,
      seventyNine80Value,
    };
  }

  const handleGeneratePdf = () => {
    const data = document.getElementById('matrixPDF')!;
    html2canvas(data).then((canvas) => {
      // Few necessary setting options
      const imgWidth = 297;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf;
      if (window.innerWidth < 1100) {
        pdf = pdf = new jsPDF('p', 'mm', [canvas.width, canvas.height]);
      } else {
        pdf = new jsPDF('l', 'mm', 'a4');
      }
      const pdfHeight = pdf.internal.pageSize.getHeight(); // A4 size page of PDF
      let pdfWidth;
      const position = 0;
      if (window.innerWidth < 1100) {
        const pdfWidth = pdfHeight / 4.5;
        pdf.addImage(contentDataURL, 'PNG', 0, position, pdfWidth, pdfHeight);
      } else {
        const pdfWidth = pdf.internal.pageSize.getWidth();
        pdf.addImage(contentDataURL, 'PNG', 50, position, pdfWidth - 140, pdfHeight);
      }
      pdf.save('matrixPDF.pdf'); // Generated PDF
    });
  };

  return (
    <div className="matrixs_container" id="matrixPDF">
      {!(usersDataCompatibility.user1.birth && usersDataCompatibility.user2.birth) ? (
        <CompatibilityMatrixForm />
      ) : (
        <>
          {/*<div className="table-wrapper">*/}
          {/*  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pavlova.tarot">*/}
          {/*    <button className="btn btn_compatibility-matrix">ЗАМОВИТИ КОНСУЛЬТАЦІЮ</button>*/}
          {/*  </a>*/}
          {/*  <button className="button btn" style={{ width: 150 }} onClick={handleGeneratePdf}>*/}
          {/*    Generate PDF*/}
          {/*  </button>*/}
          {/*</div>*/}
          <div className="matrixs-wrapper matrix-result">
            <MatrixCompatibilityResult
              mainString1={mainString1}
              mainString2={mainString2}
              userData1={usersDataCompatibility.user1}
              userData2={usersDataCompatibility.user2}
              getCirclesValue={getCirclesValue}
            />
            <AppointmentCompatibility
              mainString1={mainString1}
              mainString2={mainString2}
              userData1={usersDataCompatibility.user1}
              userData2={usersDataCompatibility.user2}
              getCirclesValue={getCirclesValue}
              handleGeneratePdf={handleGeneratePdf}
            />
          </div>
          <div className="matrixs-wrapper">
            <MatrixCompatibility
              mainString={mainString1}
              mainString2={mainString2}
              userData={usersDataCompatibility.user1}
              getCirclesValue={getCirclesValue}
              getEnergyValue={getEnergyValue}
            />

            <MatrixCompatibility
              mainString={mainString2}
              mainString2={mainString1}
              userData={usersDataCompatibility.user2}
              getCirclesValue={getCirclesValue}
              getEnergyValue={getEnergyValue}
            />
          </div>
          <button
            className="button btn"
            style={{ width: 150 }}
            onClick={() => {
              dispatch(storeSlice.actions.setClearState());
            }}
          >
            Ввести іншу дату
          </button>
        </>
      )}
    </div>
  );
};

export default CompatibilityMatrixPage;
