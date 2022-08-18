import React from "react";
import Card from 'react-bootstrap/Card';
import "../CSS/beast.css";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked: 0};
  }
  add = () =>{
    this.setState({clicked: this.state.clicked + 1});
    this.props.handler(this.props.title, this.props.imageURL, this.props.description,);
  };

 

  render(){
    return (
      <Card className="myBeasts">
        <Card.Title>{this.props.title} 💛{this.state.clicked}</Card.Title>
        <Card.Img onClick={this.add}  src={this.props.imageURL} title= {this.props.title} alt= {this.props.description} />
        <Card.Text>{this.props.description}</Card.Text>
      </Card>
    );
  }
};

export default HornedBeast;