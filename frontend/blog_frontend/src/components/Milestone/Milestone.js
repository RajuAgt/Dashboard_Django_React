import React from "react";
import cssClass from "./Milestone.css";

import { render } from "react-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



class Card extends React.Component {
    render() {
        return (
        <td align="center" colSpan="1">{this.props.value}</td>
        );
    }
}

class Milestone extends React.Component {

  render() {
    var qt_one=["JAN","FEB","MAR"];
    var qt_two=["APR","MAY","JUN"];
    var qt_three=["JUL","AUG","SEP"];
    var qt_four=["OCT","NOV","DEC"];
    var Mon_week=["6","13","20","27"," ","3","10","17","24"," ","2","9","16","23","13","6","13","20","27"," ","4","11","18","25"," ",
    "1","8","15","22","29","6","13","20","27"," ","3","10","17","24","31","7","14","21","28"," ","5","12","19","26"," ","2","9","16","23","30",
    "7","14","21","28"," "];

    const head1 = [];
    for (let i = 0; i < 8; i++) {
    head1.push(Empty);
    }
    var week1=[];
    week1 = head1.map( item => <Card value={ item } /> );
    var NoOfWeeks=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26"];
   const head2 = [];
   for (let i = 0; i < 26; i++) {
   head2.push(Empty);
   }
   var week2=[];
   week2 = head2.map( item => <Card value={ item } /> );

    var Empty="";


    const arr = [];
    for (let i = 0; i < 7; i++) {
    arr.push(Empty);
    }
    var elements=[];
    elements = arr.map( item => <Card value={ item } /> );

    const arr2 = [];
    for (let i = 0; i < 49; i++) {
    arr2.push(Empty);
    }
    var elements2=[];
    elements2 = arr2.map( item => <Card value={ item } /> );

    const arr3 = [];
    for (let i = 0; i < 11; i++) {
    arr3.push(Empty);
    }
    var elements3=[];
    elements3 = arr3.map( item => <Card value={ item } /> );

    const arr4 = [];
    for (let i = 0; i < 46; i++) {
    arr4.push(Empty);
    }
    var elements4=[];
    elements4 = arr4.map( item => <Card value={ item } /> );

    const row3 = [];
    for (let i = 0; i < 14; i++) {
    row3.push(Empty);
    }
    var elements5=[];
    elements5 = row3.map( item => <Card value={ item } /> );

    const row3sb = [];
    for (let i = 0; i < 43; i++) {
    row3sb.push(Empty);
    }
    var elements6=[];
    elements6 = row3sb.map( item => <Card value={ item } /> );

    const row4sb = [];
    for (let i = 0; i < 42; i++) {
    row4sb.push(Empty);
    }
    var elements7=[];
    elements7 = row4sb.map( item => <Card value={ item } /> );

    const row5 = [];
    for (let i = 0; i < 18; i++) {
    row5.push(Empty);
    }
    var elements8=[];
    elements8 = row5.map( item => <Card value={ item } /> );

    const row5sb = [];
    for (let i = 0; i < 38; i++) {
    row5sb.push(Empty);
    }
    var elements9=[];
    elements9 = row5sb.map( item => <Card value={ item } /> );

    const row6 = [];
    for (let i = 0; i < 22; i++) {
    row6.push(Empty);
    }
    var elements10=[];
    elements10 = row6.map( item => <Card value={ item } /> );

    const row6sb = [];
    for (let i = 0; i < 34; i++) {
    row6sb.push(Empty);
    }
    var elements11=[];
    elements11 = row6sb.map( item => <Card value={ item } /> );

    const row7 = [];
    for (let i = 0; i < 27; i++) {
    row7.push(Empty);
    }
    var elements12=[];
    elements12 = row7.map( item => <Card value={ item } /> );

    const row7sb = [];
    for (let i = 0; i < 30; i++) {
    row7sb.push(Empty);
    }
    var elements13=[];
    elements13 = row7sb.map( item => <Card value={ item } /> );

    const row8 = [];
    for (let i = 0; i < 30; i++) {
    row8.push(Empty);
    }
    var elements14=[];
    elements14 = row8.map( item => <Card value={ item } /> );

    const row8sb = [];
    for (let i = 0; i < 27; i++) {
    row8sb.push(Empty);
    }
    var elements15=[];
    elements15 = row8sb.map( item => <Card value={ item } /> );

    const row9 = [];
    for (let i = 0; i < 33; i++) {
    row9.push(Empty);
    }
    var elements16=[];
    elements16 = row9.map( item => <Card value={ item } /> );

    const row9sb = [];
    for (let i = 0; i < 25; i++) {
    row9sb.push(Empty);
    }
    var elements17=[];
    elements17 = row9sb.map( item => <Card value={ item } /> );

    const row10 = [];
    for (let i = 0; i < 36; i++) {
    row10.push(Empty);
    }
    var elements18=[];
    elements18 = row10.map( item => <Card value={ item } /> );

    const row10sb = [];
    for (let i = 0; i < 21; i++) {
    row10sb.push(Empty);
    }
    var elements19=[];
    elements19 = row10sb.map( item => <Card value={ item } /> );

    const row11 = [];
    for (let i = 0; i < 39; i++) {
    row11.push(Empty);
    }
    var elements20=[];
    elements20 = row11.map( item => <Card value={ item } /> );

    const row11sb = [];
    for (let i = 0; i < 18; i++) {
    row11sb.push(Empty);
    }
    var elements21=[];
    elements21 = row11sb.map( item => <Card value={ item } /> );

    const row12 = [];
    for (let i = 0; i < 43; i++) {
    row12.push(Empty);
    }
    var elements22=[];
    elements22 = row12.map( item => <Card value={ item } /> );

    const row12sb = [];
    for (let i = 0; i < 14; i++) {
    row12sb.push(Empty);
    }
    var elements23=[];
    elements23 = row12sb.map( item => <Card value={ item } /> );

    const row13 = [];
    for (let i = 0; i < 46; i++) {
    row13.push(Empty);
    }
    var elements24=[];
    elements24 = row13.map( item => <Card value={ item } /> );

    const row13sb = [];
    for (let i = 0; i < 12; i++) {
    row13sb.push(Empty);
    }
    var elements25=[];
    elements25 = row13sb.map( item => <Card value={ item } /> );



    return (
      <div className={cssClass.OuterWrapper}>
          <Table className={cssClass.Table}>
           <thead>

               <tr>
                <td className={cssClass.main} align="bottom" rowSpan={3} colSpan={5}>The first Monday of each month------>>></td>
                <td className={cssClass.qone} align="center" colSpan="15">Q1</td>
                <td className={cssClass.qtwo} align="center" colSpan="15">Q2</td>
                <td className={cssClass.qone} align="center" colSpan="15">Q3</td>
                <td className={cssClass.qtwo} align="center" colSpan="15">Q4</td>
               </tr>

            <tr>
               {qt_one.map(value => (
              <td className={cssClass.qone} align="center" colSpan="5">{value}</td>
               ))}
               {qt_two.map(value => (
              <td className={cssClass.qtwo} align="center" colSpan="5">{value}</td>
               ))}
               {qt_three.map(value => (
              <td className={cssClass.qone} align="center" colSpan="5">{value}</td>
               ))}
               {qt_four.map(value => (
              <td className={cssClass.qtwo} align="center" colSpan="5">{value}</td>
               ))}
          </tr>

          <tr>
               {Mon_week.map(value => (
              <td className={cssClass.qonesb1} align="center" colSpan="1">{value}</td>
               ))}
          </tr>

              <tr>
                 <td className={cssClass.projweek} align="center" colSpan={5}>Project week</td>
                 {week1}
                 {NoOfWeeks.map(value => (
                <td className={cssClass.projweek} align="center" colSpan="1">{value}</td>
                 ))}
                 {week2}
              </tr>

          </thead>

          <tbody>

              <tr>
                <td  className={cssClass.phases} align="center" rowSpan={3} colSpan={5}>CUT</td>
                {elements}
                <td className={cssClass.com} align="center" colSpan="4">100</td>
                {elements2}
              </tr>

              <tr>
                {elements3}
                <td align="center" className={cssClass.com} colSpan="2">75</td>
                <td align="center" className={cssClass.redd} colSpan="1">25</td>
                {elements4}
             </tr>

             <tr>
                {elements5}
                <td align="center" className={cssClass.amber} colSpan="2">75</td>
                <td align="center" className={cssClass.upcoming} colSpan="1">25</td>
                {elements6}
            </tr>

             <tr>
                <td className={cssClass.projweek} align="center" rowSpan={3} colSpan={5}>System Testing</td>
                {elements5}
                <td align="center" className={cssClass.com} colSpan={3}>75</td>
                <td align="center" className={cssClass.redd} colSpan="1">25</td>
                {elements7}
            </tr>

             <tr>
                {elements8}
                <td align="center" className={cssClass.amber}  colSpan="1">20</td>
                <td align="center" className={cssClass.upcoming} colSpan={3}>80</td>
                {elements9}
           </tr>

            <tr>
                {elements10}
                <td align="center" className={cssClass.upcoming} colSpan={4}>Scenario3</td>
                {elements11}
           </tr>

            <tr>
                <td className={cssClass.phases} align="center" rowSpan={3} colSpan={5}>SIT</td>
                {elements12}
                <td align="center" className={cssClass.upcoming} colSpan={3}>SIT1</td>
                {elements13}
            </tr>

            <tr>
                {elements14}
                <td align="center" className={cssClass.upcoming} colSpan={3}>SIT2</td>
                {elements15}
           </tr>

            <tr>
                {elements16}
                <td align="center" className={cssClass.upcoming} colSpan={2}>SIT3</td>
                {elements17}
            </tr>

            <tr>
                 <td className={cssClass.projweek} align="center" rowSpan={2} colSpan={5}>UAT</td>
                 {elements18}
                 <td align="center" className={cssClass.upcoming} colSpan={3}>UAT1</td>
                 {elements19}
            </tr>

             <tr>
                 {elements20}
                 <td align="center" className={cssClass.upcoming} colSpan={3}>UAT2</td>
                 {elements21}
            </tr>

            <tr>
                  <td className={cssClass.phases} align="center" rowSpan={2} colSpan={5}>PT</td>
                  {elements22}
                  <td align="center" className={cssClass.upcoming} colSpan={3}>PT1</td>
                  {elements23}
            </tr>

            <tr>
                  {elements24}
                  <td align="center" className={cssClass.upcoming} colSpan={2}>PT2</td>
                  {elements25}
           </tr>


        </tbody>
      </Table>


      </div>
    );
  }
}
export default Milestone;
