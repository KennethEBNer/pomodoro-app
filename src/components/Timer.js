import React from 'react';

class Timer extends React.Component {
    constructor(){
        super();
        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0
        };
        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }

    play(){
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.playStopTimer(true);
        this.setState({
            intervalId: intervalId
        });
    }

    stop(){
        clearInterval(this.state.intervalId);
        this.props.playStopTimer(false);
    }

    reset(){
        this.stop();
        this.props.resetTimer();
        this.props.playStopTimer(false);
        this.setState({
            timerSecond: 0,
            isSession: true
        });
    }

    playSound () {
      var audio = new Audio(
        'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
      audio.play();
    }

    decreaseTimer(){
        switch (this.state.timerSecond){
            case 0:
                if(this.props.timerMinute === 0){
                // When the timer reaches 00:00
                  this.playSound();
                    if(this.state.isSession){
                        // If a session just ended, set isSession to false
                        this.setState({
                            isSession: false
                        });
                        // Call a function that toggles the isSession state in App
                        this.props.toggleInterval(this.state.isSession);
                    } else {
                        // If a break just ended, set isSession to true
                        this.setState({
                            isSession: true
                        });
                        // Call a function that toggles the isSession state in App
                        this.props.toggleInterval(this.state.isSession);
                    }
                } else {
                // When the seconds on the timer reach 00    
                    this.props.updateTimerMinute();
                    this.setState({
                        timerSecond: 59
                    });
                }
                break;
            default:
                // If neither has reached 00, reduce the seconds by 1 every 1000 ms
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    }
                });
                break;
        }
    }

    render(){
        return (
            <section className="timer-section">
                <section className="timer-container">
                    <h4 id="timer-label">{this.state.isSession === true ? "Arbeid" : "Pause" }</h4>
                    <div id="time-left">
                      <span className="timer">{this.props.timerMinute}</span>
                      <span className="timer">:</span>
                      <span className="timer">
                          {this.state.timerSecond === 0
                              ? "00"
                              : this.state.timerSecond < 10
                              ? "0" + this.state.timerSecond
                              : this.state.timerSecond}
                      </span>
                    </div>
                </section>
                <section className="actions-container">
                    <button id="start" onClick={this.play} className="timer-actions timer-action-play">Start</button>
                    <button id="stop" onClick={this.stop} className="timer-actions timer-action-stop">Stopp</button>
                    <button id="reset" onClick={this.reset} className="timer-actions timer-action-refresh">Oppdater</button>
                </section>
            </section>
        );
    }
}

export default Timer;