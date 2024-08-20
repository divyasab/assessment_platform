import "./siderbar_container.css"
import Filter_sidebar from "./Filter_sidebar"; 
import Question_container from "./Question_container";
import Timer from "./Timer";

const Siderbar_container =()=>{

    return(
        <>  <div className="siderbar-main">
                <div className="mobile-timer">
                    <Timer/>
                    {/* <img src="Timer Auto.png"/> */}
                </div>
                <button className="filter-button">
                <img src="filterLogo.png" className="filter-logo"/>
                    Filters
                </button>
                <div className="siderbar-contanier">
                    <Filter_sidebar/>
                    <Question_container/>
                    
                </div>
            </div>    
        </>

    )
}
export default Siderbar_container;