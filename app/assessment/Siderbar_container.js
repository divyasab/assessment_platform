import "./siderbar_container.css";
import Filter_sidebar from "./Filter_sidebar"; 
import Question_container from "./Question_container";
import Timer from "./Timer";

const Siderbar_container = function() {
    return(
        <div className="siderbar-main">
            <div className="siderbar-contanier">
                <Filter_sidebar/>
                <div className="question-contanier">
                    <div className="mobile-only">
                        <div className="siderbar-items">
                            <Timer/>
                            <button className="filter-button">
                                <img src="filterLogo.png" className="filter-logo"/>
                                    Filters
                            </button>
                        </div>
                        <a href="/submit_buttonbar">
                            <button className="submit-button1  mobile-only ">Submit</button>
                        </a>
                    </div>      
                    <Question_container/>
                    <Question_container/>
                    <Question_container/>
                    <Question_container/>
                    <Question_container/>
                </div>
            </div>
        </div>    
    );
};

export default Siderbar_container;