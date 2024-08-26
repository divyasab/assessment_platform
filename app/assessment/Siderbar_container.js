import "./siderbar_container.css";
import Filter_sidebar from "./Filter_sidebar"; 
import Question_container from "./Question_container";
import Timer from "./Timer";

const Siderbar_container = function() {
    return(
        <div className="siderbar-main">
            <div className="mobile-timer mobile-only">
                <Timer/>
            </div>
            <button className="filter-button mobile-only">
                <img src="filterLogo.png" className="filter-logo"/>
                 Filters
            </button>
            <div className="siderbar-contanier">
                <Filter_sidebar/>
                <div className="question-contanier">
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