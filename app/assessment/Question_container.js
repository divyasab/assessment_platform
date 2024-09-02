import "./question_container.css";

function Question_container(){
    return(
            
        <div className="first-task">
            <div className="question-number">
                <div className="task-content ">QUESTION 1</div>
                <div className="task-score">Score +1</div>
            </div>  
            <div className="questions">
                    <div className="question-options" >Which of the following committees recommended inclusion of fundamental duties ?</div>
                    <div className="options">
                        <div className="option-content">
                            <div className="option-icon"></div>
                            <span className="option-text">Tarapore Committee</span>
                        </div>    
                        <div className="option-content">
                            <div className="option-icon1"></div>
                            <span className="option-text">Radha Krishnan Committee</span>
                        </div>    
                        <div className="option-content">
                            <div className="option-icon1"></div>
                            <span className="option-text">Swaran Singh Committee</span>
                        </div>    
                        <div className="option-content">
                            <div className="option-icon1"></div>
                            <span className="option-text">Balwantrai Mehta Committee</span>
                        </div>    

                    </div>
            </div>
        </div>
    );
};

export default Question_container;