import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Components/Board';
import Winner from './Components/Winner';
import Turn from './Components/Turn';

class App extends Component {
  constructor(){
    super();
    this.state={
    boardvalue:this.getvalues(),
    turnvalue:"X",
    winner:""
    }
  }
getvalues(){
      var values=[];
      for(var i=0;i<100;i++){
        values[i]={
          key:i,
          value:" "
      }
      }
      return values;
}
handleClick(i){
  console.log("clicked"+i);
  if(this.state.boardvalue[i].value==" "&&this.state.winner==""){
    if(this.state.boardvalue[i].value!=this.state.turnvalue)
    {
  this.state.boardvalue[i].value=this.state.turnvalue;
  this.calculateWinner(i);
  this.state.turnvalue=this.state.turnvalue=="X"?"O":"X";
  this.setState(this.state);

//  console.log(this.state.boardvalue);
}
}
}
calculateWinner(pos){
  var flag;
  var cr;
  for(var i=0;i<5;i++){
    flag=true;
    for(var j=0;j<5;j++){
      cr=pos-j+i;
      console.log("CR:",cr,(pos/10));
      if(cr<((Math.floor(pos/10))*10)||cr>((Math.ceil(pos/10))*10)-1){
        flag=false;
        break;
      }
      if(this.state.boardvalue[cr].value!=this.state.turnvalue){
        console.log("-->",this.state.turnvalue,"++>",this.state.boardvalue[cr])
        flag=false;
        break;
      }
    }
    if(flag==true){
      this.state.winner=this.state.turnvalue;
      console.log("Winner Hor:",this.state.turnvalue);
    }
  }


  for(var i=0;i<5;i++){
    flag=true;
    for(var j=0;j<5;j++){
      cr=pos-(j*10)+(i*10);
      console.log("CR:",cr,(pos/10));
      if(cr<0||cr>99){
        flag=false;
        break;
      }
      if(this.state.boardvalue[cr].value!=this.state.turnvalue){
        console.log("-->",this.state.turnvalue,"++>",this.state.boardvalue[cr])
        flag=false;
        break;
      }
    }
    if(flag==true){
      this.state.winner=this.state.turnvalue;
      console.log("Winner Ver:",this.state.turnvalue);
    }
  }

  for(var i=0;i<5;i++){
    flag=true;
    for(var j=0;j<5;j++){
      cr=pos-(j*11)+(i*11);
      if(cr<0||cr>99){
        flag=false;
        break;
      }
      if(this.state.boardvalue[cr].value!=this.state.turnvalue){
        console.log("-->",this.state.turnvalue,"++>",this.state.boardvalue[cr])
        flag=false;
        break;
      }
    }
    if(flag==true){
      this.state.winner=this.state.turnvalue;
      console.log("Winner bt rt:",this.state.turnvalue,"cr= ",cr);
    }
  }

  for(var i=0;i<5;i++){
    flag=true;
    for(var j=0;j<5;j++){
      cr=pos-(j*9)+(i*9);
      if(cr<0||cr>99){
        flag=false;
        break;
      }
      if(this.state.boardvalue[cr].value!=this.state.turnvalue){
        console.log("-->",this.state.turnvalue,"++>",this.state.boardvalue[cr])
        flag=false;
        break;
      }
    }
    if(flag==true){
      this.state.winner=this.state.turnvalue;
      console.log("Winner bt lf:",this.state.turnvalue,"cr= ",cr);
    }
  }

}
  render() {
    return (
      <div className="App">

        <Turn turnvalue={this.state.turnvalue} />
        <Board boardvalue={this.state.boardvalue}  onClick={(i) => this.handleClick(i)}/>
        <Winner win={this.state.winner} />
    {/*    <Projects projects={this.scope.projects}/>
        <p className="App-intro">

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
      </div>
    );
  }
}

export default App;
