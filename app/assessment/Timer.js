import "./timer.css";

const Timer = function(){
    return(
        <>
            <div className="timer">
                <div className="timer-container">
                    <div className="inside-timer">
                        <div className="timer-content">
                            <div className="timer-text0">
                                <div className="timer-number">50</div>
                                <span className="timer-symbol">:</span>
                                <span className="timer-number">20</span>  
                            </div>    
                            <div>
                                <span className="time-text">min</span>
                                <span className="time-text1">Sec</span>
                            </div>    
                        </div>    
                    </div>
                </div>
                <div className="timer-text desktop-only">Remaining Time </div>
            </div>
        </>
    );
};

export default Timer;