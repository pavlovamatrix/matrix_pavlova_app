import React from 'react';
import './YearsTable.scss';

interface IYearsTableProps {
  getEnergyValue: () => { [key: string]: number };
}

const YearsTable = ({ getEnergyValue }: IYearsTableProps) => {
  return (
    <div className="years-table_container">
      <table className="years-table">
        <tbody>
          <tr className="">
            <th className="th years-period">Рік</th>
            <th className="th energy-value">Енергія</th>
            <th className="th years-period">Рік</th>
            <th className="th energy-value">Енергія</th>
            <th className="th years-period">Рік</th>
            <th className="th energy-value">Енергія</th>
            <th className="th years-period">Рік</th>
            <th className="th energy-value">Енергія</th>
          </tr>
          <tr className="">
            <td className="years-period">0-1</td>
            <td className="energy-value" id="0">
              {getEnergyValue().nullOneValue}
            </td>
            <td className="years-period">20-21</td>
            <td className="energy-value" id="20">
              {getEnergyValue().twenty21Value}
            </td>
            <td className="years-period">40-41</td>
            <td className="energy-value" id="40">
              {getEnergyValue().forty41Value}
            </td>
            <td className="years-period">60-61</td>
            <td className="energy-value" id="60">
              {getEnergyValue().sixty61Value}
            </td>
          </tr>
          <tr className="">
            <td className="years-period">1-2</td>
            <td className="energy-value" id="1">
              {getEnergyValue().oneTwoValue}
            </td>
            <td className="years-period">21-22</td>
            <td className="energy-value" id="21">
              {getEnergyValue().twentyOne22Value}
            </td>
            <td className="years-period">41-42</td>
            <td className="energy-value" id="41">
              {getEnergyValue().fortyOne42Value}
            </td>
            <td className="years-period">61-62</td>
            <td className="energy-value" id="61">
              {getEnergyValue().sixtyOne62Value}
            </td>
          </tr>
          <tr className="">
            <td className="years-period">2-3</td>
            <td className="energy-value" id="2">
              {getEnergyValue().twoTreeValue}
            </td>
            <td className="years-period">22-23</td>
            <td className="energy-value" id="22">
              {getEnergyValue().twentyTwo23Value}
            </td>
            <td className="years-period">42-43</td>
            <td className="energy-value" id="42">
              {getEnergyValue().fortyTwo43Value}
            </td>
            <td className="years-period">62-63</td>
            <td className="energy-value" id="62">
              {getEnergyValue().sixtyTwo63Value}
            </td>
          </tr>
          <tr className="">
            <td className="years-period">3-4</td>
            <td className="energy-value" id="3">
              {getEnergyValue().treeFourValue}
            </td>
            <td className="years-period">23-24</td>
            <td className="energy-value" id="23">
              {getEnergyValue().twentyTree24Value}
            </td>
            <td className="years-period">43-44</td>
            <td className="energy-value" id="43">
              {getEnergyValue().fortyTree44Value}
            </td>
            <td className="years-period">63-64</td>
            <td className="energy-value" id="63">
              {getEnergyValue().sixtyTree64Value}
            </td>
          </tr>
          <tr className="">
            <td className="years-period">4-5</td>
            <td className="energy-value" id="4">
              {getEnergyValue().fourFiveValue}
            </td>
            <td className="years-period">24-25</td>
            <td className="energy-value" id="24">
              {getEnergyValue().twentyFour25Value}
            </td>
            <td className="years-period">44-45</td>
            <td className="energy-value" id="44">
              {getEnergyValue().fortyFour45Value}
            </td>
            <td className="years-period">64-65</td>
            <td className="energy-value" id="64">
              {getEnergyValue().sixtyFour65Value}
            </td>
          </tr>
          <tr className="">
            <td className="years-period">5-6</td>
            <td className="energy-value" id="5">
              {getEnergyValue().fiveSixValue}
            </td>
            <td className="years-period">25-26</td>
            <td className="energy-value" id="25">
              {getEnergyValue().twentyFiveValue}
            </td>
            <td className="years-period">45-46</td>
            <td className="energy-value" id="45">
              {getEnergyValue().fortyFiveValue}
            </td>
            <td className="years-period">65-66</td>
            <td className="energy-value" id="65">
              {getEnergyValue().sixtyFiveValue}
            </td>
          </tr>
          <tr className="">
            <td className="years-period">6-7</td>
            <td className="energy-value" id="6">
              {getEnergyValue().sixSevenValue}
            </td>
            <td className="years-period">26-27</td>
            <td className="energy-value" id="26">
              {getEnergyValue().twentySix27Value}
            </td>
            <td className="years-period">46-47</td>
            <td className="energy-value" id="46">
              {getEnergyValue().fortySix47Value}
            </td>
            <td className="years-period">66-67</td>
            <td className="energy-value" id="66">
              {getEnergyValue().sixtySix67Value}
            </td>
          </tr>
          <tr className="">
            <td className="years-period">7-8</td>
            <td className="energy-value" id="7">
              {getEnergyValue().sevenEightValue}
            </td>
            <td className="years-period">27-28</td>
            <td className="energy-value" id="27">
              {getEnergyValue().twentySeven28Value}
            </td>
            <td className="years-period">47-48</td>
            <td className="energy-value" id="47">
              {getEnergyValue().fortySeven48Value}
            </td>
            <td className="years-period">67-68</td>
            <td className="energy-value" id="67">
              {getEnergyValue().sixtySeven68Value}
            </td>
          </tr>
          <tr className="">
            <td className="years-period">8-9</td>
            <td className="energy-value" id="8">
              {getEnergyValue().eightNineValue}
            </td>
            <td className="years-period">28-29</td>
            <td className="energy-value" id="28">
              {getEnergyValue().twentyEighteen29Value}
            </td>
            <td className="years-period">48-49</td>
            <td className="energy-value" id="48">
              {getEnergyValue().fortyEighteen49Value}
            </td>
            <td className="years-period">68-69</td>
            <td className="energy-value" id="68">
              {getEnergyValue().sixtyEighteen69Value}
            </td>
          </tr>
          <tr className="">
            <td className="years-period">9-10</td>
            <td className="energy-value" id="9">
              {getEnergyValue().nineTenValue}
            </td>
            <td className="years-period">29-30</td>
            <td className="energy-value" id="29">
              {getEnergyValue().twentyNine30Value}
            </td>
            <td className="years-period">49-50</td>
            <td className="energy-value" id="49">
              {getEnergyValue().fortyNine50Value}
            </td>
            <td className="years-period">69-70</td>
            <td className="energy-value" id="69">
              {getEnergyValue().sixtyNine70Value}
            </td>
          </tr>
          <tr className="">
            <td className="years-period">10-11</td>
            <td className="energy-value" id="10">
              {getEnergyValue().tenElevenValue}
            </td>
            <td className="years-period">30-31</td>
            <td className="energy-value" id="30">
              {getEnergyValue().thirty31Value}
            </td>
            <td className="years-period">50-51</td>
            <td className="energy-value" id="50">
              {getEnergyValue().fifty51Value}
            </td>
            <td className="years-period">70-71</td>
            <td className="energy-value" id="70">
              {getEnergyValue().seventy71Value}
            </td>
          </tr>
          <tr className="">
            <td className="years-period">11-12</td>
            <td className="energy-value" id="11">
              {getEnergyValue().elevenTwelveValue}
            </td>
            <td className="years-period">31-32</td>
            <td className="energy-value" id="31">
              {getEnergyValue().thirtyOne32Value}
            </td>
            <td className="years-period">51-52</td>
            <td className="energy-value" id="51">
              {getEnergyValue().fiftyOne52Value}
            </td>
            <td className="years-period">71-72</td>
            <td className="energy-value" id="71">
              {getEnergyValue().seventyOne72Value}
            </td>
          </tr>
          <tr className="">
            <td className="years-period">12-13</td>
            <td className="energy-value" id="12">
              {getEnergyValue().twelveThirteenValue}
            </td>
            <td className="years-period">32-33</td>
            <td className="energy-value" id="32">
              {getEnergyValue().thirtyTwo33Value}
            </td>
            <td className="years-period">52-53</td>
            <td className="energy-value" id="52">
              {getEnergyValue().fiftyTwo53Value}
            </td>
            <td className="years-period">72-73</td>
            <td className="energy-value" id="72">
              {getEnergyValue().seventyTwo73Value}
            </td>
          </tr>
          <tr className="">
            <td className="years-period">13-14</td>
            <td className="energy-value" id="13">
              {getEnergyValue().thirteenFourteenValue}
            </td>
            <td className="years-period">33-34</td>
            <td className="energy-value" id="33">
              {getEnergyValue().thirtyTree34Value}
            </td>
            <td className="years-period">53-54</td>
            <td className="energy-value" id="53">
              {getEnergyValue().fiftyTree54Value}
            </td>
            <td className="years-period">73-74</td>
            <td className="energy-value" id="73">
              {getEnergyValue().seventyTree74Value}
            </td>
          </tr>
          <tr className="">
            <td className="years-period">14-15</td>
            <td className="energy-value" id="14">
              {getEnergyValue().fourteenFifteenValue}
            </td>
            <td className="years-period">34-35</td>
            <td className="energy-value" id="34">
              {getEnergyValue().thirtyFour35Value}
            </td>
            <td className="years-period">54-55</td>
            <td className="energy-value" id="54">
              {getEnergyValue().fiftyFour55Value}
            </td>
            <td className="years-period">74-75</td>
            <td className="energy-value" id="74">
              {getEnergyValue().seventyFour75Value}
            </td>
          </tr>
          <tr className="">
            <td className="years-period">15-16</td>
            <td className="energy-value" id="15">
              {getEnergyValue().fifteenSixteenValue}
            </td>
            <td className="years-period">35-36</td>
            <td className="energy-value" id="35">
              {getEnergyValue().thirtyFiveValue}
            </td>
            <td className="years-period">55-56</td>
            <td className="energy-value" id="55">
              {getEnergyValue().fiftyFiveValue}
            </td>
            <td className="years-period">75-76</td>
            <td className="energy-value" id="75">
              {getEnergyValue().seventyFiveValue}
            </td>
          </tr>
          <tr className="">
            <td className="years-period">16-17</td>
            <td className="energy-value" id="16">
              {getEnergyValue().sixteenSeventeenValue}
            </td>
            <td className="years-period">36-37</td>
            <td className="energy-value" id="36">
              {getEnergyValue().thirtySix37Value}
            </td>
            <td className="years-period">56-57</td>
            <td className="energy-value" id="56">
              {getEnergyValue().fiftySix57Value}
            </td>
            <td className="years-period">76-77</td>
            <td className="energy-value" id="76">
              {getEnergyValue().seventySix77Value}
            </td>
          </tr>
          <tr className="">
            <td className="years-period">17-18</td>
            <td className="energy-value" id="17">
              {getEnergyValue().seventeenEighteenValue}
            </td>
            <td className="years-period">37-38</td>
            <td className="energy-value" id="37">
              {getEnergyValue().thirtySeven38Value}
            </td>
            <td className="years-period">57-58</td>
            <td className="energy-value" id="57">
              {getEnergyValue().fiftySeven58Value}
            </td>
            <td className="years-period">77-78</td>
            <td className="energy-value" id="77">
              {getEnergyValue().seventySeven78Value}
            </td>
          </tr>
          <tr className="">
            <td className="years-period">18-19</td>
            <td className="energy-value" id="18">
              {getEnergyValue().eighteenNineteenValue}
            </td>
            <td className="years-period">38-39</td>
            <td className="energy-value" id="38">
              {getEnergyValue().thirtyEighteen39Value}
            </td>
            <td className="years-period">58-59</td>
            <td className="energy-value" id="58">
              {getEnergyValue().fiftyEighteen59Value}
            </td>
            <td className="years-period">78-79</td>
            <td className="energy-value" id="78">
              {getEnergyValue().seventyEighteen79Value}
            </td>
          </tr>
          <tr className="">
            <td className="years-period">19-20</td>
            <td className="energy-value" id="19">
              {getEnergyValue().nineteenTwentyValue}
            </td>
            <td className="years-period">39-40</td>
            <td className="energy-value" id="39">
              {getEnergyValue().thirtyNine40Value}
            </td>
            <td className="years-period">59-60</td>
            <td className="energy-value" id="59">
              {getEnergyValue().fiftyNine60Value}
            </td>
            <td className="years-period">79-80</td>
            <td className="energy-value" id="79">
              {getEnergyValue().seventyNine80Value}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default YearsTable;
