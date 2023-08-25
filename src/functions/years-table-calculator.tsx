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
} from './calculator';

export const fiveSix = (mainString: string[], birth: string) => {
  return getSum(largeCircleValue2(mainString, birth) + largeCircleValue4(mainString, birth));
};

export const nullOne = (mainString: string[], birth: string) => {
  return getSum(largeCircleValue4(mainString, birth));
};

export const oneTwo = (twoTree: number, mainString: string[], birth: string) => {
  return getSum(twoTree + largeCircleValue4(mainString, birth));
};

export const twoTree = (fiveSix: number, mainString: string[], birth: string) => {
  return getSum(fiveSix + largeCircleValue4(mainString, birth));
};

export const treeFour = (fiveSix: number, twoTree: number) => {
  return getSum(fiveSix + twoTree);
};

export const fourFive = (treeFour: number, fiveSix: number) => {
  return getSum(treeFour + fiveSix);
};

export const sevenEight = (fiveSixValue: number, mainString: string[], birth: string) => {
  return getSum(fiveSixValue + largeCircleValue2(mainString, birth));
};

export const sixSeven = (fiveSixValue: number, sevenEightValue: number) => {
  return getSum(fiveSixValue + sevenEightValue);
};

export const eightNine = (sevenEightValue: number, mainString: string[], birth: string) => {
  return getSum(sevenEightValue + largeCircleValue2(mainString, birth));
};
export const nineTen = (eightNine: number, mainString: string[], birth: string) => {
  return getSum(eightNine + largeCircleValue2(mainString, birth));
};
/********************************/

export const fifteenSixteen = (mainString: string[], birth: string) => {
  return getSum(largeCircleValue2(mainString, birth) + largeCircleValue1(mainString, birth));
};

export const twelveThirteen = (fifteenSixteen: number, mainString: string[], birth: string) => {
  return getSum(fifteenSixteen + largeCircleValue2(mainString, birth));
};

export const thirteenFourteen = (fifteenSixteen: number, twelveThirteen: number) => {
  return getSum(fifteenSixteen + twelveThirteen);
};

export const fourteenFifteen = (fifteenSixteen: number, thirteenFourteen: number) => {
  return getSum(fifteenSixteen + thirteenFourteen);
};

export const elevenTwelve = (twelveThirteen: number, mainString: string[], birth: string) => {
  return getSum(twelveThirteen + largeCircleValue2(mainString, birth));
};

export const tenEleven = (mainString: string[], birth: string) => {
  return getSum(largeCircleValue2(mainString, birth));
};

export const seventeenEighteen = (fifteenSixteen: number, mainString: string[], birth: string) => {
  return getSum(fifteenSixteen + largeCircleValue1(mainString, birth));
};

export const sixteenSeventeen = (fifteenSixteen: number, seventeenEighteen: number) => {
  return getSum(fifteenSixteen + seventeenEighteen);
};

export const eighteenNineteen = (
  seventeenEighteen: number,
  mainString: string[],
  birth: string
) => {
  return getSum(seventeenEighteen + largeCircleValue1(mainString, birth));
};

export const nineteenTwenty = (eighteenNineteen: number, mainString: string[], birth: string) => {
  return getSum(eighteenNineteen + largeCircleValue1(mainString, birth));
};

/**********************************/

export const twentyFive = (mainString: string[], birth: string) => {
  return getSum(largeCircleValue1(mainString, birth) + largeCircleValue3(mainString, birth));
};

export const twentyTwo23 = (twentyFive: number, mainString: string[], birth: string) => {
  return getSum(twentyFive + largeCircleValue1(mainString, birth));
};

export const twentyTree24 = (twentyTwo23: number, twentyFive: number) => {
  return getSum(twentyTwo23 + twentyFive);
};

export const twentyFour25 = (twentyTree24: number, twentyFive: number) => {
  return getSum(twentyTree24 + twentyFive);
};

export const twentyOne22 = (twentyTwo23: number, mainString: string[], birth: string) => {
  return getSum(twentyTwo23 + largeCircleValue1(mainString, birth));
};

export const twenty21 = (mainString: string[], birth: string) => {
  return getSum(largeCircleValue1(mainString, birth));
};

export const twentySeven28 = (twentyFive: number, mainString: string[], birth: string) => {
  return getSum(twentyFive + largeCircleValue3(mainString, birth));
};

export const twentyEighteen29 = (twentySeven28: number, mainString: string[], birth: string) => {
  return getSum(twentySeven28 + largeCircleValue3(mainString, birth));
};

export const twentyNine30 = (twentyEighteen29: number, mainString: string[], birth: string) => {
  return getSum(twentyEighteen29 + largeCircleValue3(mainString, birth));
};

export const twentySix27 = (twentyFive: number, twentySeven28: number) => {
  return getSum(twentyFive + twentySeven28);
};

/*****************************************/

export const thirtyFive = (mainString: string[], birth: string) => {
  return getSum(largeCircleValue3(mainString, birth) + largeCircleValue5(mainString, birth));
};

export const thirtyTwo33 = (thirtyFive: number, mainString: string[], birth: string) => {
  return getSum(thirtyFive + largeCircleValue3(mainString, birth));
};

export const thirtyTree34 = (thirtyTwo33: number, thirtyFive: number) => {
  return getSum(thirtyTwo33 + thirtyFive);
};

export const thirtyFour35 = (thirtyTree34: number, thirtyFive: number) => {
  return getSum(thirtyTree34 + thirtyFive);
};

export const thirtyOne32 = (thirtyTwo33: number, mainString: string[], birth: string) => {
  return getSum(thirtyTwo33 + largeCircleValue3(mainString, birth));
};

export const thirty31 = (mainString: string[], birth: string) => {
  return getSum(largeCircleValue3(mainString, birth));
};

export const thirtySeven38 = (thirtyFive: number, mainString: string[], birth: string) => {
  return getSum(thirtyFive + largeCircleValue5(mainString, birth));
};

export const thirtyEighteen39 = (thirtySeven38: number, mainString: string[], birth: string) => {
  return getSum(thirtySeven38 + largeCircleValue5(mainString, birth));
};

export const thirtyNine40 = (thirtyEighteen39: number, mainString: string[], birth: string) => {
  return getSum(thirtyEighteen39 + largeCircleValue5(mainString, birth));
};

export const thirtySix37 = (thirtyFive: number, thirtySeven38: number) => {
  return getSum(thirtyFive + thirtySeven38);
};

/*****************************************/

export const fortyFive = (mainString: string[], birth: string) => {
  return getSum(largeCircleValue5(mainString, birth) + largeCircleValue7(mainString, birth));
};

export const fortyTwo43 = (fortyFive: number, mainString: string[], birth: string) => {
  return getSum(fortyFive + largeCircleValue5(mainString, birth));
};

export const fortyTree44 = (fortyTwo43: number, fortyFive: number) => {
  return getSum(fortyTwo43 + fortyFive);
};

export const fortyFour45 = (fortyTree44: number, fortyFive: number) => {
  return getSum(fortyTree44 + fortyFive);
};

export const fortyOne42 = (fortyTwo43: number, mainString: string[], birth: string) => {
  return getSum(fortyTwo43 + largeCircleValue5(mainString, birth));
};

export const forty41 = (mainString: string[], birth: string) => {
  return getSum(largeCircleValue5(mainString, birth));
};

export const fortySeven48 = (fortyFive: number, mainString: string[], birth: string) => {
  return getSum(fortyFive + largeCircleValue7(mainString, birth));
};

export const fortyEighteen49 = (fortySeven48: number, mainString: string[], birth: string) => {
  return getSum(fortySeven48 + largeCircleValue7(mainString, birth));
};

export const fortyNine50 = (fortyEighteen49: number, mainString: string[], birth: string) => {
  return getSum(fortyEighteen49 + largeCircleValue7(mainString, birth));
};

export const fortySix47 = (fortyFive: number, fortySeven48: number) => {
  return getSum(fortyFive + fortySeven48);
};

/*****************************************/

export const fiftyFive = (mainString: string[], birth: string) => {
  return getSum(largeCircleValue7(mainString, birth) + largeCircleValue8(mainString, birth));
};

export const fiftyTwo53 = (fiftyFive: number, mainString: string[], birth: string) => {
  return getSum(fiftyFive + largeCircleValue7(mainString, birth));
};

export const fiftyTree54 = (fiftyTwo53: number, fiftyFive: number) => {
  return getSum(fiftyTwo53 + fiftyFive);
};

export const fiftyFour55 = (fiftyTree54: number, fiftyFive: number) => {
  return getSum(fiftyTree54 + fiftyFive);
};

export const fiftyOne52 = (fiftyTwo53: number, mainString: string[], birth: string) => {
  return getSum(fiftyTwo53 + largeCircleValue7(mainString, birth));
};

export const fifty51 = (mainString: string[], birth: string) => {
  return getSum(largeCircleValue7(mainString, birth));
};

export const fiftySeven58 = (fiftyFive: number, mainString: string[], birth: string) => {
  return getSum(fiftyFive + largeCircleValue8(mainString, birth));
};

export const fiftyEighteen59 = (fiftySeven58: number, mainString: string[], birth: string) => {
  return getSum(fiftySeven58 + largeCircleValue8(mainString, birth));
};

export const fiftyNine60 = (fiftyEighteen59: number, mainString: string[], birth: string) => {
  return getSum(fiftyEighteen59 + largeCircleValue8(mainString, birth));
};

export const fiftySix57 = (fiftyFive: number, fiftySeven58: number) => {
  return getSum(fiftyFive + fiftySeven58);
};

/*****************************************/

export const sixtyFive = (mainString: string[], birth: string) => {
  return getSum(largeCircleValue8(mainString, birth) + largeCircleValue6(mainString, birth));
};

export const sixtyTwo63 = (sixtyFive: number, mainString: string[], birth: string) => {
  return getSum(sixtyFive + largeCircleValue8(mainString, birth));
};

export const sixtyTree64 = (sixtyTwo63: number, sixtyFive: number) => {
  return getSum(sixtyTwo63 + sixtyFive);
};

export const sixtyFour65 = (sixtyTree64: number, sixtyFive: number) => {
  return getSum(sixtyTree64 + sixtyFive);
};

export const sixtyOne62 = (sixtyTwo63: number, mainString: string[], birth: string) => {
  return getSum(sixtyTwo63 + largeCircleValue8(mainString, birth));
};

export const sixty61 = (mainString: string[], birth: string) => {
  return getSum(largeCircleValue8(mainString, birth));
};

export const sixtySeven68 = (sixtyFive: number, mainString: string[], birth: string) => {
  return getSum(sixtyFive + largeCircleValue6(mainString, birth));
};

export const sixtyEighteen69 = (sixtySeven68: number, mainString: string[], birth: string) => {
  return getSum(sixtySeven68 + largeCircleValue6(mainString, birth));
};

export const sixtyNine70 = (sixtyEighteen69: number, mainString: string[], birth: string) => {
  return getSum(sixtyEighteen69 + largeCircleValue6(mainString, birth));
};

export const sixtySix67 = (sixtyFive: number, sixtySeven68: number) => {
  return getSum(sixtyFive + sixtySeven68);
};

/*****************************************/

export const seventyFive = (mainString: string[], birth: string) => {
  return getSum(largeCircleValue6(mainString, birth) + largeCircleValue4(mainString, birth));
};

export const seventyTwo73 = (seventyFive: number, mainString: string[], birth: string) => {
  return getSum(seventyFive + largeCircleValue6(mainString, birth));
};

export const seventyTree74 = (seventyTree74: number, seventyFive: number) => {
  return getSum(seventyTree74 + seventyFive);
};

export const seventyFour75 = (sixtyTree64: number, seventyFive: number) => {
  return getSum(sixtyTree64 + seventyFive);
};

export const seventyOne72 = (seventyTwo73: number, mainString: string[], birth: string) => {
  return getSum(seventyTwo73 + largeCircleValue6(mainString, birth));
};

export const seventy71 = (mainString: string[], birth: string) => {
  return getSum(largeCircleValue6(mainString, birth));
};

export const seventySeven78 = (seventyFive: number, mainString: string[], birth: string) => {
  return getSum(seventyFive + largeCircleValue4(mainString, birth));
};

export const seventyEighteen79 = (seventySeven78: number, mainString: string[], birth: string) => {
  return getSum(seventySeven78 + largeCircleValue4(mainString, birth));
};

export const seventyNine80 = (seventyEighteen79: number, mainString: string[], birth: string) => {
  return getSum(seventyEighteen79 + largeCircleValue4(mainString, birth));
};

export const seventySix77 = (seventyFive: number, seventySeven78: number) => {
  return getSum(seventyFive + seventySeven78);
};
