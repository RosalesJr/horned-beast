import React from "react";
import HornedBeast from '../Components/HornedBeast';
import Beasts from '../Library/data.json'
import Modal from '../Components/SelectedBeast'


class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: false,
      activeShowing: {title: "", imageURL: "", description: ""}
    };
  }
  modalHandleClose = () => {
    this.setState({show: false})
  };
  modalHandleOpen = (title, imageURL, description,) => {
    this.setState({show: true, activeShowing: {title: title, imageURL: imageURL, description: description, }});
  }; 


  
  render(){
    return(
      <main>
        <div>
          { Beasts.map((value) => {
        
            return (<HornedBeast title = {value.title} imageURL = {value.image_url} description = {value.description} key = {value._id} handler = {this.modalHandleOpen} />
        );
          })
          }
        <Modal beast= {this.state.activeShowing} show= {this.state.show} onHide = {this.modalHandleClose}/>
        </div>
      </main>
    );
  }
}

export default Main;