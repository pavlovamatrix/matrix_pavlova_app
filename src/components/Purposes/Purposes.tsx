import React, { useEffect, useState } from 'react';
import './Purposes.css';
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
} from '../../functions/calculator';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { storeSlice } from '../../store/reducers/StoreSlice';

interface IYearsTableProps {
  getEnergyValue: () => { [key: string]: number };
}

export const Purposes = ({ getEnergyValue }: IYearsTableProps) => {
  const { mainString, userDataPersonal } = useAppSelector((state) => state.storeReducer);
  const dispatch = useAppDispatch();

  const [firstCircle, setFirstCircle] = useState<string>('');
  const [secondCircle, setSecondCircle] = useState<string>('');
  const [thirdCircle, setThirdCircle] = useState<string>('');

  const personalEnergyArray = Object.values(getEnergyValue());

  function getYearId() {
    const yearIDPlus = parseInt(userDataPersonal.yearsOld) + 40;
    console.log(yearIDPlus);
    if (yearIDPlus > 80) {
      return getSum(personalEnergyArray[yearIDPlus % 80]);
    }
    return getSum(personalEnergyArray[yearIDPlus]);
  }

  useEffect(() => {
    if (parseInt(userDataPersonal.yearsOld) >= 0) {
      setFirstCircle(personalEnergyArray[parseInt(userDataPersonal.yearsOld)].toString());
      setSecondCircle(getYearId().toString());
      setThirdCircle(
        getSum(
          parseInt(secondCircle) +
            parseInt(personalEnergyArray[parseInt(userDataPersonal.yearsOld)].toString())
        ).toString()
      );
    } else {
      setFirstCircle('-');
      setSecondCircle('-');
      setThirdCircle('-');
    }
  }, [secondCircle]);

  return (
    <div className="purposes_container">
      <h3>Призначення</h3>
      <div className="purposes">
        <div className="purposes_top">
          <div className="purpose personal">
            <h3 className="purpose_h3">Особисте</h3>
            <p className="p-with-margin">
              Наші задачі на духовному та матеріальному рівні <br /> (20-40 років)
            </p>
            <div className="rect">
              <div className="content">
                <div className="content_row">
                  Небо:
                  <div className="circle_purpose">
                    {getSum(
                      largeCircleValue1(mainString, userDataPersonal.birth) +
                        largeCircleValue8(mainString, userDataPersonal.birth)
                    )}
                  </div>
                </div>
                <div className="content_row">
                  Земля:
                  <div className="circle_purpose">
                    {getSum(
                      largeCircleValue4(mainString, userDataPersonal.birth) +
                        largeCircleValue5(mainString, userDataPersonal.birth)
                    )}
                  </div>
                </div>
              </div>
              <div className="right-border">
                <span className="span left-brace-tl"></span>
                <span className="span left-brace-tr"></span>
                <br />
                <span className="span left-brace-bl"></span>
                <span className="span left-brace-br"></span>
              </div>
              <div className="circle_purpose circle_sum">
                {getSum(
                  getSum(
                    largeCircleValue1(mainString, userDataPersonal.birth) +
                      largeCircleValue8(mainString, userDataPersonal.birth)
                  ) +
                    getSum(
                      largeCircleValue4(mainString, userDataPersonal.birth) +
                        largeCircleValue5(mainString, userDataPersonal.birth)
                    )
                )}
              </div>
            </div>
          </div>
          <div className="purpose social">
            <h3 className="purpose_h3">Соціальне</h3>
            <p className="p-with-margin">
              Взаємодія з соціумом. Те,
              <br /> яку цінність ми несемо людям <br /> (40-60 років)
            </p>
            <div className="rect">
              <div className="content">
                <div className="content_row word">
                  <span className="word">Ч:</span>
                  <div className="circle_purpose">
                    {getSum(
                      largeCircleValue2(mainString, userDataPersonal.birth) +
                        largeCircleValue7(mainString, userDataPersonal.birth)
                    )}
                  </div>
                </div>
                <div className="content_row word">
                  <span className="word">Ж:</span>
                  <div className="circle_purpose">
                    {getSum(
                      largeCircleValue6(mainString, userDataPersonal.birth) +
                        largeCircleValue3(mainString, userDataPersonal.birth)
                    )}
                  </div>
                </div>
              </div>
              <div className="right-border">
                <span className="span left-brace-tl"></span>
                <span className="span left-brace-tr"></span>
                <br />
                <span className="span left-brace-bl"></span>
                <span className="span left-brace-br"></span>
              </div>
              <div className="circle_purpose circle_sum">
                {getSum(
                  getSum(
                    largeCircleValue2(mainString, userDataPersonal.birth) +
                      largeCircleValue7(mainString, userDataPersonal.birth)
                  ) +
                    getSum(
                      largeCircleValue6(mainString, userDataPersonal.birth) +
                        largeCircleValue3(mainString, userDataPersonal.birth)
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="purpose purpose_bottom">
        <div className="purpose_general">
          <h3 className="purpose_h3">Духовне</h3>
          <p>Духовний залік. Саме на опрацювання цієї енергії нам дається більшість випробувань</p>
          <div className="">
            <div className="content circle_solo">
              <div className="circle">
                {getSum(
                  getSum(
                    getSum(
                      largeCircleValue1(mainString, userDataPersonal.birth) +
                        largeCircleValue8(mainString, userDataPersonal.birth)
                    ) +
                      getSum(
                        largeCircleValue4(mainString, userDataPersonal.birth) +
                          largeCircleValue5(mainString, userDataPersonal.birth)
                      )
                  ) +
                    getSum(
                      getSum(
                        getSum(
                          largeCircleValue2(mainString, userDataPersonal.birth) +
                            largeCircleValue7(mainString, userDataPersonal.birth)
                        ) +
                          getSum(
                            largeCircleValue6(mainString, userDataPersonal.birth) +
                              largeCircleValue3(mainString, userDataPersonal.birth)
                          )
                      )
                    )
                )}
              </div>
            </div>
          </div>
        </div>
        {/*<div className="purpose_planetary">*/}
        {/*  <h3 className="purpose_h3">Планетарне</h3>*/}
        {/*  <p>Наш вклад в людство, те, як ми можемо вплинути на світ.</p>*/}
        {/*  <div className="rect">*/}
        {/*    <div className="content circle_solo">*/}
        {/*      <div className="circle">*/}
        {/*        {getSum(*/}
        {/*          getSum(*/}
        {/*            getSum(*/}
        {/*              largeCircleValue2(mainString, userDataPersonal.birth) +*/}
        {/*                largeCircleValue7(mainString, userDataPersonal.birth)*/}
        {/*            ) +*/}
        {/*              getSum(*/}
        {/*                largeCircleValue6(mainString, userDataPersonal.birth) +*/}
        {/*                  largeCircleValue3(mainString, userDataPersonal.birth)*/}
        {/*              )*/}
        {/*          ) +*/}
        {/*            getSum(*/}
        {/*              getSum(*/}
        {/*                getSum(*/}
        {/*                  largeCircleValue1(mainString, userDataPersonal.birth) +*/}
        {/*                    largeCircleValue8(mainString, userDataPersonal.birth)*/}
        {/*                ) +*/}
        {/*                  getSum(*/}
        {/*                    largeCircleValue4(mainString, userDataPersonal.birth) +*/}
        {/*                      largeCircleValue5(mainString, userDataPersonal.birth)*/}
        {/*                  )*/}
        {/*              ) +*/}
        {/*                getSum(*/}
        {/*                  getSum(*/}
        {/*                    getSum(*/}
        {/*                      largeCircleValue2(mainString, userDataPersonal.birth) +*/}
        {/*                        largeCircleValue7(mainString, userDataPersonal.birth)*/}
        {/*                    ) +*/}
        {/*                      getSum(*/}
        {/*                        largeCircleValue6(mainString, userDataPersonal.birth) +*/}
        {/*                          largeCircleValue3(mainString, userDataPersonal.birth)*/}
        {/*                      )*/}
        {/*                  )*/}
        {/*                )*/}
        {/*            )*/}
        {/*        )}*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      <div className="own_power_code">
        <h3>Ключ розширення</h3>
        <div className="own_power_code-items">
          <div className="own_power_code-item">
            <h4 className="purpose_h4">Зона комфорту</h4>
            <div className="content circle_solo">
              <div className="circle">
                {largeCircleValueCenter(mainString, userDataPersonal.birth)}
              </div>
            </div>
          </div>
          <div className="own_power_code-item">
            <h4 className="purpose_h4">Сила Роду</h4>
            <div className="content circle_solo">
              <div className="circle">
                {getSum(
                  largeCircleValue2(mainString, userDataPersonal.birth) +
                    largeCircleValue3(mainString, userDataPersonal.birth) +
                    largeCircleValue6(mainString, userDataPersonal.birth) +
                    largeCircleValue7(mainString, userDataPersonal.birth)
                )}
              </div>
            </div>
          </div>
          <div className="own_power_code-item">
            <h4 className="purpose_h4">Особистий потенціал</h4>
            <div className="content circle_solo">
              <div className="circle">
                {getSum(
                  getSum(
                    largeCircleValue2(mainString, userDataPersonal.birth) +
                      largeCircleValue3(mainString, userDataPersonal.birth) +
                      largeCircleValue6(mainString, userDataPersonal.birth) +
                      largeCircleValue7(mainString, userDataPersonal.birth)
                  ) + largeCircleValueCenter(mainString, userDataPersonal.birth)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map-of-year">
        <h3>Ключ року</h3>
        <div className="map-of-year_items">
          <div className="content circle_solo">
            <div className="circle">{thirdCircle}</div>
          </div>
          <div className="content circle_solo">
            <div className="circle">{secondCircle}</div>
          </div>
          <div className="content circle_solo">
            <div className="circle">{firstCircle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
