import React from "react";
import cssClass from "./Phase.css";

import { render } from "react-dom";
import Table from '@material-ui/core/Table';




class Card extends React.Component {
    render() {
        return (
        <td align="center" colSpan="1">{this.props.value}</td>
        );
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
class Jerry extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
     const tomvalue = this.props.tomvalue;
     var Empty="";
     const first = [];
     for (let i = 0; i < tomvalue; i++) {
     first.push(Empty);
   }Empty

        return (
       first.map( item => <Card value={ item } /> )
        );
    }
}

Jerry.defaultProps = {
  tomvalue: 0
};

class Nibble extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
     const next_value = this.props.next_value;
     var Empty="";
     const first = [];
     for (let i = 0; i < next_value; i++) {
     first.push(Empty);
     }

        return (
       first.map( item => <Card value={ item } /> )
        );
    }
}



class Tom extends React.Component {
  constructor(props) {
    super(props);
   this.state = {};
    }


    onRef_value = () => {
    this.setState({ ref_value: this.props.ref_value + 1 });
    this.setState({ p: this.props.data });
  };

  onNext_value = () => {
    this.setState({ next_value: this.props.ref_value });
    this.setState({ flag: 'true' });
  };

    render() {
//     const tomvalue = this.props.tomvalue;
console.log("Inside Tom");
     const tomsdate=this.props.start_date;
     const data = this.props.value;
     const flag = this.props.flag;
     const next_value = this.props.next_value;
     var ref_value = this.props.ref_value;

        if(tomsdate>=this.props.p && tomsdate<=data){
        this.onNext_value();
        }
        else{
        this.onRef_value();
        }

      if(flag==='true'){
        return   <Nibble next_value={this.props.next_value}/>;
      }
      return <Nibble next_value={this.props.next_value}/>;
  //     <Nibble next_value={0}/>
//       <div></div>
  //    );
//        <Greeting next_value={next_value} ref_value={ref_value}/>
//                <Nibble next_value={0}/>
//            );
    }
}

Tom.defaultProps = {
  next_value: 0,
  ref_value: 0,
  p:0,
  flag:'false'
};


class Emptycompnt extends React.Component {

  renderSwitch(value,sdate){
     switch (value) {
       case 'JAN': return  <Jerry tomvalue="0" />

       case 'FEB': return <Jerry tomvalue="5" />

       case 'MAR': return <Jerry tomvalue="10" />

       case 'APR': return <Jerry tomvalue="15" />

       case 'MAY': return  <Jerry tomvalue="20" />

       case 'JUN': return  <Jerry tomvalue="25" />

       case 'JUL':  return <Jerry tomvalue="30" />

       case 'AUG': return <Jerry tomvalue="35" />

       case 'SEP': return  <Jerry tomvalue="40" />

       case 'OCT': return <Jerry tomvalue="45" />

       case 'NOV': return <Jerry tomvalue="50" />

       case 'DEC': return <Jerry tomvalue="55" />

       default: return 0;
     }
  }

    render() {
      const space = this.props.space;
      var start_values = space.split('-');
      var month_value = start_values[1];
      var start_date = start_values[0];
//      var year_value = start_values[2];
  //    this.renderSwitch(start_values[1],start_values[0]);
        return (
       this.renderSwitch(month_value,start_date)
//       <EmptycompntSub mon_value={this.props.month_value} startdate_value={this.props.start_date}/>
        );
    }
}

class EmptycompntSub extends React.Component {

  rendertwoSwitch(month_value,start_date){

      var Jan = [6,13,20,27,""];
      var Feb = [3,10, 17, 24,""];
      var Mar = [2,9, 16,23,13];
      var Apr = [6, 13, 20, 27,""];
      var May = [4, 11, 18, 25,""];
      var Jun = [1,8, 15,22,29];
      var Jul = [6, 13, 20, 27, ""];
      var Aug = [3, 10, 17,24,31];
      var Sep = [7, 14,21, 28, ""];
      var Oct = [5, 12, 19,  26, ""];
      var Nov = [2, 9, 16, 23, 30];
      var Dec = [6, 13, 20,27,""];

    switch (month_value) {
      case 'JAN': return  Jan.map((item) => <Tom data = {item} tomvalue="0" tomsdate={start_date} />)

      case 'FEB': return  Feb.map((item) => <Tom data = {item} tomvalue="5" tomsdate={start_date}/>)

      case 'MAR': return  Mar.map((item) => <Tom data = {item} tomvalue="10" tomsdate={start_date} />)

      case 'APR': return  Apr.map((item) => <Tom data = {item} tomvalue="15" tomsdate={start_date} />)

      case 'MAY': return  May.map((item) => <Tom data = {item} tomvalue="20" tomsdate={start_date} />)

      case 'JUN': return  Jun.map((item) => <Tom data = {item} tomvalue="25" tomsdate={start_date} />)

      case 'JUL': return  Jul.map((item) => <Tom data = {item} tomvalue="30" tomsdate={start_date} />)

      case 'AUG': return  Aug.map((item) => <Tom data = {item} tomvalue="35" tomsdate={start_date} />)

      case 'SEP': return  Sep.map((item) => <Tom data = {item} tomvalue="40" tomsdate={start_date} />)

      case 'OCT': return  Oct.map((item) => <Tom data = {item} tomvalue="45" tomsdate={start_date} />)

      case 'NOV': return  Nov.map((item) => <Tom data = {item} tomvalue="50" tomsdate={start_date} />)

      case 'DEC': return  Dec.map((item) => <Tom data = {item} tomvalue="55" tomsdate={start_date} />)

      default: return 0;
    }
  }
    render() {
      const space = this.props.space;
      var start_values = space.split('-');
      var month_value = start_values[1];
      var start_date = start_values[0];
//      var year_value = start_values[2];

        return (
        this.rendertwoSwitch(month_value,start_date)
        );
    }
}



class Quote extends React.Component {
    render() {
        return (
        <tr>
         <td  className={cssClass.phases} align="center" colSpan={5}>{this.props.phase}</td>
         <Emptycompnt space={this.props.Start_date} range={this.props.End_date}/>
         <EmptycompntSub space={this.props.Start_date} range={this.props.End_date}/>
        </tr>
        );
    }
}


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Phase extends React.Component {

  render() {
    var qt_one=["JAN","FEB","MAR"];
    var qt_two=["APR","MAY","JUN"];
    var qt_three=["JUL","AUG","SEP"];
    var qt_four=["OCT","NOV","DEC"];
    var Mon_week=["6","13","20","27"," ","3","10","17","24"," ","2","9","16","23","13","6","13","20","27"," ","4","11","18","25"," ",
    "1","8","15","22","29","6","13","20","27"," ","3","10","17","24","31","7","14","21","28"," ","5","12","19","26"," ","2","9","16","23","30",
    "7","14","21","28"," "];
    var Empty="";
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



//---------------------------------------------------------------------------------------------------------------------------------------------------------

const quotes = [
  {phase: 'CUT', Start_date : '20-FEB-2020', End_date : '17-Apr-2020', Green : 50, Red : 10, Amber : 30, Grey :10},
  {phase: 'ST', Start_date : '13-MAR-2020', End_date : '05-Jun-2020', Green : 20, Red : 10, Amber : 10, Grey :60},
  {phase: 'SIT', Start_date : '15-JUN-2020', End_date : '30-Jul-2020', Green : 0, Red : 0, Amber : 0, Grey :100},
  {phase: 'UAT', Start_date : '10-AUG-2020', End_date : '15-Sep-2020', Green : 0, Red : 0, Amber : 0, Grey :100},
  {phase: 'PT', Start_date : '25-SEP-2020', End_date : '20-Oct-2020', Green : 0, Red : 0, Amber : 0, Grey :100}
];


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
          {quotes.map((quote) => {
            return (
              <Quote phase={quote.phase} Start_date={quote.Start_date} End_date={quote.End_date} Green={quote.Green} Red={quote.Red} Grey={quote.Grey} />
            );
          })};


        </tbody>
      </Table>


      </div>
    );


  }
}
export default Phase;
