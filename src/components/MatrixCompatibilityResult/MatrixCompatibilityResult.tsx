import React from 'react';
import '../MatrixCompatibility/MarixMain.scss';
import Heart from '../../assets/heart1.png';
import Dollar from '../../assets/dollar1.png';

import { useAppSelector } from '../../hooks/redux';
import { IUserData, IUsersDataCompatibility } from '../../types';
import { getSum } from '../../functions/calculator';
import { AppointmentCompatibility } from '../AppointmentCompatibility/AppointmentCompatibility';

interface IMatrixCompatibilityProps {
  mainString1: string[];
  mainString2: string[];
  userData1: IUserData;
  userData2: IUserData;

  getCirclesValue: (mainString: string[], birth: string) => { [key: string]: number };
}

export const MatrixCompatibilityResult = ({
  mainString1,
  mainString2,
  userData1,
  userData2,
  getCirclesValue,
}: IMatrixCompatibilityProps) => {
  const { userDataPersonal, usersDataCompatibility } = useAppSelector(
    (state) => state.storeReducer
  );

  return (
    <div className="matrix_wrapper matrix-compatibility" id="matrix-result">
      <h3 id="h3_life-map">Cумісність пари</h3>
      <div className="circle circle_large" id="large-center">
        <div className="circle circle_large_inside" id="large-center_inside">
          {getSum(
            getCirclesValue(mainString1, userData1.birth).circleLargeCenter +
              getCirclesValue(mainString2, userData2.birth).circleLargeCenter
          )}
        </div>
      </div>
      <div className="circle circle_large" id="large-1">
        <div className="circle circle_large_inside" id="large-1_inside">
          {getSum(
            getCirclesValue(mainString1, userData1.birth).circleLarge1 +
              getCirclesValue(mainString2, userData2.birth).circleLarge1
          )}
        </div>
      </div>
      <div className="circle circle_large circle_large_not-inside" id="large-2">
        {getSum(
          getCirclesValue(mainString1, userData1.birth).circleLarge2 +
            getCirclesValue(mainString2, userData2.birth).circleLarge2
        )}
      </div>
      <div className="circle circle_large circle_large_not-inside" id="large-3">
        {getSum(
          getCirclesValue(mainString1, userData1.birth).circleLarge3 +
            getCirclesValue(mainString2, userData2.birth).circleLarge3
        )}
      </div>
      <div className="circle circle_large" id="large-4">
        <div className="circle circle_large_inside" id="large-4_inside">
          {getSum(
            getCirclesValue(mainString1, userData1.birth).circleLarge4 +
              getCirclesValue(mainString2, userData2.birth).circleLarge4
          )}
        </div>
      </div>
      <div className="circle circle_large" id="large-5">
        <div className="circle circle_large_inside" id="large-5_inside">
          {getSum(
            getCirclesValue(mainString1, userData1.birth).circleLarge5 +
              getCirclesValue(mainString2, userData2.birth).circleLarge5
          )}
        </div>
      </div>
      <div className="circle circle_large circle_large_not-inside" id="large-6">
        {getSum(
          getCirclesValue(mainString1, userData1.birth).circleLarge6 +
            getCirclesValue(mainString2, userData2.birth).circleLarge6
        )}
      </div>
      <div className="circle circle_large circle_large_not-inside" id="large-7">
        {getSum(
          getCirclesValue(mainString1, userData1.birth).circleLarge7 +
            getCirclesValue(mainString2, userData2.birth).circleLarge7
        )}
      </div>
      <div className="circle circle_large" id="large-8">
        <div className="circle circle_large_inside" id="large-8_inside">
          {getSum(
            getCirclesValue(mainString1, userData1.birth).circleLarge8 +
              getCirclesValue(mainString2, userData2.birth).circleLarge8
          )}
        </div>
      </div>
      {/*/!*<div className="circle circle_large" id="large_center-circle"></div>*!/*/}
      <div className="square" id="square-1"></div>
      <div className="square" id="square-2"></div>

      <hr id="hr_top-left" />
      <hr id="hr_top-right" />
      <hr id="hr_top-left-2" />
      <hr id="hr_top-right-2" />
      <hr id="hr_bot-left-2" />
      <hr id="hr_bot-right-2" />
      <hr id="hr_bot-left" />
      <hr id="hr_bot-right" />
      <hr id="hr_center-vertical" />
      <hr id="hr_center-horizontal" />
      <hr id="hr_dashed-result" />

      <hr id="hr_rotate-1" />
      <hr id="hr_rotate-2" />
      {/*<img className="arrow" id="arrow-bot-red" src={RedArrow} alt="" />*/}
      {/*<img className="arrow" id="arrow-top-red" src={RedArrow} alt="" />*/}
      {/*<img className="arrow" id="arrow-bot-blue" src={BlueArrow} alt="" />*/}
      {/*<img className="arrow" id="arrow-top-blue" src={BlueArrow} alt="" />*/}
      <p className="line" id="men-line">
        Лінія чоловічого роду
      </p>
      <p className="line" id="women-line">
        Лінія жіночого роду
      </p>
      {/*<p className="line" id="sky-line">*/}
      {/*  Лінія Неба*/}
      {/*</p>*/}
      {/*<p className="line" id="earth-line">*/}
      {/*  Лінія Землі*/}
      {/*</p>*/}

      <img className="heart" id="heart" src={Heart} alt="" />
      <img className="dollar" id="dollar" src={Dollar} alt="" />

      <div className="circle circle_medium" id="medium-1">
        <div className="circle circle_medium_inside" id="medium-1_inside">
          {getSum(
            getSum(
              getSum(
                getCirclesValue(mainString1, userData1.birth).circleLargeCenter +
                  getCirclesValue(mainString2, userData2.birth).circleLargeCenter
              ) +
                getSum(
                  getCirclesValue(mainString1, userData1.birth).circleLarge1 +
                    getCirclesValue(mainString2, userData2.birth).circleLarge1
                )
            ) +
              getSum(
                getCirclesValue(mainString1, userData1.birth).circleLarge1 +
                  getCirclesValue(mainString2, userData2.birth).circleLarge1
              )
          )}
        </div>
      </div>
      {/*<div className="circle circle_medium" id="medium-2">*/}
      {/*  {getSum(*/}
      {/*    getCirclesValue(mainString1, userData1.birth).mediumCircle2 +*/}
      {/*      getCirclesValue(mainString2, userData2.birth).mediumCircle2*/}
      {/*  )}{' '}*/}
      {/*</div>*/}
      {/*<div className="circle circle_medium" id="medium-3">*/}
      {/*  {getSum(*/}
      {/*    getCirclesValue(mainString1, userData1.birth).mediumCircle3 +*/}
      {/*      getCirclesValue(mainString2, userData2.birth).mediumCircle3*/}
      {/*  )}{' '}*/}
      {/*</div>*/}
      <div className="circle circle_medium" id="medium-4">
        <div className="circle circle_medium_inside" id="medium-4_inside">
          {getSum(
            getSum(
              getSum(
                getCirclesValue(mainString1, userData1.birth).circleLargeCenter +
                  getCirclesValue(mainString2, userData2.birth).circleLargeCenter
              ) +
                getSum(
                  getCirclesValue(mainString1, userData1.birth).circleLarge4 +
                    getCirclesValue(mainString2, userData2.birth).circleLarge4
                )
            ) +
              getSum(
                getCirclesValue(mainString1, userData1.birth).circleLarge4 +
                  getCirclesValue(mainString2, userData2.birth).circleLarge4
              )
          )}{' '}
        </div>
      </div>
      <div className="circle circle_medium circle_medium_not-inside" id="medium-5">
        {getSum(
          getCirclesValue(mainString1, userData1.birth).mediumCircle5 +
            getCirclesValue(mainString2, userData2.birth).mediumCircle5
        )}{' '}
      </div>
      {/*<div className="circle circle_medium" id="medium-6">*/}
      {/*  {getSum(*/}
      {/*    getCirclesValue(mainString1, userData1.birth).mediumCircle6 +*/}
      {/*      getCirclesValue(mainString2, userData2.birth).mediumCircle6*/}
      {/*  )}{' '}*/}
      {/*</div>*/}
      {/*<div className="circle circle_medium" id="medium-7">*/}
      {/*  {getSum(*/}
      {/*    getCirclesValue(mainString1, userData1.birth).mediumCircle7 +*/}
      {/*      getCirclesValue(mainString2, userData2.birth).mediumCircle7*/}
      {/*  )}{' '}*/}
      {/*</div>*/}
      <div className="circle circle_medium circle_medium_not-inside" id="medium-8">
        {getSum(
          getSum(
            getSum(
              getCirclesValue(mainString1, userData1.birth).circleLargeCenter +
                getCirclesValue(mainString1, userData1.birth).circleLarge8
            ) +
              getSum(
                getCirclesValue(mainString2, userData2.birth).circleLargeCenter +
                  getCirclesValue(mainString2, userData2.birth).circleLarge8
              )
          ) +
            getSum(
              getCirclesValue(mainString1, userData1.birth).circleLarge8 +
                getCirclesValue(mainString2, userData2.birth).circleLarge8
            )
        )}
      </div>

      <div className="circle circle_small" id="small-1">
        <div className="circle circle_small_inside" id="small-1_inside">
          {getSum(
            getSum(
              getCirclesValue(mainString1, userData1.birth).circleLargeCenter +
                getCirclesValue(mainString2, userData2.birth).circleLargeCenter
            ) +
              getSum(
                getCirclesValue(mainString1, userData1.birth).circleLarge1 +
                  getCirclesValue(mainString2, userData2.birth).circleLarge1
              )
          )}
        </div>
      </div>
      {/*<div className="circle circle_small" id="small-2">*/}
      {/*  {getSum(*/}
      {/*    getCirclesValue(mainString1, userData1.birth).smallCircle2 +*/}
      {/*      getCirclesValue(mainString2, userData2.birth).smallCircle2*/}
      {/*  )}{' '}*/}
      {/*</div>*/}
      {/*<div className="circle circle_small" id="small-3">*/}
      {/*  {getSum(*/}
      {/*    getCirclesValue(mainString1, userData1.birth).smallCircle3 +*/}
      {/*      getCirclesValue(mainString2, userData2.birth).smallCircle3*/}
      {/*  )}{' '}*/}
      {/*</div>*/}
      <div className="circle circle_small" id="small-4">
        <div className="circle circle_small_inside" id="small-4_inside">
          {getSum(
            getCirclesValue(mainString1, userData1.birth).smallCircle4 +
              getCirclesValue(mainString2, userData2.birth).smallCircle4
          )}{' '}
        </div>
      </div>
      <div className="circle circle_small" id="small-5">
        <div className="circle circle_small_inside" id="small-5_inside">
          {getSum(
            getSum(
              getCirclesValue(mainString1, userData1.birth).circleLargeCenter +
                getCirclesValue(mainString2, userData2.birth).circleLargeCenter
            ) +
              getSum(
                getCirclesValue(mainString1, userData1.birth).circleLarge4 +
                  getCirclesValue(mainString2, userData2.birth).circleLarge4
              )
          )}{' '}
        </div>
      </div>
      <div className="circle circle_small" id="small-6">
        <div className="circle circle_small_inside" id="small-6_inside">
          {getSum(
            getCirclesValue(mainString1, userData1.birth).smallCircle6 +
              getCirclesValue(mainString2, userData2.birth).smallCircle6
          )}{' '}
        </div>
      </div>
      <div className="circle circle_small" id="small-7">
        <div className="circle circle_small_inside" id="small-7_inside">
          {getSum(
            getSum(
              getCirclesValue(mainString1, userData1.birth).circleLargeCenter +
                getCirclesValue(mainString2, userData2.birth).circleLargeCenter
            ) +
              getSum(
                getCirclesValue(mainString1, userData1.birth).circleLarge5 +
                  getCirclesValue(mainString2, userData2.birth).circleLarge5
              )
          )}{' '}
        </div>
      </div>
      {/*<div className="circle circle_small" id="small-8">*/}
      {/*  {getSum(*/}
      {/*    getCirclesValue(mainString1, userData1.birth).smallCircle8 +*/}
      {/*      getCirclesValue(mainString2, userData2.birth).smallCircle8*/}
      {/*  )}{' '}*/}
      {/*</div>*/}
      <div className="circle circle_small circle_small_not-inside" id="small-9">
        {getSum(
          getSum(
            getSum(
              getCirclesValue(mainString1, userData1.birth).circleLargeCenter +
                getCirclesValue(mainString1, userData1.birth).circleLarge8
            ) +
              getSum(
                getCirclesValue(mainString2, userData2.birth).circleLargeCenter +
                  getCirclesValue(mainString2, userData2.birth).circleLarge8
              )
          ) +
            getSum(
              getSum(
                getSum(
                  getCirclesValue(mainString1, userData1.birth).circleLargeCenter +
                    getCirclesValue(mainString2, userData2.birth).circleLargeCenter
                ) +
                  getSum(
                    getCirclesValue(mainString1, userData1.birth).circleLarge5 +
                      getCirclesValue(mainString2, userData2.birth).circleLarge5
                  )
              ) +
                getSum(
                  getSum(
                    getCirclesValue(mainString1, userData1.birth).circleLargeCenter +
                      getCirclesValue(mainString1, userData1.birth).circleLarge8
                  ) +
                    getSum(
                      getCirclesValue(mainString2, userData2.birth).circleLargeCenter +
                        getCirclesValue(mainString2, userData2.birth).circleLarge8
                    )
                )
            )
        )}{' '}
      </div>
      {/*<div className="circle circle_small" id="small-10">*/}
      {/*  {getSum(*/}
      {/*    getCirclesValue(mainString1, userData1.birth).smallCircle10 +*/}
      {/*      getCirclesValue(mainString2, userData2.birth).smallCircle10*/}
      {/*  )}{' '}*/}
      {/*</div>*/}
      <div className="circle circle_small circle_small_not-inside" id="small-11">
        {getSum(
          getSum(
            getSum(
              getCirclesValue(mainString1, userData1.birth).circleLargeCenter +
                getCirclesValue(mainString2, userData2.birth).circleLargeCenter
            ) +
              getSum(
                getCirclesValue(mainString1, userData1.birth).circleLarge5 +
                  getCirclesValue(mainString2, userData2.birth).circleLarge5
              )
          ) +
            getSum(
              getSum(
                getCirclesValue(mainString1, userData1.birth).circleLargeCenter +
                  getCirclesValue(mainString1, userData1.birth).circleLarge8
              ) +
                getSum(
                  getCirclesValue(mainString2, userData2.birth).circleLargeCenter +
                    getCirclesValue(mainString2, userData2.birth).circleLarge8
                )
            )
        )}{' '}
      </div>
      <div className="circle circle_small circle_small_not-inside" id="small-12">
        {getSum(
          getSum(
            getSum(
              getCirclesValue(mainString1, userData1.birth).circleLargeCenter +
                getCirclesValue(mainString2, userData2.birth).circleLargeCenter
            ) +
              getSum(
                getCirclesValue(mainString1, userData1.birth).circleLarge5 +
                  getCirclesValue(mainString2, userData2.birth).circleLarge5
              )
          ) +
            getSum(
              getSum(
                getSum(
                  getCirclesValue(mainString1, userData1.birth).circleLargeCenter +
                    getCirclesValue(mainString2, userData2.birth).circleLargeCenter
                ) +
                  getSum(
                    getCirclesValue(mainString1, userData1.birth).circleLarge5 +
                      getCirclesValue(mainString2, userData2.birth).circleLarge5
                  )
              ) +
                getSum(
                  getSum(
                    getCirclesValue(mainString1, userData1.birth).circleLargeCenter +
                      getCirclesValue(mainString1, userData1.birth).circleLarge8
                  ) +
                    getSum(
                      getCirclesValue(mainString2, userData2.birth).circleLargeCenter +
                        getCirclesValue(mainString2, userData2.birth).circleLarge8
                    )
                )
            )
        )}{' '}
      </div>
      <div className="circle circle_small" id="small-13">
        <div className="circle circle_small_inside" id="small-13_inside">
          {getSum(
            getSum(
              getCirclesValue(mainString1, userData1.birth).circleLargeCenter +
                getCirclesValue(mainString1, userData1.birth).circleLarge8
            ) +
              getSum(
                getCirclesValue(mainString2, userData2.birth).circleLargeCenter +
                  getCirclesValue(mainString2, userData2.birth).circleLarge8
              )
          )}
        </div>
      </div>
      {/*<div className="small-arrow arrow-right" id="arrow-1">*/}
      {/*  <p className="years years_right" id="years-20">*/}
      {/*    20 років*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<div className="small-arrow arrow-right" id="arrow-2">*/}
      {/*  <p className="years years_right" id="years-30">*/}
      {/*    30 років*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<div className="small-arrow arrow-right" id="arrow-3">*/}
      {/*  <p className="years years_right" id="years-40">*/}
      {/*    40 років*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<div className="small-arrow arrow-right" id="arrow-4">*/}
      {/*  <p className="years years_right" id="years-50">*/}
      {/*    50 років*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<div className="small-arrow arrow-left" id="arrow-5">*/}
      {/*  <p className="years years_left" id="years-10">*/}
      {/*    10 років*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<div className="small-arrow arrow-left" id="arrow-6">*/}
      {/*  <p className="years years_left" id="years-0">*/}
      {/*    0 років*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<div className="small-arrow arrow-left" id="arrow-7">*/}
      {/*  <p className="years years_left" id="years-70">*/}
      {/*    70 років*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<div className="small-arrow arrow-left" id="arrow-8">*/}
      {/*  <p className="years years_left" id="years-60">*/}
      {/*    60 років*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/**********************************************/}
      {/*<AppointmentCompatibility*/}
      {/*  mainString1={mainString1}*/}
      {/*  mainString2={mainString2}*/}
      {/*  userData1={usersDataCompatibility.user1}*/}
      {/*  userData2={usersDataCompatibility.user2}*/}
      {/*  getCirclesValue={getCirclesValue}*/}
      {/*/>*/}
      {/*<div className="purposes">*/}
      {/*  <h3>Призначення</h3>*/}
      {/*  <div className="purposes_top">*/}
      {/*    <div className="purpose personal">*/}
      {/*      <h3 className="purpose_h3">Особисте</h3>*/}

      {/*      <div className="rect">*/}
      {/*        <div className="content">*/}
      {/*          <div className="content_row">*/}
      {/*            Небо:*/}
      {/*            <div className="circle_purpose">*/}
      {/*              {getSum(*/}
      {/*                getSum(*/}
      {/*                  getCirclesValue(mainString1, userData1.birth).circleLarge1 +*/}
      {/*                    getCirclesValue(mainString2, userData2.birth).circleLarge1*/}
      {/*                ) +*/}
      {/*                  getSum(*/}
      {/*                    getCirclesValue(mainString1, userData1.birth).circleLarge8 +*/}
      {/*                      getCirclesValue(mainString2, userData2.birth).circleLarge8*/}
      {/*                  )*/}
      {/*              )}*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <div className="content_row">*/}
      {/*            Земля:*/}
      {/*            <div className="circle_purpose">*/}
      {/*              {getSum(*/}
      {/*                getSum(*/}
      {/*                  getCirclesValue(mainString1, userData1.birth).circleLarge4 +*/}
      {/*                    getCirclesValue(mainString2, userData2.birth).circleLarge4*/}
      {/*                ) +*/}
      {/*                  getSum(*/}
      {/*                    getCirclesValue(mainString1, userData1.birth).circleLarge5 +*/}
      {/*                      getCirclesValue(mainString2, userData2.birth).circleLarge5*/}
      {/*                  )*/}
      {/*              )}*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        <div className="right-border">*/}
      {/*          <span className="span left-brace-tl"></span>*/}
      {/*          <span className="span left-brace-tr"></span>*/}
      {/*          <br />*/}
      {/*          <span className="span left-brace-bl"></span>*/}
      {/*          <span className="span left-brace-br"></span>*/}
      {/*        </div>*/}
      {/*        <div className="circle_purpose circle_sum">*/}
      {/*          {getSum(*/}
      {/*            getSum(*/}
      {/*              getSum(*/}
      {/*                getCirclesValue(mainString1, userData1.birth).circleLarge1 +*/}
      {/*                  getCirclesValue(mainString2, userData2.birth).circleLarge1*/}
      {/*              ) +*/}
      {/*                getSum(*/}
      {/*                  getCirclesValue(mainString1, userData1.birth).circleLarge8 +*/}
      {/*                    getCirclesValue(mainString2, userData2.birth).circleLarge8*/}
      {/*                )*/}
      {/*            ) +*/}
      {/*              getSum(*/}
      {/*                getSum(*/}
      {/*                  getCirclesValue(mainString1, userData1.birth).circleLarge4 +*/}
      {/*                    getCirclesValue(mainString2, userData2.birth).circleLarge4*/}
      {/*                ) +*/}
      {/*                  getSum(*/}
      {/*                    getCirclesValue(mainString1, userData1.birth).circleLarge5 +*/}
      {/*                      getCirclesValue(mainString2, userData2.birth).circleLarge5*/}
      {/*                  )*/}
      {/*              )*/}
      {/*          )}*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="purpose social">*/}
      {/*      <h3 className="purpose_h3">Соціальне</h3>*/}
      {/*      <div className="rect">*/}
      {/*        <div className="content">*/}
      {/*          <div className="content_row word">*/}
      {/*            <span className="word">Ч:</span>*/}
      {/*            <div className="circle_purpose">*/}
      {/*              {getSum(*/}
      {/*                getSum(*/}
      {/*                  getCirclesValue(mainString1, userData1.birth).circleLarge2 +*/}
      {/*                    getCirclesValue(mainString2, userData2.birth).circleLarge2*/}
      {/*                ) +*/}
      {/*                  getSum(*/}
      {/*                    getCirclesValue(mainString1, userData1.birth).circleLarge7 +*/}
      {/*                      getCirclesValue(mainString2, userData2.birth).circleLarge7*/}
      {/*                  )*/}
      {/*              )}*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <div className="content_row word">*/}
      {/*            <span className="word">Ж:</span>*/}
      {/*            <div className="circle_purpose">*/}
      {/*              {getSum(*/}
      {/*                getSum(*/}
      {/*                  getCirclesValue(mainString1, userData1.birth).circleLarge3 +*/}
      {/*                    getCirclesValue(mainString2, userData2.birth).circleLarge3*/}
      {/*                ) +*/}
      {/*                  getSum(*/}
      {/*                    getCirclesValue(mainString1, userData1.birth).circleLarge6 +*/}
      {/*                      getCirclesValue(mainString2, userData2.birth).circleLarge6*/}
      {/*                  )*/}
      {/*              )}*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        <div className="right-border">*/}
      {/*          <span className="span left-brace-tl"></span>*/}
      {/*          <span className="span left-brace-tr"></span>*/}
      {/*          <br />*/}
      {/*          <span className="span left-brace-bl"></span>*/}
      {/*          <span className="span left-brace-br"></span>*/}
      {/*        </div>*/}
      {/*        <div className="circle_purpose circle_sum">*/}
      {/*          {getSum(*/}
      {/*            getSum(*/}
      {/*              getSum(*/}
      {/*                getCirclesValue(mainString1, userData1.birth).circleLarge2 +*/}
      {/*                  getCirclesValue(mainString2, userData2.birth).circleLarge2*/}
      {/*              ) +*/}
      {/*                getSum(*/}
      {/*                  getCirclesValue(mainString1, userData1.birth).circleLarge7 +*/}
      {/*                    getCirclesValue(mainString2, userData2.birth).circleLarge7*/}
      {/*                )*/}
      {/*            ) +*/}
      {/*              getSum(*/}
      {/*                getSum(*/}
      {/*                  getCirclesValue(mainString1, userData1.birth).circleLarge3 +*/}
      {/*                    getCirclesValue(mainString2, userData2.birth).circleLarge3*/}
      {/*                ) +*/}
      {/*                  getSum(*/}
      {/*                    getCirclesValue(mainString1, userData1.birth).circleLarge6 +*/}
      {/*                      getCirclesValue(mainString2, userData2.birth).circleLarge6*/}
      {/*                  )*/}
      {/*              )*/}
      {/*          )}*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="purpose purpose_bottom">*/}
      {/*    <div className="purpose_general">*/}
      {/*      <h3 className="purpose_h3">Духовне</h3>*/}
      {/*      <div className="">*/}
      {/*        <div className="content circle_solo">*/}
      {/*          <div className="circle">*/}
      {/*            {getSum(*/}
      {/*              getSum(*/}
      {/*                getSum(*/}
      {/*                  getSum(*/}
      {/*                    getCirclesValue(mainString1, userData1.birth).circleLarge2 +*/}
      {/*                      getCirclesValue(mainString2, userData2.birth).circleLarge2*/}
      {/*                  ) +*/}
      {/*                    getSum(*/}
      {/*                      getCirclesValue(mainString1, userData1.birth).circleLarge7 +*/}
      {/*                        getCirclesValue(mainString2, userData2.birth).circleLarge7*/}
      {/*                    )*/}
      {/*                ) +*/}
      {/*                  getSum(*/}
      {/*                    getSum(*/}
      {/*                      getCirclesValue(mainString1, userData1.birth).circleLarge3 +*/}
      {/*                        getCirclesValue(mainString2, userData2.birth).circleLarge3*/}
      {/*                    ) +*/}
      {/*                      getSum(*/}
      {/*                        getCirclesValue(mainString1, userData1.birth).circleLarge6 +*/}
      {/*                          getCirclesValue(mainString2, userData2.birth).circleLarge6*/}
      {/*                      )*/}
      {/*                  )*/}
      {/*              ) +*/}
      {/*                getSum(*/}
      {/*                  getSum(*/}
      {/*                    getSum(*/}
      {/*                      getCirclesValue(mainString1, userData1.birth).circleLarge1 +*/}
      {/*                        getCirclesValue(mainString2, userData2.birth).circleLarge1*/}
      {/*                    ) +*/}
      {/*                      getSum(*/}
      {/*                        getCirclesValue(mainString1, userData1.birth).circleLarge8 +*/}
      {/*                          getCirclesValue(mainString2, userData2.birth).circleLarge8*/}
      {/*                      )*/}
      {/*                  ) +*/}
      {/*                    getSum(*/}
      {/*                      getSum(*/}
      {/*                        getCirclesValue(mainString1, userData1.birth).circleLarge4 +*/}
      {/*                          getCirclesValue(mainString2, userData2.birth).circleLarge4*/}
      {/*                      ) +*/}
      {/*                        getSum(*/}
      {/*                          getCirclesValue(mainString1, userData1.birth).circleLarge5 +*/}
      {/*                            getCirclesValue(mainString2, userData2.birth).circleLarge5*/}
      {/*                        )*/}
      {/*                    )*/}
      {/*                )*/}
      {/*            )}*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
