import React from 'react';
import './MarixMain.scss';
import RedArrow from '../../assets/1.png';
import BlueArrow from '../../assets/2.png';
import Heart from '../../assets/heart1.png';
import Dollar from '../../assets/dollar1.png';
import SmallArrow from '../../assets/arrowSmall.svg';

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
  mediumCircleK27,
} from '../../functions/calculator';
import { useAppSelector } from '../../hooks/redux';
import { IUserData, IUsersDataCompatibility } from '../../types';
import { Purposes } from '../Purposes/Purposes';

interface IMatrixCompatibilityProps {
  mainString: string[];
  mainString2: string[];
  userData: IUserData;
  getCirclesValue: (mainString: string[], birth: string) => { [key: string]: number };
  getEnergyValue: (mainString: string[], birth: string) => { [key: string]: number };
}

export const MatrixCompatibility = ({
  mainString,
  mainString2,
  userData,
  getCirclesValue,
  getEnergyValue,
}: IMatrixCompatibilityProps) => {
  const { userDataPersonal } = useAppSelector((state) => state.storeReducer);

  return (
    <div className="matrix_wrapper matrix-compatibility">
      <h2>{userData.name}</h2>
      <div className="circle circle_large" id="large-center">
        <div className="circle circle_large_inside" id="large-center_inside">
          {/*{largeCircleValueCenter(mainString, userData.birth)}*/}
          {getCirclesValue(mainString, userData.birth).circleLargeCenter}
        </div>
      </div>
      <div className="circle circle_large" id="large-1">
        <div className="circle circle_large_inside" id="large-1_inside">
          {/*{largeCircleValue1(mainString, userData.birth)}*/}
          {getCirclesValue(mainString, userData.birth).circleLarge1}
        </div>
      </div>
      <div className="circle circle_large circle_large_not-inside" id="large-2">
        {/*{largeCircleValue2(mainString, userData.birth)}*/}
        {getCirclesValue(mainString, userData.birth).circleLarge2}
      </div>
      <div className="circle circle_large circle_large_not-inside" id="large-3">
        {/*{largeCircleValue3(mainString, userData.birth)}*/}
        {getCirclesValue(mainString, userData.birth).circleLarge3}
      </div>
      <div className="circle circle_large" id="large-4">
        <div className="circle circle_large_inside" id="large-4_inside">
          {/*{largeCircleValue4(mainString, userData.birth)}*/}
          {getCirclesValue(mainString, userData.birth).circleLarge4}
        </div>
      </div>
      <div className="circle circle_large" id="large-5">
        <div className="circle circle_large_inside" id="large-5_inside">
          {/*{largeCircleValue5(mainString, userData.birth)}*/}
          {getCirclesValue(mainString, userData.birth).circleLarge5}
        </div>
      </div>
      <div className="circle circle_large circle_large_not-inside" id="large-6">
        {/*{largeCircleValue6(mainString, userData.birth)}*/}
        {getCirclesValue(mainString, userData.birth).circleLarge6}
      </div>
      <div className="circle circle_large circle_large_not-inside" id="large-7">
        {/*{largeCircleValue7(mainString, userData.birth)}*/}
        {getCirclesValue(mainString, userData.birth).circleLarge7}
      </div>
      <div className="circle circle_large" id="large-8">
        <div className="circle circle_large_inside" id="large-8_inside">
          {/*{largeCircleValue8(mainString, userData.birth)}*/}
          {getCirclesValue(mainString, userData.birth).circleLarge8}
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

      <hr id="hr_rotate-1" />
      <hr id="hr_rotate-2" />
      <p className="line" id="men-line">
        Лінія чоловічого роду
      </p>
      <p className="line" id="women-line">
        Лінія жіночого роду
      </p>

      <img className="heart" id="heart" src={Heart} alt="" />
      <img className="dollar" id="dollar" src={Dollar} alt="" />

      <div className="circle circle_medium" id="medium-1">
        <div className="circle circle_medium_inside" id="medium-1_inside">
          {getCirclesValue(mainString, userData.birth).mediumCircle1}
        </div>
      </div>
      <div className="circle circle_medium circle_medium_not-inside" id="medium-2">
        {getCirclesValue(mainString, userData.birth).mediumCircle2}
      </div>
      <div className="circle circle_medium circle_medium_not-inside" id="medium-3">
        {getCirclesValue(mainString, userData.birth).mediumCircle3}
      </div>
      <div className="circle circle_medium" id="medium-4">
        <div className="circle circle_medium_inside" id="medium-4_inside">
          {getCirclesValue(mainString, userData.birth).mediumCircle4}
        </div>
      </div>
      <div className="circle circle_medium circle_medium_not-inside" id="medium-5">
        {getCirclesValue(mainString, userData.birth).mediumCircle5}
      </div>
      <div className="circle circle_medium circle_medium_not-inside" id="medium-6">
        {getCirclesValue(mainString, userData.birth).mediumCircle6}
      </div>
      <div className="circle circle_medium circle_medium_not-inside" id="medium-7">
        {getCirclesValue(mainString, userData.birth).mediumCircle7}
      </div>
      <div className="circle circle_medium circle_medium_not-inside" id="medium-8">
        {getCirclesValue(mainString, userData.birth).mediumCircle8}
      </div>

      <div className="circle circle_small circle_small_not-inside" id="small-1">
        <div className="circle circle_small_inside" id="small-1_inside">
          {getCirclesValue(mainString, userData.birth).smallCircle1}
        </div>
      </div>
      <div className="circle circle_small circle_small_not-inside" id="small-2">
        {getCirclesValue(mainString, userData.birth).smallCircle2}
      </div>
      <div className="circle circle_small circle_small_not-inside" id="small-3">
        {getCirclesValue(mainString, userData.birth).smallCircle3}
      </div>
      <div className="circle circle_small" id="small-4">
        <div className="circle circle_small_inside" id="small-4_inside">
          {getCirclesValue(mainString, userData.birth).smallCircle4}
        </div>
      </div>
      <div className="circle circle_small" id="small-5">
        <div className="circle circle_small_inside" id="small-5_inside">
          {getCirclesValue(mainString, userData.birth).smallCircle5}
        </div>
      </div>
      <div className="circle circle_small" id="small-6">
        <div className="circle circle_small_inside" id="small-6_inside">
          {getCirclesValue(mainString, userData.birth).smallCircle6}
        </div>
      </div>
      <div className="circle circle_small" id="small-7">
        <div className="circle circle_small_inside" id="small-7_inside">
          {getCirclesValue(mainString, userData.birth).smallCircle7}
        </div>
      </div>
      <div className="circle circle_small circle_small_not-inside" id="small-8">
        {getCirclesValue(mainString, userData.birth).smallCircle8}
      </div>
      <div className="circle circle_small circle_small_not-inside" id="small-9">
        {getCirclesValue(mainString, userData.birth).smallCircle9}
      </div>
      <div className="circle circle_small circle_small_not-inside" id="small-10">
        {getCirclesValue(mainString, userData.birth).smallCircle10}
      </div>
      <div className="circle circle_small circle_small_not-inside" id="small-11">
        {getCirclesValue(mainString, userData.birth).smallCircle11}
      </div>
      <div className="circle circle_small circle_small_not-inside" id="small-12">
        {getCirclesValue(mainString, userData.birth).smallCircle12}
      </div>
      <div className="circle circle_small" id="small-13">
        <div className="circle circle_small_inside" id="small-13_inside">
          {getCirclesValue(mainString, userData.birth).smallCircle13}
        </div>
      </div>

      <div className="circle circle_small circle_small_not-inside" id="small-14">
        {getCirclesValue(mainString, userData.birth).smallCircle14}
      </div>
      <div className="circle circle_small circle_small_not-inside" id="small-15">
        {getSum(
          largeCircleValueCenter(mainString, userData.birth) +
            getSum(
              largeCircleValue2(mainString, userData.birth) +
                largeCircleValue3(mainString, userData.birth) +
                largeCircleValue6(mainString, userData.birth) +
                largeCircleValue7(mainString, userData.birth)
            )
        )}
      </div>

      {/*<p id="comfort-zone">ЗОНА КОМФОРТУ</p>*/}

      {/*<div className="circle circle_xs" id="xs-1"></div>*/}
      {/*<div className="circle circle_xs" id="xs-2"></div>*/}
      {/*<div className="circle circle_xs" id="xs-3"></div>*/}
      {/*<div className="circle circle_xs" id="xs-4"></div>*/}
      {/*<div className="circle circle_xs" id="xs-5"></div>*/}
      {/*<div className="circle circle_xs" id="xs-6"></div>*/}
      {/*<div className="circle circle_xs" id="xs-7"></div>*/}
      {/*<div className="circle circle_xs" id="xs-8"></div>*/}
      {/*<div className="circle circle_xs" id="xs-9"></div>*/}
      {/*<div className="circle circle_xs" id="xs-10"></div>*/}
      {/*<div className="circle circle_xs" id="xs-11"></div>*/}
      {/*<div className="circle circle_xs" id="xs-12"></div>*/}
      {/*<div className="circle circle_xs" id="xs-13"></div>*/}
      {/*<div className="circle circle_xs" id="xs-14">*/}
      {/*  ЗК*/}
      {/*</div>*/}

      {/*<div className="small-arrow arrow-right" id="arrow-1">*/}
      {/*  <p className="years years_right">20 років</p>*/}
      {/*  <img className="small-arrow small-arr-img" src={SmallArrow} alt="" />*/}
      {/*</div>*/}
      {/*<div className="small-arrow arrow-right" id="arrow-2">*/}
      {/*  <p className="years years_right">30 років</p>*/}
      {/*  <img className="small-arrow small-arr-img" src={SmallArrow} alt="" />*/}
      {/*</div>*/}
      {/*<div className="small-arrow arrow-right" id="arrow-3">*/}
      {/*  <p className="years years_right">40 років</p>*/}
      {/*  <img className="small-arrow small-arr-img" src={SmallArrow} alt="" />*/}
      {/*</div>*/}
      {/*<div className="small-arrow arrow-right" id="arrow-4">*/}
      {/*  <p className="years years_right">50 років</p>*/}
      {/*  <img className="small-arrow small-arr-img" src={SmallArrow} alt="" />*/}
      {/*</div>*/}
      {/*<div className="small-arrow arrow-left" id="arrow-5">*/}
      {/*  <p className="years years_left">10 років</p>*/}
      {/*  <img className="small-arrow small-arr-img" src={SmallArrow} alt="" />*/}
      {/*</div>*/}
      {/*<div className="small-arrow arrow-left" id="arrow-6">*/}
      {/*  <p className="years years_left">0 років</p>*/}
      {/*  <img className="small-arrow small-arr-img" src={SmallArrow} alt="" />*/}
      {/*</div>*/}
      {/*<div className="small-arrow arrow-left" id="arrow-7">*/}
      {/*  <p className="years years_left">70 років</p>*/}
      {/*  <img className="small-arrow small-arr-img" src={SmallArrow} alt="" />*/}
      {/*</div>*/}
      {/*<div className="small-arrow arrow-left" id="arrow-8">*/}
      {/*  <p className="years years_left">60 років</p>*/}
      {/*  <img className="small-arrow small-arr-img" src={SmallArrow} alt="" />*/}
      {/*</div>*/}
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
      <hr id="hr_dashed" />

      {/*<div className="dot" id="dot-1">*/}
      {/*  <div className="years-period">1-2</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).oneTwoValue}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-2">*/}
      {/*  <div className="years-period">2-3</div>*/}
      {/*  <div className="energy-value" id="2">*/}
      {/*    {getEnergyValue(mainString, userData.birth).twoTreeValue}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-3">*/}
      {/*  <div className="years-period">3-4</div>*/}
      {/*  <div className="energy-value" id="3">*/}
      {/*    {getEnergyValue(mainString, userData.birth).treeFourValue}*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="dot" id="dot-4">*/}
      {/*  <div className="dot_inside">*/}
      {/*    <div className="years-period">5 років</div>*/}
      {/*    <div className="energy-value energy-value_center" id="5">*/}
      {/*      {getEnergyValue(mainString, userData.birth).fiveSixValue}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-5">*/}
      {/*  <div className="years-period">6-7</div>*/}
      {/*  <div className="energy-value" id="6">*/}
      {/*    {getEnergyValue(mainString, userData.birth).sixSevenValue}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-6">*/}
      {/*  <div className="years-period">7-8</div>*/}
      {/*  <div className="energy-value" id="7">*/}
      {/*    {getEnergyValue(mainString, userData.birth).sevenEightValue}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-7">*/}
      {/*  <div className="years-period">8-9</div>*/}
      {/*  <div className="energy-value" id="7">*/}
      {/*    {getEnergyValue(mainString, userData.birth).eightNineValue}*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="dot" id="dot-8">*/}
      {/*  <div className="years-period">11-12</div>*/}
      {/*  <div className="energy-value" id="9">*/}
      {/*    {getEnergyValue(mainString, userData.birth).elevenTwelveValue}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-9">*/}
      {/*  <div className="years-period">12-13</div>*/}
      {/*  <div className="energy-value" id="10">*/}
      {/*    {getEnergyValue(mainString, userData.birth).twelveThirteenValue}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-10">*/}
      {/*  <div className="years-period">13-14</div>*/}
      {/*  <div className="energy-value" id="11">*/}
      {/*    {getEnergyValue(mainString, userData.birth).thirteenFourteenValue}*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="dot" id="dot-11">*/}
      {/*  <div className="dot_inside">*/}
      {/*    <div className="years-period">15 років</div>*/}
      {/*    <div className="energy-value energy-value_center" id="12">*/}
      {/*      {getEnergyValue(mainString, userData.birth).fifteenSixteenValue}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-12">*/}
      {/*  <div className="years-period">16-17</div>*/}
      {/*  <div className="energy-value" id="13">*/}
      {/*    {getEnergyValue(mainString, userData.birth).sixteenSeventeenValue}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-13">*/}
      {/*  <div className="years-period">17-18</div>*/}
      {/*  <div className="energy-value" id="14">*/}
      {/*    {getEnergyValue(mainString, userData.birth).seventeenEighteenValue}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-14">*/}
      {/*  <div className="years-period">18-19</div>*/}
      {/*  <div className="energy-value" id="15">*/}
      {/*    {getEnergyValue(mainString, userData.birth).eighteenNineteenValue}*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="dot" id="dot-15">*/}
      {/*  <div className="years-period">21-22</div>*/}
      {/*  <div className="energy-value" id="17">*/}
      {/*    {getEnergyValue(mainString, userData.birth).twentyOne22Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-16">*/}
      {/*  <div className="years-period">22-23</div>*/}
      {/*  <div className="energy-value" id="18">*/}
      {/*    {getEnergyValue(mainString, userData.birth).twentyTwo23Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-17">*/}
      {/*  <div className="years-period">23-24</div>*/}
      {/*  <div className="energy-value" id="19">*/}
      {/*    {getEnergyValue(mainString, userData.birth).twentyTree24Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-18">*/}
      {/*  <div className="dot_inside">*/}
      {/*    <div className="years-period">25 років</div>*/}
      {/*    <div className="energy-value energy-value_center" id="1">*/}
      {/*      {getEnergyValue(mainString, userData.birth).twentyFiveValue}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-19">*/}
      {/*  <div className="years-period">26-27</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).twentySix27Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-20">*/}
      {/*  <div className="years-period">27-28</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).twentySeven28Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-21">*/}
      {/*  <div className="years-period">28-29</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).twentyEighteen29Value}*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="dot" id="dot-22">*/}
      {/*  <div className="years-period">31-32</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).thirtyOne32Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-23">*/}
      {/*  <div className="years-period">32-33</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).thirtyTwo33Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-24">*/}
      {/*  <div className="years-period">33-34</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).thirtyTree34Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-25">*/}
      {/*  <div className="dot_inside">*/}
      {/*    <div className="years-period">35 років</div>*/}
      {/*    <div className="energy-value energy-value_center" id="1">*/}
      {/*      {getEnergyValue(mainString, userData.birth).thirtyFiveValue}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-26">*/}
      {/*  <div className="years-period">36-37</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).thirtySix37Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-27">*/}
      {/*  <div className="years-period">37-38</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).thirtySeven38Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-28">*/}
      {/*  <div className="years-period">38-39</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).thirtyEighteen39Value}*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="dot" id="dot-29">*/}
      {/*  <div className="years-period">41-42</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).fortyOne42Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-30">*/}
      {/*  <div className="years-period">42-43</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).fortyTwo43Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-31">*/}
      {/*  <div className="years-period">43-44</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).fortyTree44Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-32">*/}
      {/*  <div className="dot_inside">*/}
      {/*    <div className="years-period">45 років</div>*/}
      {/*    <div className="energy-value energy-value_center" id="1">*/}
      {/*      {getEnergyValue(mainString, userData.birth).fortyFiveValue}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-33">*/}
      {/*  <div className="years-period">46-47</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).fortySix47Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-34">*/}
      {/*  <div className="years-period">47-48</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).fortySeven48Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-35">*/}
      {/*  <div className="years-period">48-49</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).fortyEighteen49Value}*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="dot" id="dot-36">*/}
      {/*  <div className="years-period">51-52</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).fiftyOne52Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-37">*/}
      {/*  <div className="years-period">52-53</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).fiftyTwo53Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-38">*/}
      {/*  <div className="years-period">53-54</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).fiftyTree54Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-39">*/}
      {/*  <div className="dot_inside">*/}
      {/*    <div className="years-period">55 років</div>*/}
      {/*    <div className="energy-value energy-value_center" id="1">*/}
      {/*      {getEnergyValue(mainString, userData.birth).fiftyFiveValue}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-40">*/}
      {/*  <div className="years-period">56-57</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).fiftySix57Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-41">*/}
      {/*  <div className="years-period">57-58</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).fiftySeven58Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-42">*/}
      {/*  <div className="years-period">58-59</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).fiftyEighteen59Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-43">*/}
      {/*  <div className="years-period">61-62</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).sixtyOne62Value}*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="dot" id="dot-44">*/}
      {/*  <div className="years-period">62-63</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).sixtyTwo63Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-45">*/}
      {/*  <div className="years-period">63-64</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).sixtyTree64Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-46">*/}
      {/*  <div className="dot_inside">*/}
      {/*    <div className="years-period">65 років</div>*/}
      {/*    <div className="energy-value energy-value_center" id="1">*/}
      {/*      {getEnergyValue(mainString, userData.birth).sixtyFiveValue}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-47">*/}
      {/*  <div className="years-period">66-67</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).sixtySix67Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-48">*/}
      {/*  <div className="years-period">67-68</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).sixtySeven68Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-49">*/}
      {/*  <div className="years-period">68-69</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).sixtyEighteen69Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-50">*/}
      {/*  <div className="years-period">71-72</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).seventyOne72Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-51">*/}
      {/*  <div className="years-period">72-73</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).seventyTwo73Value}*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="dot" id="dot-52">*/}
      {/*  <div className="years-period">73-74</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).seventyTree74Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-53">*/}
      {/*  <div className="dot_inside">*/}
      {/*    <div className="years-period">75 років</div>*/}
      {/*    <div className="energy-value energy-value_center" id="1">*/}
      {/*      {getEnergyValue(mainString, userData.birth).seventyFiveValue}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-54">*/}
      {/*  <div className="years-period">76-77</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).seventySix77Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-55">*/}
      {/*  <div className="years-period">77-78</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).seventySeven78Value}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="dot" id="dot-56">*/}
      {/*  <div className="years-period">78-79</div>*/}
      {/*  <div className="energy-value" id="1">*/}
      {/*    {getEnergyValue(mainString, userData.birth).seventyEighteen79Value}*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*******************************************/}
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
                      getCirclesValue(mainString, userData.birth).circleLarge1 +
                        getCirclesValue(mainString, userData.birth).circleLarge8
                    )}
                  </div>
                </div>
                <div className="content_row">
                  Земля:
                  <div className="circle_purpose">
                    {getSum(
                      getCirclesValue(mainString, userData.birth).circleLarge4 +
                        getCirclesValue(mainString, userData.birth).circleLarge5
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
                    getCirclesValue(mainString, userData.birth).circleLarge1 +
                      getCirclesValue(mainString, userData.birth).circleLarge8
                  ) +
                    getSum(
                      getCirclesValue(mainString, userData.birth).circleLarge4 +
                        getCirclesValue(mainString, userData.birth).circleLarge5
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
                        getCirclesValue(mainString, userData.birth).circleLarge2 +
                          getCirclesValue(mainString, userData.birth).circleLarge7
                      )
                    )}
                  </div>
                </div>
                <div className="content_row word">
                  <span className="word">Ж:</span>
                  <div className="circle_purpose">
                    {getSum(
                      getSum(
                        getCirclesValue(mainString, userData.birth).circleLarge3 +
                          getCirclesValue(mainString, userData.birth).circleLarge6
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
                      getCirclesValue(mainString, userData.birth).circleLarge2 +
                        getCirclesValue(mainString, userData.birth).circleLarge7
                    )
                  ) +
                    getSum(
                      getSum(
                        getCirclesValue(mainString, userData.birth).circleLarge3 +
                          getCirclesValue(mainString, userData.birth).circleLarge6
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
                          getCirclesValue(mainString, userData.birth).circleLarge1 +
                            getCirclesValue(mainString, userData.birth).circleLarge8
                        ) +
                          getSum(
                            getCirclesValue(mainString, userData.birth).circleLarge4 +
                              getCirclesValue(mainString, userData.birth).circleLarge5
                          )
                      )
                    ) +
                      getSum(
                        getSum(
                          getSum(
                            getCirclesValue(mainString, userData.birth).circleLarge2 +
                              getCirclesValue(mainString, userData.birth).circleLarge7
                          )
                        ) +
                          getSum(
                            getSum(
                              getCirclesValue(mainString, userData.birth).circleLarge3 +
                                getCirclesValue(mainString, userData.birth).circleLarge6
                            )
                          )
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<div className="matrix-appointment">*/}
      {/*  <h3>КАРТА ЖИТТЯ</h3>*/}
      {/*  <div className="life-map_wrapper">*/}
      {/*    <div className="life-map_items">*/}
      {/*      <div className="life-map_item">*/}
      {/*        <div className="life-map_item-circle">*/}
      {/*          {getSum(*/}
      {/*            getCirclesValue(mainString, userData.birth).circleLarge1 +*/}
      {/*              getCirclesValue(mainString, userData.birth).circleLarge8*/}
      {/*          )}*/}
      {/*        </div>*/}
      {/*        <div className="life-map_item-title">Небесне призначення</div>*/}
      {/*      </div>*/}
      {/*      <div className="life-map_item">*/}
      {/*        <div className="life-map_item-circle">*/}
      {/*          {getSum(*/}
      {/*            getCirclesValue(mainString, userData.birth).circleLarge4 +*/}
      {/*              getCirclesValue(mainString, userData.birth).circleLarge5*/}
      {/*          )}*/}
      {/*        </div>*/}
      {/*        <div className="life-map_item-title">Земне призначення</div>*/}
      {/*      </div>*/}
      {/*      <div className="life-map_item">*/}
      {/*        <div className="life-map_item-circle circle-bg">*/}
      {/*          {getSum(*/}
      {/*            getSum(*/}
      {/*              getCirclesValue(mainString, userData.birth).circleLarge1 +*/}
      {/*                getCirclesValue(mainString, userData.birth).circleLarge8*/}
      {/*            ) +*/}
      {/*              getSum(*/}
      {/*                getCirclesValue(mainString, userData.birth).circleLarge4 +*/}
      {/*                  getCirclesValue(mainString, userData.birth).circleLarge5*/}
      {/*              )*/}
      {/*          )}*/}
      {/*        </div>*/}
      {/*        <div className="life-map_item-title">Особисте призначення</div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="life-map_items">*/}
      {/*      <div className="life-map_item">*/}
      {/*        <div className="life-map_item-circle">*/}
      {/*          {getSum(*/}
      {/*            getSum(*/}
      {/*              getCirclesValue(mainString, userData.birth).circleLarge2 +*/}
      {/*                getCirclesValue(mainString, userData.birth).circleLarge7*/}
      {/*            )*/}
      {/*          )}*/}
      {/*        </div>*/}
      {/*        <div className="life-map_item-title">Чоловіче призначення</div>*/}
      {/*      </div>*/}
      {/*      <div className="life-map_item">*/}
      {/*        <div className="life-map_item-circle">*/}
      {/*          {getSum(*/}
      {/*            getSum(*/}
      {/*              getCirclesValue(mainString, userData.birth).circleLarge3 +*/}
      {/*                getCirclesValue(mainString, userData.birth).circleLarge6*/}
      {/*            )*/}
      {/*          )}*/}
      {/*        </div>*/}
      {/*        <div className="life-map_item-title">Жіноче призначення</div>*/}
      {/*      </div>*/}
      {/*      <div className="life-map_item">*/}
      {/*        <div className="life-map_item-circle circle-bg">*/}
      {/*          {getSum(*/}
      {/*            getSum(*/}
      {/*              getSum(*/}
      {/*                getCirclesValue(mainString, userData.birth).circleLarge2 +*/}
      {/*                  getCirclesValue(mainString, userData.birth).circleLarge7*/}
      {/*              )*/}
      {/*            ) +*/}
      {/*              getSum(*/}
      {/*                getSum(*/}
      {/*                  getCirclesValue(mainString, userData.birth).circleLarge3 +*/}
      {/*                    getCirclesValue(mainString, userData.birth).circleLarge6*/}
      {/*                )*/}
      {/*              )*/}
      {/*          )}*/}
      {/*        </div>*/}
      {/*        <div className="life-map_item-title">Соціальне призначення</div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="life-map_items">*/}
      {/*      <div className="life-map_item">*/}
      {/*        <div className="life-map_item-circle">*/}
      {/*          {getSum(*/}
      {/*            getSum(*/}
      {/*              getSum(*/}
      {/*                getCirclesValue(mainString, userData.birth).circleLarge1 +*/}
      {/*                  getCirclesValue(mainString, userData.birth).circleLarge8*/}
      {/*              ) +*/}
      {/*                getSum(*/}
      {/*                  getCirclesValue(mainString, userData.birth).circleLarge4 +*/}
      {/*                    getCirclesValue(mainString, userData.birth).circleLarge5*/}
      {/*                )*/}
      {/*            )*/}
      {/*          )}*/}
      {/*        </div>*/}
      {/*        <div className="life-map_item-title">Особисте призначення</div>*/}
      {/*      </div>*/}
      {/*      <div className="life-map_item">*/}
      {/*        <div className="life-map_item-circle">*/}
      {/*          {getSum(*/}
      {/*            getSum(*/}
      {/*              getSum(*/}
      {/*                getCirclesValue(mainString, userData.birth).circleLarge2 +*/}
      {/*                  getCirclesValue(mainString, userData.birth).circleLarge7*/}
      {/*              )*/}
      {/*            ) +*/}
      {/*              getSum(*/}
      {/*                getSum(*/}
      {/*                  getCirclesValue(mainString, userData.birth).circleLarge3 +*/}
      {/*                    getCirclesValue(mainString, userData.birth).circleLarge6*/}
      {/*                )*/}
      {/*              )*/}
      {/*          )}*/}
      {/*        </div>*/}
      {/*        <div className="life-map_item-title">Соціальне призначення</div>*/}
      {/*      </div>*/}
      {/*      <div className="life-map_item">*/}
      {/*        <div className="life-map_item-circle circle-bg">*/}
      {/*          {getSum(*/}
      {/*            getSum(*/}
      {/*              getSum(*/}
      {/*                getSum(*/}
      {/*                  getCirclesValue(mainString, userData.birth).circleLarge1 +*/}
      {/*                    getCirclesValue(mainString, userData.birth).circleLarge8*/}
      {/*                ) +*/}
      {/*                  getSum(*/}
      {/*                    getCirclesValue(mainString, userData.birth).circleLarge4 +*/}
      {/*                      getCirclesValue(mainString, userData.birth).circleLarge5*/}
      {/*                  )*/}
      {/*              )*/}
      {/*            ) +*/}
      {/*              getSum(*/}
      {/*                getSum(*/}
      {/*                  getSum(*/}
      {/*                    getCirclesValue(mainString, userData.birth).circleLarge2 +*/}
      {/*                      getCirclesValue(mainString, userData.birth).circleLarge7*/}
      {/*                  )*/}
      {/*                ) +*/}
      {/*                  getSum(*/}
      {/*                    getSum(*/}
      {/*                      getCirclesValue(mainString, userData.birth).circleLarge3 +*/}
      {/*                        getCirclesValue(mainString, userData.birth).circleLarge6*/}
      {/*                    )*/}
      {/*                  )*/}
      {/*              )*/}
      {/*          )}*/}
      {/*        </div>*/}
      {/*        <div className="life-map_item-title">Духовне призначення</div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
