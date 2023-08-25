import React, { useEffect, useRef } from 'react';
import './PersonalMatrixPage.scss';
import { Table } from '../../Table/Table';
import { Purposes } from '../../Purposes/Purposes';
import { Matrix } from '../../MatrixPersonal/Matrix';
import { BirthDate } from '../../BirthDate/BirthDate';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { PersonalMatrixForm } from '../../Forms/PersonalMatrixForm';
import YearsTable from '../../YearsTable/YearsTable';
import jsPDF from 'jspdf';

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
import html2canvas from 'html2canvas';
import { storeSlice } from '../../../store/reducers/StoreSlice';
import { getSum } from '../../../functions/calculator';

export const PersonalMatrixPage = () => {
  const { mainString, userDataPersonal } = useAppSelector((state) => state.storeReducer);
  const dispatch = useAppDispatch();

  function getEnergyValue() {
    const fiveSixValue = fiveSix(mainString, userDataPersonal.birth);
    const sevenEightValue = sevenEight(fiveSixValue, mainString, userDataPersonal.birth);
    const sixSevenValue = sixSeven(fiveSixValue, sevenEightValue);
    const eightNineValue = eightNine(sevenEightValue, mainString, userDataPersonal.birth);
    const twoTreeValue = twoTree(fiveSixValue, mainString, userDataPersonal.birth);
    const oneTwoValue = oneTwo(twoTreeValue, mainString, userDataPersonal.birth);
    const treeFourValue = treeFour(fiveSixValue, twoTreeValue);
    const fourFiveValue = fourFive(treeFourValue, fiveSixValue);
    const nullOneValue = nullOne(mainString, userDataPersonal.birth);
    const nineTenValue = nineTen(eightNineValue, mainString, userDataPersonal.birth);

    const fifteenSixteenValue = fifteenSixteen(mainString, userDataPersonal.birth);
    const twelveThirteenValue = twelveThirteen(
      fifteenSixteenValue,
      mainString,
      userDataPersonal.birth
    );
    const thirteenFourteenValue = thirteenFourteen(fifteenSixteenValue, twelveThirteenValue);
    const elevenTwelveValue = elevenTwelve(twelveThirteenValue, mainString, userDataPersonal.birth);
    const tenElevenValue = tenEleven(mainString, userDataPersonal.birth);
    const seventeenEighteenValue = seventeenEighteen(
      fifteenSixteenValue,
      mainString,
      userDataPersonal.birth
    );
    const sixteenSeventeenValue = sixteenSeventeen(fifteenSixteenValue, seventeenEighteenValue);
    const eighteenNineteenValue = eighteenNineteen(
      seventeenEighteenValue,
      mainString,
      userDataPersonal.birth
    );
    const nineteenTwentyValue = nineteenTwenty(
      eighteenNineteenValue,
      mainString,
      userDataPersonal.birth
    );
    const fourteenFifteenValue = fourteenFifteen(fifteenSixteenValue, thirteenFourteenValue);

    const twentyFiveValue = twentyFive(mainString, userDataPersonal.birth);
    const twentyTwo23Value = twentyTwo23(twentyFiveValue, mainString, userDataPersonal.birth);
    const twentyTree24Value = twentyTree24(twentyTwo23Value, twentyFiveValue);
    const twentyFour25Value = twentyFour25(twentyTree24Value, twentyFiveValue);
    const twentyOne22Value = twentyOne22(twentyTwo23Value, mainString, userDataPersonal.birth);
    const twenty21Value = twenty21(mainString, userDataPersonal.birth);
    const twentySeven28Value = twentySeven28(twentyFiveValue, mainString, userDataPersonal.birth);
    const twentyEighteen29Value = twentyEighteen29(
      twentySeven28Value,
      mainString,
      userDataPersonal.birth
    );
    const twentyNine30Value = twentyNine30(
      twentyEighteen29Value,
      mainString,
      userDataPersonal.birth
    );
    const twentySix27Value = twentySix27(twentyFiveValue, twentySeven28Value);

    const thirtyFiveValue = thirtyFive(mainString, userDataPersonal.birth);
    const thirtyTwo33Value = thirtyTwo33(thirtyFiveValue, mainString, userDataPersonal.birth);
    const thirtyTree34Value = thirtyTree34(thirtyTwo33Value, thirtyFiveValue);
    const thirtyFour35Value = thirtyFour35(thirtyTree34Value, thirtyFiveValue);
    const thirtyOne32Value = thirtyOne32(thirtyTwo33Value, mainString, userDataPersonal.birth);
    const thirty31Value = thirty31(mainString, userDataPersonal.birth);
    const thirtySeven38Value = thirtySeven38(thirtyFiveValue, mainString, userDataPersonal.birth);
    const thirtyEighteen39Value = thirtyEighteen39(
      thirtySeven38Value,
      mainString,
      userDataPersonal.birth
    );
    const thirtyNine40Value = thirtyNine40(
      thirtyEighteen39Value,
      mainString,
      userDataPersonal.birth
    );
    const thirtySix37Value = thirtySix37(thirtyFiveValue, thirtySeven38Value);

    const fortyFiveValue = fortyFive(mainString, userDataPersonal.birth);
    const fortyTwo43Value = fortyTwo43(fortyFiveValue, mainString, userDataPersonal.birth);
    const fortyTree44Value = fortyTree44(fortyTwo43Value, fortyFiveValue);
    const fortyFour45Value = fortyFour45(fortyTree44Value, fortyFiveValue);
    const fortyOne42Value = fortyOne42(fortyTwo43Value, mainString, userDataPersonal.birth);
    const forty41Value = forty41(mainString, userDataPersonal.birth);
    const fortySeven48Value = fortySeven48(fortyFiveValue, mainString, userDataPersonal.birth);
    const fortyEighteen49Value = fortyEighteen49(
      fortySeven48Value,
      mainString,
      userDataPersonal.birth
    );
    const fortyNine50Value = fortyNine50(fortyEighteen49Value, mainString, userDataPersonal.birth);
    const fortySix47Value = fortySix47(fortyFiveValue, fortySeven48Value);

    const fiftyFiveValue = fiftyFive(mainString, userDataPersonal.birth);
    const fiftyTwo53Value = fiftyTwo53(fiftyFiveValue, mainString, userDataPersonal.birth);
    const fiftyTree54Value = fiftyTree54(fiftyTwo53Value, fiftyFiveValue);
    const fiftyFour55Value = fiftyFour55(fiftyTree54Value, fiftyFiveValue);
    const fiftyOne52Value = fiftyOne52(fiftyTwo53Value, mainString, userDataPersonal.birth);
    const fifty51Value = fifty51(mainString, userDataPersonal.birth);
    const fiftySeven58Value = fiftySeven58(fiftyFiveValue, mainString, userDataPersonal.birth);
    const fiftyEighteen59Value = fiftyEighteen59(
      fiftySeven58Value,
      mainString,
      userDataPersonal.birth
    );
    const fiftyNine60Value = fiftyNine60(fiftyEighteen59Value, mainString, userDataPersonal.birth);
    const fiftySix57Value = fiftySix57(fiftyFiveValue, fiftySeven58Value);

    const sixtyFiveValue = sixtyFive(mainString, userDataPersonal.birth);
    const sixtyTwo63Value = sixtyTwo63(sixtyFiveValue, mainString, userDataPersonal.birth);
    const sixtyTree64Value = sixtyTree64(sixtyTwo63Value, sixtyFiveValue);
    const sixtyFour65Value = sixtyFour65(sixtyTree64Value, sixtyFiveValue);
    const sixtyOne62Value = sixtyOne62(sixtyTwo63Value, mainString, userDataPersonal.birth);
    const sixty61Value = sixty61(mainString, userDataPersonal.birth);
    const sixtySeven68Value = sixtySeven68(sixtyFiveValue, mainString, userDataPersonal.birth);
    const sixtyEighteen69Value = sixtyEighteen69(
      sixtySeven68Value,
      mainString,
      userDataPersonal.birth
    );
    const sixtyNine70Value = sixtyNine70(sixtyEighteen69Value, mainString, userDataPersonal.birth);
    const sixtySix67Value = sixtySix67(sixtyFiveValue, sixtySeven68Value);

    const seventyFiveValue = seventyFive(mainString, userDataPersonal.birth);
    const seventyTwo73Value = seventyTwo73(seventyFiveValue, mainString, userDataPersonal.birth);
    const seventyTree74Value = seventyTree74(seventyTwo73Value, seventyFiveValue);
    const seventyFour75Value = seventyFour75(seventyTree74Value, seventyFiveValue);
    const seventyOne72Value = seventyOne72(seventyTwo73Value, mainString, userDataPersonal.birth);
    const seventy71Value = seventy71(mainString, userDataPersonal.birth);
    const seventySeven78Value = seventySeven78(
      seventyFiveValue,
      mainString,
      userDataPersonal.birth
    );
    const seventyEighteen79Value = seventyEighteen79(
      seventySeven78Value,
      mainString,
      userDataPersonal.birth
    );
    const seventyNine80Value = seventyNine80(
      seventyEighteen79Value,
      mainString,
      userDataPersonal.birth
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
  // console.log(Object.values(getEnergyValue()));
  // dispatch(storeSlice.actions.setEnergyArray(Object.values(getEnergyValue())));

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
        const pdfWidth = pdfHeight / 5.5;
        pdf.addImage(contentDataURL, 'PNG', 0, position, pdfWidth, pdfHeight);
      } else {
        const pdfWidth = pdf.internal.pageSize.getWidth();
        pdf.addImage(contentDataURL, 'PNG', 50, position, pdfWidth - 120, pdfHeight);
      }
      pdf.save('matrixPersonalPDF.pdf'); // Generated PDF
    });
  };

  // const handleGeneratePdf = () => {
  //   const data = document.getElementById('matrixPDF')!;
  //   html2canvas(data).then((canvas) => {
  //     // Few necessary setting options
  //     const imgWidth = 297;
  //     const pageHeight = 295;
  //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
  //     const heightLeft = imgHeight;
  //
  //     const contentDataURL = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF('p', 'mm', [canvas.width, canvas.height]);
  //     const pdfHeight = pdf.internal.pageSize.getHeight(); // A4 size page of PDF
  //     let pdfWidth;
  //     if (window.innerWidth < 1100) {
  //       pdfWidth = pdfHeight / 6.7;
  //     } else pdfWidth = pdf.internal.pageSize.getWidth() + 120;
  //     // const pdfWidth = pdfHeight / 6.7;
  //
  //     const position = 0;
  //     pdf.addImage(contentDataURL, 'PNG', 0, position, pdfWidth, pdfHeight);
  //     pdf.save('matrixPDF.pdf'); // Generated PDF
  //   });
  // };
  return (
    <div className="matrix_container" id="matrixPDF">
      {!userDataPersonal.birth ? (
        <PersonalMatrixForm />
      ) : (
        <>
          <BirthDate />
          <div className="matrix-and-big-table-wrapper">
            <Matrix getEnergyValue={getEnergyValue} />
            <Purposes getEnergyValue={getEnergyValue} />
            {/*<YearsTable getEnergyValue={getEnergyValue} />*/}
          </div>
          <div className="table-wrapper">
            <Table />
            <div className="table-wrapper_btn-group">
              <div className="table-wrapper_btn-group-p">
                <p>
                  Матриця Долі – це унікальний метод самопізнання, за допомогою якого можна
                  зрозуміти, з яким потенціалом людина прийшла на Землю та які завдання їй необхідно
                  вирішити.{' '}
                </p>
                <p>
                  Це своєрідний енергетичний код ДНК людини, в якому зашифрована інформація про всі
                  сфери нашого життя. Розібравшись в них, ми пізнаємо себе, розуміємо, чому ми такі,
                  які є насправді, чому з нами трапляються ті чи інші ситуації та як нам, все ж
                  таки, стати тією – кращою версією себе✨
                </p>
              </div>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pavlova.tarot">
                <button className="btn btn_compatibility-matrix">ЗАМОВИТИ КОНСУЛЬТАЦІЮ</button>
              </a>
              <button className="button btn" style={{ width: 150 }} onClick={handleGeneratePdf}>
                Generate PDF
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
