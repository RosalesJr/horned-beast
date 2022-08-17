import React from "react";
import HornedBeast from './HornedBeast';
import Beasts from './data.json'

class Main extends React.Component{
  render(){
    return(
      <main>
        <div>
          { Beasts.map((value) => {
            return <HornedBeast title = {value.title} imageURL = {value.image_url} description = {value.description} />;
          })
          }
        </div>
      </main>
    );
  };
};

export default Main;