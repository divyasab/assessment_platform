import "./questions_list.css";
import Questions_list_items from "./Question_list_items";

const Questions_list = function (){
    return(
        <>
            <div className="questions-list">
                    <div className="question-first">
                        <div className="correct-logo1">
                            <img src="correct_logo.svg" className="correct-image" />
                        </div>
                        <div className="question-font">10</div>
                        <div className="question-font">Q1</div>
                        <div className="question-logo">
                            <span className="question-icon"></span>
                        </div>
                    </div>
                    <div className="question-content"></div>

                <div className="question-list-line"></div>  

                    <div className="question-first">
                        <div className="correct-logo-list">
                            <div className="wrong-icon">&#10005;</div>
                        </div>
                        <div className="question-font">10</div>
                        <div className="question-font">Q1</div>
                        <div className="question-logo">
                            <span className="question-icon"></span>
                        </div>
                    </div>
                    <div className="question-content"></div>

                <div className="question-list-line"></div>  
                    <div className="question-first">
                        
                        <div className="correct-logo-list">
                            <div className="wrong-icon">&#10005;</div>
                        </div>
                        <div className="question-font">10</div>
                        <div className="question-font">Q1</div>
                        <div className="question-logo-list">
                            <div>&#43;</div>

                        </div>
                            
                </div>
                <div className="question-list-line"></div>   

                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                <Questions_list_items/>
                
                <div className="question-first">
                    <div className="unattempted-logo1">
                        <span className="unattempted-icon">!</span>
                    </div>
                    <div className="question-font">10</div>
                    <div className="question-font">Q1</div>
                    <div className="question-logo">
                        <div className="question-icon"></div>
                    </div>
                </div>
                <div className="question-content"></div>

                <div className="question-list-line"></div>  
                <div className="question-first">
                        <div className="unattempted-logo1">
                            <span className="unattempted-icon">!</span>    
                        </div>
                        <div className="question-font">10</div>
                        <div className="question-font">Q1</div>
                        <div className="question-logo">
                            <div className="question-icon"></div>
                        </div>
                </div>
                <div className="question-list-line"></div> 
                <div className="question-first">
                    <div className="unattempted-logo1">
                        <span className="unattempted-icon">!</span>
                    </div>
                    <div className="question-font">10</div>
                    <div className="question-font">Q1</div>
                    <div className="question-logo">
                        <div className="question-icon"></div>

                    </div>
                </div>
                <div className="question-list-line"></div> 
            </div>    
        </>
    );
};

export default Questions_list;