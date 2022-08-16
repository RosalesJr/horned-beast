import React from "react";
import HornedBeast from './HornedBeast';

class Main extends React.Component{
  render(){
    return(
      <main>
        <div>
          <HornedBeast title = 'rhino' imageURL='https://via.placeholder.com/150C/Ohttps://placeholder.com/' description= 'picture of rhino'/>
          <HornedBeast title = 'horn beast' imageURL='https://via.placeholder.com/150C/Ohttps://placeholder.com/' description= 'picture of horned beast'/>
        </div>
      </main>
    );
  };
};

export default Main;