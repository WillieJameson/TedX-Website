import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  render() {
    return (
      <div>
        <div className="grid lg:grid-cols-4 grid-cols-1 -mb-5 lg:-mb-0 mt-10 lg:mt-5 lg:gap-y-0 mx-auto">
          <div className=" shadow-lg mx-20 lg:mx-0 rounded-xl">
            <div className="py-5">
            <div className="Clock-days lg:text-2xl sm:text-lg font-bold text-center pt-4 text-white">{this.leading0(this.state.days)}</div>
            <div className="lg:text-xl sm:text-base font-bold text-center pt-5 text-white">Days</div>
            </div>
          </div>
            <div className="shadow-lg mx-20 lg:mx-0 rounded-xl">
              <div className="py-5">
              <div className="Clock-hours lg:text-2xl sm:text-lg font-bold text-center pt-4 text-white">
                {this.leading0(this.state.hours)}
              </div>
              <div className="lg:text-xl sm:text-base font-bold text-center pt-5 text-white">Hours</div>
            </div>
            </div>
            <div className="shadow-lg mx-20 lg:mx-0 rounded-xl">
                <div className="py-5">
                <div className="Clock-minutes lg:text-2xl sm:text-lg font-bold text-center pt-4 text-white">
                {this.leading0(this.state.minutes)} 
                </div>
                <div className="lg:text-xl sm:text-base font-bold text-center pt-5 text-white">Minutes</div>
            </div>
            </div>
            <div className="shadow-lg mx-20 lg:mx-0 rounded-xl">
              <div className="py-5">
                <div className="Clock-seconds lg:text-2xl sm:text-lg font-bold text-center pt-4 text-white">
                {this.leading0(this.state.seconds)}</div> 
                <div className="lg:text-xl sm:text-base font-bold text-center pt-5 text-white">Seconds</div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}
export default Clock;