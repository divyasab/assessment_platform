import "./filter_sidebar.css"
const Filter_sidebar=()=>{
    return(
        <>
            <div className="siderbar-content">
                <div className="small-text">Filters</div>
                    <div className="inside-function">
                        <div className="fillter-items">
                            <div>Question Score</div>
                            <div className="fillter-values">
                                <div className="fillter-score">All</div>
                                <div className="fillter-score1">10</div>
                                <div className="fillter-score1">15</div>
                                <div className="fillter-score2">20</div>
                            </div>
                            <div className="">Questions Attempted</div>
                            <div className="question-count">
                                <div className="question-attempt">
                                    <div className="question-text">All (40) </div>
                                </div>
                                <div className="question-attempt1">
                                    <div className="question-text1">Attempted (3)</div>
                                </div>
                                <div className="question-unattempt">
                                    <div className="question-text2">Unattempted (37)</div>
                                </div>
                            </div>    

                        </div>
                    </div>
            </div>
               
            
        </>

    )
}
export default Filter_sidebar;
