import React from 'react';

function BreakInterval(props) {

    function decreaseCounter(){
        if (props.breakInterval === 1){
            return;
        }
        props.decreaseBreak();
    }

    function increaseCounter(){
        if(props.breakInterval === 60){
            return;
        }
        props.increaseBreak();
    }

    return (
        <section>
            <h4 id="break-label">Pause Lengde</h4>
            <section className="interval-container">
                <button 
                    id="break-decrement"
                    disabled={props.isPlay === true ? "disabled" : ""}
                    onClick = {decreaseCounter}><i class="fas fa-arrow-down"></i>
                </button>
                <p id="break-length" className="interval-length">{props.breakInterval}</p>
                <button 
                    id="break-increment"
                    disabled={props.isPlay === true ? "disabled" : ""}
                    onClick = {increaseCounter}><i class="fas fa-arrow-up"></i>
                </button>
            </section>
        </section>
    );
}

export default BreakInterval;