import "./timer.css"
const Timer=()=>{
    return(
        <>
            <div className="timer">
                <img src="Device.png" className="timer-image"/>
                <div className="timer-text desktop-only">Remaining Time </div>
            </div>
        </>
    )
}
export default Timer;