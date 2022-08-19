import React from "react";
import FormBeast from "../Components/FormBeast"
import Beasts from '../Library/data.json'

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      e: Beasts 
    };}
// Tyler Main worked on this code with me
    filterBeast=(e) => {
      let horns = e.target.value
      if(horns == 'all'){
        this.setState({dataArray:Beasts})
      }else if (horns == 'many'){
        let filteredBeast = Beasts.filter(x => x.horns > 3)
        this.setState({dataArray: filteredBeast})
      }else {let parsedHorns = parseInt(horns)
      let filteredBeast = Beasts.filter(x => x.horns === parsedHorns)
    this.setState({dataArray: filteredBeast})
  }
    }
  render(){
    return(
      <header>
        <h1>Horned Beasts</h1>
        <FormBeast changeHandler={this.filterBeast}/>

      </header>
    );
  };
};

export default Header;