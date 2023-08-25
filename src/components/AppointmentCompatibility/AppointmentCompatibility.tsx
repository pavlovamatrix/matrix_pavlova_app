import React from 'react';
import './AppointmentCompatibility.scss';
import { getSum } from '../../functions/calculator';
import { IUserData } from '../../types';

interface IMatrixCompatibilityProps {
  mainString1: string[];
  mainString2: string[];
  userData1: IUserData;
  userData2: IUserData;
  getCirclesValue: (mainString: string[], birth: string) => { [key: string]: number };
  handleGeneratePdf: () => void;
}

export const AppointmentCompatibility = ({
  mainString1,
  mainString2,
  userData1,
  userData2,
  getCirclesValue,
  handleGeneratePdf,
}: IMatrixCompatibilityProps) => {
  return (
    <div className="purposes">
      <h3>Призначення</h3>
      <div className="purposes_top">
        <div className="purpose personal">
          <h3 className="purpose_h3">Особисте</h3>

          <div className="rect">
            <div className="content">
              <div className="content_row">
                Небо:
                <div className="circle_purpose">
                  {getSum(
                    getSum(
                      getCirclesValue(mainString1, userData1.birth).circleLarge1 +
                        getCirclesValue(mainString2, userData2.birth).circleLarge1
                    ) +
                      getSum(
                        getCirclesValue(mainString1, userData1.birth).circleLarge8 +
                          getCirclesValue(mainString2, userData2.birth).circleLarge8
                      )
                  )}
                </div>
              </div>
              <div className="content_row">
                Земля:
                <div className="circle_purpose">
                  {getSum(
                    getSum(
                      getCirclesValue(mainString1, userData1.birth).circleLarge4 +
                        getCirclesValue(mainString2, userData2.birth).circleLarge4
                    ) +
                      getSum(
                        getCirclesValue(mainString1, userData1.birth).circleLarge5 +
                          getCirclesValue(mainString2, userData2.birth).circleLarge5
                      )
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
                  getSum(
                    getCirclesValue(mainString1, userData1.birth).circleLarge1 +
                      getCirclesValue(mainString2, userData2.birth).circleLarge1
                  ) +
                    getSum(
                      getCirclesValue(mainString1, userData1.birth).circleLarge8 +
                        getCirclesValue(mainString2, userData2.birth).circleLarge8
                    )
                ) +
                  getSum(
                    getSum(
                      getCirclesValue(mainString1, userData1.birth).circleLarge4 +
                        getCirclesValue(mainString2, userData2.birth).circleLarge4
                    ) +
                      getSum(
                        getCirclesValue(mainString1, userData1.birth).circleLarge5 +
                          getCirclesValue(mainString2, userData2.birth).circleLarge5
                      )
                  )
              )}
            </div>
          </div>
        </div>
        <div className="purpose social">
          <h3 className="purpose_h3">Соціальне</h3>
          <div className="rect">
            <div className="content">
              <div className="content_row word">
                <span className="word">Ч:</span>
                <div className="circle_purpose">
                  {getSum(
                    getSum(
                      getCirclesValue(mainString1, userData1.birth).circleLarge2 +
                        getCirclesValue(mainString2, userData2.birth).circleLarge2
                    ) +
                      getSum(
                        getCirclesValue(mainString1, userData1.birth).circleLarge7 +
                          getCirclesValue(mainString2, userData2.birth).circleLarge7
                      )
                  )}
                </div>
              </div>
              <div className="content_row word">
                <span className="word">Ж:</span>
                <div className="circle_purpose">
                  {getSum(
                    getSum(
                      getCirclesValue(mainString1, userData1.birth).circleLarge3 +
                        getCirclesValue(mainString2, userData2.birth).circleLarge3
                    ) +
                      getSum(
                        getCirclesValue(mainString1, userData1.birth).circleLarge6 +
                          getCirclesValue(mainString2, userData2.birth).circleLarge6
                      )
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
                  getSum(
                    getCirclesValue(mainString1, userData1.birth).circleLarge2 +
                      getCirclesValue(mainString2, userData2.birth).circleLarge2
                  ) +
                    getSum(
                      getCirclesValue(mainString1, userData1.birth).circleLarge7 +
                        getCirclesValue(mainString2, userData2.birth).circleLarge7
                    )
                ) +
                  getSum(
                    getSum(
                      getCirclesValue(mainString1, userData1.birth).circleLarge3 +
                        getCirclesValue(mainString2, userData2.birth).circleLarge3
                    ) +
                      getSum(
                        getCirclesValue(mainString1, userData1.birth).circleLarge6 +
                          getCirclesValue(mainString2, userData2.birth).circleLarge6
                      )
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="purpose purpose_bottom">
        <div className="purpose_general">
          <h3 className="purpose_h3">Духовне</h3>
          <div className="">
            <div className="content circle_solo">
              <div className="circle">
                {getSum(
                  getSum(
                    getSum(
                      getSum(
                        getCirclesValue(mainString1, userData1.birth).circleLarge2 +
                          getCirclesValue(mainString2, userData2.birth).circleLarge2
                      ) +
                        getSum(
                          getCirclesValue(mainString1, userData1.birth).circleLarge7 +
                            getCirclesValue(mainString2, userData2.birth).circleLarge7
                        )
                    ) +
                      getSum(
                        getSum(
                          getCirclesValue(mainString1, userData1.birth).circleLarge3 +
                            getCirclesValue(mainString2, userData2.birth).circleLarge3
                        ) +
                          getSum(
                            getCirclesValue(mainString1, userData1.birth).circleLarge6 +
                              getCirclesValue(mainString2, userData2.birth).circleLarge6
                          )
                      )
                  ) +
                    getSum(
                      getSum(
                        getSum(
                          getCirclesValue(mainString1, userData1.birth).circleLarge1 +
                            getCirclesValue(mainString2, userData2.birth).circleLarge1
                        ) +
                          getSum(
                            getCirclesValue(mainString1, userData1.birth).circleLarge8 +
                              getCirclesValue(mainString2, userData2.birth).circleLarge8
                          )
                      ) +
                        getSum(
                          getSum(
                            getCirclesValue(mainString1, userData1.birth).circleLarge4 +
                              getCirclesValue(mainString2, userData2.birth).circleLarge4
                          ) +
                            getSum(
                              getCirclesValue(mainString1, userData1.birth).circleLarge5 +
                                getCirclesValue(mainString2, userData2.birth).circleLarge5
                            )
                        )
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table-wrapper">
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pavlova.tarot">
          <button className="btn btn_compatibility-matrix">ЗАМОВИТИ КОНСУЛЬТАЦІЮ</button>
        </a>
        <button className="button btn" style={{ width: 150 }} onClick={handleGeneratePdf}>
          Generate PDF
        </button>
      </div>
    </div>
  );
};
