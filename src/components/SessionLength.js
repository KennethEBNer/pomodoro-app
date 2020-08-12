import React from 'react';

function SessionLength(props) {

  function decreaseCounter() {
    if (props.sessionLength === 1) {
      return;
    }
    props.decreaseSession();
  }

  function increaseCounter() {
    if (props.sessionLength === 60) {
      return;
    }
    props.increaseSession();
  }

  return (
    <section>
      <h4 class="timer-labels" id="session-label">Arbeid Lengde</h4>
      <section className="interval-container">
        <button
          id="session-increment"
          onClick={increaseCounter}
          disabled={props.isPlay === true ? "disabled" : ""}><i class="fas fa-arrow-up"></i>
        </button>
        <p id="session-length" className="interval-length">{props.sessionLength}</p>
        <button
          id="session-decrement"
          onClick={decreaseCounter}
          disabled={props.isPlay === true ? "disabled" : ""}><i class="fas fa-arrow-down"></i>
        </button>
      </section>
    </section>
  );
}

export default SessionLength;