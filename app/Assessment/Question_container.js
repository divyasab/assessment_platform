import "./question_container.css"
function Question_container(){
    return(
        <>
            <div className="question-contanier">
                <div className="first-task">
                    <div className="question-number">
                        <div className="task-content">QUESTION 1</div>
                        <div className="task-score">Score +1</div>
                    </div>  
                    <div className="questions">
                        <div className="question-option">
                        </div>
                    </div>
                      
                </div>
                <div className="first-task1">
                    <div className="question-number">
                        <div className="task-content">QUESTION 2</div>
                            {/* <div className="moblie-submit">
                                <a href="SubmitBar">
                                    <button className="submit-button1">Submit</button>
                                </a>
                            </div>     */}
                        <div className="task-score2">Score +1</div>
                    </div>  
                        <div className="questions">
                            <div className="question-option">
                            </div>
                        </div>
                    </div>
                    <div className="first-task1">
                    <div className="question-number">
                            <div className="task-content">QUESTION 3</div>
                            <div className="task-score">Score +1</div>
                        </div>  
                        <div className="questions">
                            <div className="question-option">
                            </div>
                        </div>
                    </div>
                <div className="first-task1">
                    <div className="question-number">
                            <div className="task-content">QUESTION  4</div>
                            <div className="task-score">Score +1</div>
                        </div>  
                        <div className="questions">
                            <div className="question-option">
                            </div>
                        </div>
                    </div>
                <div className="first-task1">
                    <div className="question-number">
                        <div className="task-content">QUESTION  5</div>
                        <div className="task-score">Score +1</div>
                    </div>  
                    <div className="questions">
                        <div className="question-option">
                        </div>
                    </div>
                </div>
 

            </div>
        </>

    )
}
export default Question_container;