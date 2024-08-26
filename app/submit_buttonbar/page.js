import "./submit_buttonbar.css";
import Header from "../components/Header";

const  submit_buttonbar= function(){
    return(
        <>
            <Header/>
            <div className="submit-container">
                <div className="submit-content">
                    <div className="submit-logo">
                        <img src="correct_logo.svg" className="correct-logo"/>
                    </div>
                    <div className="submit-intraction">
                        <div className="submit-massage">Successfully Sumbitted</div>
                        <div className="submit-massage1">
                            Thank you for completing the test! 
                        </div>
                        <div className="submit-massage2">
                                Review your results and keep practicing. 
                                Great job and keep up the hard work!
                        </div>
                    </div>
                    <div className="check-score-button">
                        <a href="/check_answer">
                            <button className="check-button"> Check Your Score</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default submit_buttonbar;