import "./question_container.css";

function Question_container(){
    return(
            
        <div className="first-task">
            <div className="question-number">
                <div className="task-content ">QUESTION 1</div>
                <div className="task-score">Score +1</div>
            </div>  
            <div className="questions">
                <div className="question-option"></div>
            </div>
            <div className="moblie-only">
                <a href="/submit_buttonbar">
                    <button className="submit-button1  mobile-only ">Submit</button>
                </a>
            </div>      
        </div>
    );
};

export default Question_container;