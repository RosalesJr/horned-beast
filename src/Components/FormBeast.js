import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class FormBeast extends React.Component{
  render(){
    return(
      <>
      <Form>
           <Form.Select onChange={this.props.changeHandler}>
          <option>all</option>
          <option>many</option>
          <option>1</option>
          <option>4</option>
        </Form.Select>
      </Form>
      </>

);
};
};
export default FormBeast;