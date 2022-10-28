import React, { Component } from "react";
import Clock from "../Components/Clock";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "November, 12, 2022" };
  }
  render() {
    return (
      <div className="App py-10 justify-center">
        <div className="lg:w-3/4 h-full pt-7 pl-7 pr-7 pb-7 mx-auto">
          <div className="p-5 mx-auto my-auto">
            <h1 className="text-center font-bold lg:text-2xl text-xl mb-10">
            November 12th, 2022
            </h1>
            <Clock deadline={this.state.deadline} className="mt-10" />
          </div>
        </div>
      </div>
      
    );
  }
}
export default App;