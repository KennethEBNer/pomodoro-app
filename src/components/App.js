import React from 'react';
import '../App.css';
import BreakInterval from './BreakInterval';
import SessionLength from './SessionLength';
import Timer from './Timer';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isPlay: false
    };

    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
  }

  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1
      }
    });
  }

  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1
      }
    });
  }

  onIncreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.sessionLength + 1
      }
    });
  }

  onDecreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1
      }
    });
  }

  onUpdateTimerMinute() {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1
      }
    });
  }

  onToggleInterval(isSession) {

    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLength
      });
    } else {
      this.setState({
        timerMinute: this.state.breakLength
      });
    }
  }

  onResetTimer() {
    this.setState({
      timerMinute: this.state.sessionLength
    });
  }

  onPlayStopTimer(isPlay) {
    this.setState({
      isPlay: isPlay
    });
  }

  render() {
    return (
      <main>
        <h2>Pomodoro Klokke</h2>
        <p className="text">Pomodoro-teknikken ble utviklet i 1992 av Francesco Cirillo som ville gjøre tiden brukt på studier 
          mer effektiv. Den tradisjonelle pomodoro-teknikken innebærer et intenst fokus
          på en oppgave i perioder på 25 minutter med 5 minutters pauser. Denne appen
          gir deg frihet til å velge egne tidsperioder ut fra hva som passer deg best.</p>
        <section className="both-intervals-container">
          <SessionLength
            isPlay={this.state.isPlay}
            sessionLength={this.state.sessionLength}
            increaseSession={this.onIncreaseSessionLength}
            decreaseSession={this.onDecreaseSessionLength} />
          <BreakInterval
            isPlay={this.state.isPlay}
            breakInterval={this.state.breakLength}
            increaseBreak={this.onIncreaseBreakLength}
            decreaseBreak={this.onDecreaseBreakLength} />
        </section>
        <Timer
          timerMinute={this.state.timerMinute}
          breakLength={this.state.breakLength}
          updateTimerMinute={this.onUpdateTimerMinute}
          toggleInterval={this.onToggleInterval}
          resetTimer={this.onResetTimer}
          playStopTimer={this.onPlayStopTimer} />
      </main>
    );
  }
}

export default App;
